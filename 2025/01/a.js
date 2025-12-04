#!/usr/bin/env node

var layout = require('../common/layout.js')

layout.header('01','A')

const expected = 3;

const process = (data) => {
	let password = 0;
	var pos = 50;
	console.log(pos);
    data.forEach(x => {
		let dir = x[0] === 'R' ? 1 : -1;
		let num = parseInt(x.substr(1)) * dir;
		pos = pos + num;
		if(pos < 0) {
			while(pos < 0) {
				pos = 100 + pos;
			}
		} else if(pos > 99) {
			while(pos > 99) {
				pos = pos - 100;
			}
		}
		if(pos === 0) {
			password++;
		}
		console.log(x,num,pos);
	});
	return password;
};

require('../common/readInput.js').get('input-test.txt', (data) => {
    layout.test(process(data),expected);
})

require('../common/readInput.js').get('input.txt', (data) => {
    layout.answer(process(data))
})
