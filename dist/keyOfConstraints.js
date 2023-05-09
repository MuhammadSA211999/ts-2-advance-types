"use strict";
const name2 = 'name';
const age = 'age';
function getProperty(obj, key) {
    return obj[key];
}
const me = {
    name: 'MSA',
    age: 24,
    salary: 'unknown'
};
const property1 = getProperty(me, 'name');
console.log(property1);
