import { useContext, useEffect, useState } from "react";
import {Cookies} from "../../App";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import User from "../../components/user/User";

import { checkValid } from "../../checkValid";
import "./home.css";

const Home=()=>{
    const cookie=useContext(Cookies)[0];
    const setCookie=useContext(Cookies)[1];
    const [user,setUser]=useState({});
    useEffect(()=>{
        checkValid(cookie,setCookie);
        let url=process.env.REACT_APP_API_URL+"/user"
        axios.get(url,{
            headers:{
                key:cookie.key
            }
        })
        .then((res)=>{
            setUser(res.data.data);
        })
        .catch((err)=>{})
    },[cookie,setCookie]);
    let links=[{tag:"company",path:"/company"},{tag:"drives",path:"/drive"},{tag:"update",path:"/update"}]
    return(
        <>
           <Navbar links={links}/>
           <div className="home-cont">
            <User user={user}/>
           </div>
        </>
    )
}

export default Home;