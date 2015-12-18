var util = require('util');

exports = module.exports = function(n, users) {
	try {
		var request = require('request'),
			slackGroups = require('./slack-groups.json'),
			token = process.env.SLACK_TOKEN;

		users = users.map(function(u) {
			return u.uid;
		});

		request({
			url: 'https://slack.com/api/usergroups.users.update',
			json: true,
			qs: {
				token: token,
				usergroup: slackGroups[n],
				users: users.join(',')
			}
		}, function(err, res, body) {
			if (err) return oops(err);
			if (res.statusCode != 200) return oops(new Error('HTTP ' + res.statusCode + '\n' + util.inspect(body)));
			if (!body.ok) return oops(body.error);
		});
	} catch(ex) {
		oops(ex);
	}
};


function oops(ex) {
	console.error('Could not update Slack groups: ', ex);
}