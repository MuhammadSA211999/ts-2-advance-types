let pack: any;
pack = 'Bundle';
const calle = (pack as string).charAt(2)
// console.log(calle)

let batter: any;
batter = true;
const babar = (batter as boolean).valueOf()
// console.log(babar) 

function kgToGram(value: string | number | undefined): string | number | undefined {
    if (typeof value === 'string') {
        const parseValue: number = parseFloat(value) * 1000
        return parseValue + ''
    }
    if (typeof value === 'number') {
        return value * 1000
    }
}

const stringValue = (kgToGram('100') as string)
// const stringValue = <string>kgToGram('100')
console.log(stringValue)

const numberValue = (kgToGram(200) as number)
// const numberValue = <number>kgToGram(200)
console.log(numberValue)
