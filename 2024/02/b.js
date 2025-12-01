#!/usr/bin/env node

var layout = require('../common/layout.js')

layout.header('02','B')

const expected = 4;

const process = (data) => {
    var answer = 0;

    data.forEach(x => {
        var sp = x.split(' ').map(Number);
        console.log('------')
        console.log(sp)
        var increasing = true;
        var safe = true;
        for(var y = 0; y < sp.length; y++) {
            if( y === 1 && sp[0] > sp[1] ) {
                increasing = false;
            }
            if(y > 0) {
                if(increasing) {
                    var change = sp[y] - sp[y-1];
                    if(change > 3 || change === 0) {
                        if(
                            y === sp.length-1 ||
                            (
                                sp[y+1] - sp[y-1] <= 3 &&
                                sp[y+1] - sp[y-1] > 0 
                            )
                        ) {
                            console.log('inc rm',y+1,sp[y]);
                            // safe
                        }
                        else {
                            safe = false;
                        }
                    }
                    else if(sp[y] < sp[y-1]) {
                        if(
                            y === sp.length-1 ||
                            (
                                sp[y+1] > sp[y-1]
                            )
                        ) {
                            console.log('inc rm',y+1,sp[y]);
                            // safe
                        }
                        else {
                            safe = false;
                        }
                    }
                } else {
                    var change = sp[y-1] - sp[y];
                    if(change > 3 || change === 0) {
                        if(
                            y === sp.length-1 ||
                            (
                                sp[y-1] - sp[y+1] <= 3 &&
                                sp[y-1] - sp[y+1] > 0 
                            )
                        ) {
                            console.log('dec rm',y+1,sp[y]);
                            // safe
                        }
                        else {
                            safe = false;
                        }
                    }
                    else if(sp[y] > sp[y-1]) {
                        if(
                            y === sp.length-1 ||
                            (
                                sp[y+1] < sp[y-1]
                            )
                        ) {
                            console.log('dec rm',y+1,sp[y]);
                            // safe
                        }
                        else {
                            safe = false;
                        }
                    }
                }
            }
        }
        console.log('SAFE',safe)
        if(safe) answer++;
    })

    return answer
};

require('../common/readInput.js').get('input-test.txt', (data) => {
    layout.test(process(data),expected);
})

require('../common/readInput.js').get('input.txt', (data) => {
    layout.answer(process(data))
})
