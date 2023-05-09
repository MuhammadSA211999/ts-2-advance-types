const createArray = (param: string) => {
    return [param]
}
const result1 = createArray('BD')

const createArray1 = (param: number): number[] => [param]
const result2 = createArray1(3)


const genericFunc1 = <T>(param: T): T[] => {
    return [param]
}
const genRes1 = genericFunc1<string>('BD')

interface UserIn {
    name: string;
    age: number
}
const user3: UserIn = {
    name: 'MSA',
    age: 24
}
const genRes2 = genericFunc1<UserIn>(user3)

const genFunTuple = <X, Y>(par1: X, par2: Y): [X, Y] => [par1, par2]
const genFunTupleRes1 = genFunTuple<{ name: string }, string>({ name: 'MSA' }, 'Gulbahar')

interface UserIn2 {
    role: string;
    name: string;
    age: number
}
const user4: UserIn2 = {
    role: 'hus',
    name: 'MSA',
    age: 24
}
const genFunTupleRes2 = genFunTuple<UserIn, UserIn2>(user3, user4)
const genFunTupleRes3 = genFunTuple<UserIn, Array<string>>(user3, ['NAMIK', 'CAMIK'])

//Generic Spreading 
const myCrush: string = 'Gulbahar'
interface Me {
    name: string;
    age: number;
    salary: string
}

const me: Me = {
    name: 'MSA',
    age: 24,
    salary: 'unknown'
}

const addMeWithCrush = <T>(me: T): T => {
    const crush = 'Gulbahar'
    const couple = { ...me, crush }
    return couple
}

const coupleRes = addMeWithCrush(me)