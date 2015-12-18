var ppl = require('./people.js'),
	slack = require('./slack'),
	_ = require('lodash'),
	clipboard = require('copy-paste');

var groupCount = 1, max = 6, groups = [[]], g = 0, result = '';

while (ppl.length/groupCount > max) {
	groupCount++;
	groups.push([]);
}

ppl = _.shuffle(ppl);

while (ppl.length) {
	groups[g].push(ppl.pop());
	if (++g >= groupCount) g = 0;
}

for (var i = 0; i < groupCount; i++) {
	slack(i, groups[i]);
	out('@group' + (i+1));
	for (var u = 0; u < groups[i].length; u++) {
		out(' ' + groups[i][u].name);
	}
	out('\n\n');
}


clipboard.copy(result);

function out(s) {
	process.stdout.write(s);
	result += s;
}