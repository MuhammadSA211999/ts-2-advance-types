"use strict";
let pack;
pack = 'Bundle';
const calle = pack.charAt(2);
// console.log(calle)
let batter;
batter = true;
const babar = batter.valueOf();
// console.log(babar) 
function kgToGram(value) {
    if (typeof value === 'string') {
        const parseValue = parseFloat(value) * 1000;
        return parseValue + '';
    }
    if (typeof value === 'number') {
        return value * 1000;
    }
}
const stringValue = kgToGram('100');
// const stringValue = <string>kgToGram('100')
console.log(stringValue);
const numberValue = kgToGram(200);
// const numberValue = <number>kgToGram(200)
console.log(numberValue);
