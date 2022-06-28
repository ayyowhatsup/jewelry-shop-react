import { createContext, useState } from "react";

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
            setUser(user)
            callback()
        })
        .catch(res =>{
            alert("Đăng nhập không thành công!")
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