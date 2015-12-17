var ppl = require('./people.js'),
	slack = require('./slack'),
	_ = require('lodash'),
	clipboard = require('copy-paste');

var groupCount = 1, max = 6;

while (ppl.length/groupCount > max) groupCount++;

var grp = Math.ceil(ppl.length / groupCount), gid = 0, result = '', users;

ppl = _.shuffle(ppl);

out('\n');
group();

for (var i = 0; i < ppl.length; i++) {
	out(ppl[i].name + ' ');
	users.push(ppl[i].uid);
	if ((i+1) % grp == 0 && i+1 < ppl.length) {
		out('\n\n');
		group();
	}
}


out('\n');
slack(gid, users);
clipboard.copy(result);


function group() {
	if (users) slack(gid, users);
	out('@group' + ++gid + ' ');
	users = [];
}

function out(s) {
	process.stdout.write(s);
	result += s;
}