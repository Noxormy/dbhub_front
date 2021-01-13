import {createContext, useContext, useState} from "react"
import {createDatabase, removeDatabase} from "./requests"

const authContext = createContext(null)


function useAuth() {
    return useContext(authContext)
}


function useProvideAuth() {
    const [user, setUser] = useState(null)

    const signIn = (cb, setLoading) => {
        setLoading(true)

        return createDatabase().then((data) => {
            setUser({
                dbName: data.dbName,
                token: data.token
            })
            setLoading(false)
            cb()
        })
    }

    const signOut = cb => {
        return removeDatabase().then(() => {
            setUser(null)
            cb()
        })
    }

    return {
        user,
        signIn,
        signOut
    }
}


export {authContext, useAuth, useProvideAuth}