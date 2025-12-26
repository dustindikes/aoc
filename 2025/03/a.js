#!/usr/bin/env node

var layout = require('../common/layout.js')

layout.header('03','A')

const expected = 357;

const process = (data) => {
	let output = 0;
    data.forEach(x => {
		let digits = [];
		console.log(x);
		x.split('').forEach((y,i) => {
			const digit = parseInt(y)
			//console.log(digit);
			if(digits.length === 0) {
				digits.push(digit);
				console.log('^ Add to first digit',digits);
			} else if(digits.length === 1) {
				if(digit > digits[0] && i !== x.length-1) {
					digits[0] = digit;
					console.log('^ Replace first digit',digits);
				} else {
					digits.push(digit);
					console.log('^ Add to second digit',digits);
				}
			} else if(digit > digits[0] && i !== x.length-1 ) {
				digits = [digit];
				console.log('^ Replace in first digit',digits);
			} else if(digit > digits[1]) {
				digits[1] = digit;
				console.log('^ Replace in second digit',digits);
			}
		});
		console.log('DIGITS',digits,parseInt(digits[0].toString()+digits[1].toString()));
		output += parseInt(digits[0].toString()+digits[1].toString());
	});
	return output;
};

require('../common/readInput.js').get('input-test.txt', (data) => {
    layout.test(process(data),expected);
})

require('../common/readInput.js').get('input.txt', (data) => {
    layout.answer(process(data))
})
