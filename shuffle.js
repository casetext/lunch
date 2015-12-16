var ppl = require('./people.js'),
	_ = require('lodash'),
	clipboard = require('copy-paste');

var groupCount = 1, max = 6;

while (ppl.length/groupCount > max) groupCount++;

var grp = Math.ceil(ppl.length / groupCount), gid = 0, result = '';

ppl = _.shuffle(ppl);

out('\n');
group();

for (var i = 0; i < ppl.length; i++) {
	out(ppl[i] + ' ');
	if ((i+1) % grp == 0 && i+1 < ppl.length) {
		out('\n\n');
		group();
	}
}

out('\n');
clipboard.copy(result);


function group() {
	out(++gid + '. ');
}

function out(s) {
	process.stdout.write(s);
	result += s;
}