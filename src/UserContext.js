import { createContext, useState } from "react";
import { toast } from "react-toastify";
const UserContext = createContext()

export function UserProvider({ children }) {

    let [user, setUser] = useState(null)
    let signIn = (email,password,callback) => {
        fetch("http://localhost:3000/auth/login", {
            method: 'POST',
            body: JSON.stringify({email,password}),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then((res) =>{
            if(res.ok){return res.json()}
            return Promise.reject(res) 
        })
        .then(user => {
            toast.success('Đăng nhập thành công!');
            setUser(user)
            callback()
        })
        .catch(res =>{
            toast.error("Đăng nhập không thành công, Sai email hoặc mật khẩu!")
        })
        
        
    }

    let signOut = (callback) => {
        setUser(null)
        callback()
    }

    return (
        <UserContext.Provider value={{user, signIn, signOut}}>
            {children}
        </UserContext.Provider>

    )

}

export default UserContext