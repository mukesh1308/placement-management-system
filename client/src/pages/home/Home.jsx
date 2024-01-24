import { useContext, useEffect } from "react";
import {Cookies} from "../../App";

import { checkValid } from "../../checkValid";


const Home=()=>{
    const cookie=useContext(Cookies)[0];
    const setCookie=useContext(Cookies)[1];
    useEffect(()=>{checkValid(cookie,setCookie)},[cookie,setCookie]);
    return(
        <>
            <h1>{cookie.role}</h1>
            <p>{cookie.key}</p>
        </>
    )
}

export default Home;