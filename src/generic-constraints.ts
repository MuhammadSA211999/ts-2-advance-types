// constraints mean force kora 
//kunu ekta type ke force kora ze tar ei ei property takte hobe
interface Me {
    name: string;
    age: number;
    salary: string;
    com: string;
    role: string
}

type MantdatoryInfo = {
    name: string;
    age: number;
    com: string;
    role: string;
}
const crushAndMe = <T extends MantdatoryInfo>(me: T) => {
    const crush = 'Gulbahar'
    const newData = { ...me, crush }
    return newData
}

const me1: Me = {
    name: 'MSA',
    age: 24,
    salary: 'unknown',
    com: 'TARMAT INC',
    role: 'CEO'
}

const res1 = crushAndMe<Me>(me1)
const crushRes = res1.role
const crRes = res1.crush

