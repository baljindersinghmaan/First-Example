import ComponentB from "./ComponentB"
import React, {useState, createContext} from "react"

export const UserContext = createContext();

function ComponentA(){

    const [user, setUser] = useState("Baljinder")

    return(<div className="box">
        <p>Component A</p>
        <UserContext.Provider value={user}>
        <ComponentB/>
        </UserContext.Provider>
        

       
    </div>)

}

export default ComponentA