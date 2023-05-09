type Info = {
  name: string;
  age: number;
  salary: string;
}
type NewType = 'age' | 'name'
const name2: NewType = 'name'

type NewType2 = keyof Info
const age: NewType2 = 'age'

type Info2 = {
  name: string;
  age: number;
  salary: string;
}

function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
  return obj[key]
}

const me: Info2 = {
  name: 'MSA',
  age: 24,
  salary: 'unknown'
}
const property1 = getProperty<Info2, 'name'>(me, 'name')
console.log(property1)