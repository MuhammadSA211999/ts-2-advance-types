interface IUser {
    name: string;
    age: number
}

type Academy = {
    school: string;
    college: string;
    varsity: string
}
interface IProfassion extends IUser {
    profession: string;
    salary: number;
    institute: string
}

// TYPE AR INTERFACE ER INTERSECTION 
const msa: IProfassion & Academy = {
    name: 'Muhammad SA',
    age: 24,
    school: 'SCHOLARSHOME',
    college: 'GSC',
    varsity: 'NSTU',
    profession: 'SWE',
    salary: 100,
    institute: 'TARMAT INC'
}

const asa: IProfassion | Academy = {
    name: 'Muhammad SA',
    age: 24,
    college: 'AGC',
    varsity: 'NSTU',
    profession: 'SWE',
    salary: 100,
    institute: 'TARMAT INC'
}

type AddNumberType = (x: number, y: number) => number
interface IAddNumber {
    (x: number, y: number): number
}
const addNumber: AddNumberType = (num1, num2) => num1 + num2
const addNumber2: IAddNumber = (num1, num2) => num1 + num2
const addNumber3 = addNumber(3, 4)
console.log(addNumber3)

// arrya in TS 
const roll: number[] = [1, 3, 4, 6, 7, 9]

type RollNumbers = number[]
const newRole: RollNumbers = [1, 4, 5, 7]

interface IRollNumber {
    [index: number]: string
}
const iRollNumbers: IRollNumber = ['2', '56', '88']




