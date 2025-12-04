#!/usr/bin/env node

var layout = require('../common/layout.js')

layout.header('01','B')

const expected = 6;

const process = (data) => {
	let password = 0;
	var pos = 50;
    data.forEach(x => {
		let dir = x[0] === 'R' ? 1 : -1;
		let rawNum = parseInt(x.substr(1));
		let mod = rawNum % 100;
		let num = mod * dir;
		let origPos = pos;

		pos = pos + num; 

		password += Math.floor(rawNum / 100);
		console.log('LOOPS',Math.floor(rawNum / 100));

		if(pos < 0) {
			pos = 100 + origPos + num;
			if(mod >= origPos && origPos !== 0) {
				console.log('LLLL','MOD,ORIGPOS',mod,origPos);
				password++;
			}
		} else if(pos > 99) {
			pos = ((100 - origPos) - num) * -1;
			if(mod >= (100-origPos) && origPos !== 0) {
				console.log('RRRR','MOD,ORIGPOS',mod,100-origPos);
				password++;
			}
		} else if (pos === 0) {
			console.log('ZEROOO');
			password++;
		}

		console.log(x,num,pos);
		console.log();
	});
	console.log(password);
	return password;
};

require('../common/readInput.js').get('input-test.txt', (data) => {
    layout.test(process(data),expected);
})

require('../common/readInput.js').get('input.txt', (data) => {
    layout.answer(process(data))
})
