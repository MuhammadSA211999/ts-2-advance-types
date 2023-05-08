const rolls: Array<number> = [1, 3, 5, 6, 7, 8]
const names: Array<string> = ['a', 'e']
const user: Array<{ name: string; age: number }> = [{ name: 'sa', age: 22 }]

type GenericArray<T> = Array<T>

const rolNum: GenericArray<number> = [13, 46, 78, 9]
const stNames: GenericArray<string> = ['s', 'b']

type user = {
    name: string;
    age: number
}
const users: GenericArray<user> = [
    {
        name: 'sa',
        age: 24
    },
    {
        name: 'sa',
        age: 24
    }
]

type GenericTuple<X, Y> = [X, Y]
type General = {
    name: string;
}
type Men = General & {
    smoking: boolean;
    visited: string;
}

type Women = General & {
    'well-educated': boolean;
    college: string;
}
const couple: GenericTuple<Men, Women> = [{ name: 'sa', smoking: false, visited: 'ind' }, { name: 'Gulbahar', "well-educated": true, college: 'unknown' }]

type User = {
    name: string;
    age: number;
    com: 'Meta'
}
const jokerRelation: GenericTuple<User, string> = [{ name: 'Zuker-berg', age: 34, com: 'Meta' }, 'Picila-Chan']
