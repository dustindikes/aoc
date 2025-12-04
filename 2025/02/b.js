#!/usr/bin/env node

var layout = require('../common/layout.js')

layout.header('02','B')

const expected = 4174379265;

const process = (data) => {
	let id = 0;
    data[0].split(',').forEach(x => {
		let first = parseInt(x.split('-')[0]);
		let last = parseInt(x.split('-')[1]);
		for(let y = first; y <= last; y++) {
			const ystr = y.toString();
			if(
				/^(\w*)\1+$/.test(ystr)
			) {
				console.log(y);
				id += y;
			}
		}
	});
	return id;
};

require('../common/readInput.js').get('input-test.txt', (data) => {
    layout.test(process(data),expected);
})

require('../common/readInput.js').get('input.txt', (data) => {
    layout.answer(process(data))
})
