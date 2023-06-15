import {createContext, useEffect, useState} from "react";
import {getData} from "../services/users.services.js";

export const UserContext = createContext(null)

export function UserContextProvider({children}){

    const [user, setUser] = useState(null)

    useEffect(() => {
        if(!user){
            try {
                getData().then(r => setUser(r.data))
            } catch (err) {
                throw err
            }
        }
    },[])

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}