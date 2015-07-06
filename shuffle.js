var ppl = require('./people.js'),
	_ = require('lodash');

var grp = Math.ceil(ppl.length / 2), gid = 0;

ppl = _.shuffle(ppl);

process.stdout.write('\n');
group();

for (var i = 0; i < ppl.length; i++) {
	process.stdout.write(ppl[i] + ' ');
	if ((i+1) % grp == 0 && i+1 < ppl.length) {
		process.stdout.write('\n\n');
		group();
	}
}

process.stdout.write('\n');


function group() {
	process.stdout.write(++gid + '. ');
}