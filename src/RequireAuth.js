import { useContext } from "react"
import { useLocation, Navigate } from "react-router-dom"
import UserContext from "./UserContext"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function RequireAuth({ children }) {
    let { user } = useContext(UserContext)
    let location = useLocation()

    if (user === null) {
        return (
            <>
                <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
                {toast.warn('Bạn cần đăng nhập để tiếp tục!')}
            </>

        )
    }
    else {
        return children
    }


}

export default RequireAuth