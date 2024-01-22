import { useContext, useEffect } from "react";
import {Cookies} from "../App";
const Home=()=>{
    const cookie=useContext(Cookies)[0];
    useEffect(()=>{
        if(!cookie.key){
            window.location.href="/";
            return;
        }
    })
    return(
        <>
            <h1>{cookie.role}</h1>
            <p>{cookie.key}</p>
        </>
    )
}

export default Home;