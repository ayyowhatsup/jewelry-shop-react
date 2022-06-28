import { useContext } from "react"
import { useLocation, Navigate } from "react-router-dom"
import UserContext from "./UserContext"

function RequireAuth({ children }) {
    let { user } = useContext(UserContext)
    let location = useLocation()
    if (user === null) {
        return (
            <Navigate to={"/login"} state={{ from: location }} replace>
            </Navigate>
        )
    }
    else {
        return children
    }


}

export default RequireAuth