const API = 'https://dbhub-py.herokuapp.com/'
const CREATE_NEW_USER = 'create-new-user'

const TOKEN = 'token'
const DB = 'dbName'


export async function createDatabase() {
    let token = localStorage.getItem(TOKEN)
    let dbName = localStorage.getItem(DB)
    if(token && dbName) {
        return {token: token, dbName: dbName}
    }

    let result = await fetch(`${API}/${CREATE_NEW_USER}`)

    if (result.ok) {
        let data = await result.json()
        localStorage.setItem(TOKEN, data.token)
        localStorage.setItem(DB, data.db_name)

        return {token: data.token, dbName: data.db_name}
    } else {
        throw new Error(result.statusText)
    }
}

// TODO: Add remove database method
export async function removeDatabase() {
    // let result = await fetch(`${API}/${CREATE_NEW_USER}`)
    //
    // if (result.ok) {
    //     let data = await result.json()
    localStorage.removeItem(TOKEN)
    localStorage.removeItem(DB)
    //     return data
    // } else {
    //     throw new Error(result.statusText)
    // }
}