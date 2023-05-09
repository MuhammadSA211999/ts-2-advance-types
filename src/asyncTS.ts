const makePromiseString = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data: string = 'BD'
        if (data) {
            resolve(data)
        }
        else {
            reject('request rejected')
        }
    })
}

const getPromiseString = async (): Promise<string> => {
    const data = await getPromiseString()
    return data
}
getPromiseString()
interface UserIn {
    name: string
}
const makePromiseObject = (): Promise<UserIn> => {
    return new Promise<UserIn>((resolve, reject) => {
        const user: UserIn = { name: 'MSA' }
        if (user) {
            resolve(user)
        }
        else {
            reject("Cant find user")
        }
    })
}

const getPromiseObject = async (): Promise<UserIn> => {
    const data = await makePromiseObject()
    return data
}
const data = getPromiseObject()

