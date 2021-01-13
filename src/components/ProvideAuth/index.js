import {useProvideAuth, authContext} from "../../network/auth"


function ProvideAuth({ children }) {
    const auth = useProvideAuth()
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    )
}

export {ProvideAuth}