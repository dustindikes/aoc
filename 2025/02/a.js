#!/usr/bin/env node

var layout = require('../common/layout.js')

layout.header('02','A')

const expected = 1227775554;

const process = (data) => {
	let id = 0;
    data[0].split(',').forEach(x => {
		let first = parseInt(x.split('-')[0]);
		let last = parseInt(x.split('-')[1]);
		for(let y = first; y <= last; y++) {
			const ystr = y.toString();
			const mid = Math.floor(ystr.length/2);
			if(
				ystr.length % 2 === 0 && // Even number of digits
				ystr.substring(0,mid) === ystr.substring(mid)
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
