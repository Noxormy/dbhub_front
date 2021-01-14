import {useAuth} from "../../network/auth"
import {PREFIX} from "../../network/env"
import {Redirect, Route} from "react-router-dom"

function PrivateRoute({children}) {
    let auth = useAuth()
    return (
        <Route
            render={({ location }) =>
                auth.user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: PREFIX,
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    )
}

export {PrivateRoute}