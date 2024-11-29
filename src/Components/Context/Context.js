import { createContext, useState } from "react";

export let UserContext = createContext()

export default function UserContextprovider(props) {

    const [counter, setcounter] = useState(0)

    function childrenCount(){
        setcounter(Math.random())
    }

    return <UserContext.Provider value={{ counter,childrenCount }}>
        {props.children}    
    </UserContext.Provider>
}