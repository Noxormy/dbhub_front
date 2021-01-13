import {useAuth} from "../../network/auth"
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
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    )
}

export {PrivateRoute}