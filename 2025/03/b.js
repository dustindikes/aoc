#!/usr/bin/env node

var layout = require('../common/layout.js')

layout.header('03','B')

const expected = 3121910778619;

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
			} else if(digits.length < 12) {
				if(digit > digits[0] && i < x.length-12) {
					digits[0] = digit;
					console.log('^ Replace first digit',digits);
				} else {
					let start = 1;
					let replaced = false;
					if(i >= x.length-12) {
						start = 12 + i - x.length;
					}
					for(let z = start; z <= 11; z++) {
						if(!replaced && digits[z] !== undefined) {
							console.log('ZZZ',z,digits[z],digit);
							if(digits[z] < digit) {
								digits[z] = digit;
								digits = digits.slice(0,z+1);
								console.log('^ Replaced a digit and cleared after',digits[z],digit,digits);
								replaced = true;
							}
						}
					}
					if(!replaced) {
						digits.push(digit);
						console.log('^ Add to array',digits);
					}
				}
			} else if(digit > digits[0] && i < x.length-12) {
				digits = [digit];
				console.log('^ Replace in first digit',digits);
			} else {
				let start = 1;
				if(i >= x.length-12) {
					start = 12 + i - x.length;
				}
				for(let z = start; z <= 11; z++) {
					console.log('ZZZ',z,digits[z],digit);
					if(digits[z] < digit) {
						digits[z] = digit;
						digits = digits.slice(0,z+1);
						console.log('^ Replaced a digit and cleared after',digits[z],digit,digits);
					}
				}
				//digits[1] = digit;
				//console.log('^ Replace in second digit',digits);
			}
		});
		console.log('DIGITS',digits,
			parseInt(
				digits[0].toString()+
				digits[1].toString()+
				digits[2].toString()+
				digits[3].toString()+
				digits[4].toString()+
				digits[5].toString()+
				digits[6].toString()+
				digits[7].toString()+
				digits[8].toString()+
				digits[9].toString()+
				digits[10].toString()+
				digits[11].toString()
			)
		);
		output += parseInt(
			digits[0].toString()+
			digits[1].toString()+
			digits[2].toString()+
			digits[3].toString()+
			digits[4].toString()+
			digits[5].toString()+
			digits[6].toString()+
			digits[7].toString()+
			digits[8].toString()+
			digits[9].toString()+
			digits[10].toString()+
			digits[11].toString()
		);
	});
	return output;
};

require('../common/readInput.js').get('input-test.txt', (data) => {
    layout.test(process(data),expected);
})

require('../common/readInput.js').get('input.txt', (data) => {
    layout.answer(process(data))
})
