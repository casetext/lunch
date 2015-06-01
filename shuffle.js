var ppl = require('./people.json'),
	_ = require('lodash');

var grp = 8;

ppl = _.shuffle(ppl);

process.stdout.write('\n');

for (var i = 0; i < ppl.length; i++) {
	process.stdout.write(ppl[i] + ' ');
	if ((i+1) % grp == 0) process.stdout.write('\n\n');
}

process.stdout.write('\n');
