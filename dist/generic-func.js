"use strict";
const createArray = (param) => {
    return [param];
};
const result1 = createArray('BD');
const createArray1 = (param) => [param];
const result2 = createArray1(3);
const genericFunc1 = (param) => {
    return [param];
};
const genRes1 = genericFunc1('BD');
const user3 = {
    name: 'MSA',
    age: 24
};
const genRes2 = genericFunc1(user3);
const genFunTuple = (par1, par2) => [par1, par2];
const genFunTupleRes1 = genFunTuple({ name: 'MSA' }, 'Gulbahar');
const user4 = {
    role: 'hus',
    name: 'MSA',
    age: 24
};
const genFunTupleRes2 = genFunTuple(user3, user4);
const genFunTupleRes3 = genFunTuple(user3, ['NAMIK', 'CAMIK']);
//Generic Spreading 
const myCrush = 'Gulbahar';
const me = {
    name: 'MSA',
    age: 24,
    salary: 'unknown'
};
const addMeWithCrush = (me) => {
    const crush = 'Gulbahar';
    const couple = Object.assign(Object.assign({}, me), { crush });
    return couple;
};
const coupleRes = addMeWithCrush(me);
