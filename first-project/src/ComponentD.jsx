import React,{useContext} from "react"
import { UserContext } from "./ComponentA"

function ComponentD(){

    const user = useContext(UserContext)
    return(<div className="box">
        <h2>{user}</h2>

    </div>)

}

export default ComponentD