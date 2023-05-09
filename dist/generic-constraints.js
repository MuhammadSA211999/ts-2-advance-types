"use strict";
const crushAndMe = (me) => {
    const crush = 'Gulbahar';
    const newData = Object.assign(Object.assign({}, me), { crush });
    return newData;
};
const me1 = {
    name: 'MSA',
    age: 24,
    salary: 'unknown',
    com: 'TARMAT INC',
    role: 'CEO'
};
const res1 = crushAndMe(me1);
const crushRes = res1.role;
const crRes = res1.crush;
