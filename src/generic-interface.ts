interface PersonInterface<I, E, P, W = null> {
    user: I;
    education: E;
    prof: P;
    wife?: W
}
interface UserInfo {
    name: string;
    age: 40;
    country: string
}

interface Education {
    school: string;
    college: string;
    phD: boolean;
    researchPapers: number
}

type Prof = {
    company: string;
    duration: number;
    role: string
}

type Wife = {
    name: string;
    age: number;
    country: string
}


const sundarPichai: PersonInterface<UserInfo, Education, Prof, Wife> = {
    user: {
        name: 'SunadarPicai',
        age: 40,
        country: 'USA',
    },
    education: {
        college: 'Delhi Uni',
        phD: true,
        researchPapers: 12,
        school: 'Kahnpur'
    },

    prof: {
        company: 'Alphabet',
        duration: 12,
        role: 'CEO'
    },
    wife: {
        name: 'Pomita',
        age: 36,
        country: 'USA'

    }
}