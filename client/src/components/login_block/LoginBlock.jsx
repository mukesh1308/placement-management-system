import { useContext, useEffect, useRef, useState } from "react";
import { Cookies } from "../../App";
import axios from "axios";
import loginLogo from "../img/man-user-circle-icon.png";
import userId from "../img/male-icon.png";
import pwdImg from "../img/lock-icon.png";
import "./login_block.css";


const LoginBlock=({show,setCursor,wait})=>{
    const setCookie=useContext(Cookies)[1];
    const [error,setError]=useState("");
    const user=useRef();
    const pwd=useRef();
    const block=useRef();
    const btn=useRef();
    useEffect(()=>{
        setTimeout(()=>{
            block.current.style.transform="translateX(0px)";
            block.current.style.opacity="1";
        },50);
    },[])
    const submit=()=>{
        if(!user.current.value){
            setError("user id is Empty");
            return;
        }
        if(!pwd.current.value){
            setError("Password is Empty");
            return;
        }
        let url=process.env.REACT_APP_API_URL+"/login";
        user.current.disabled=true;
        pwd.current.disabled=true;
        btn.current.disabled=true;
        wait.current.classList.add("wait");
        axios.post(url,{userID:user.current.value,password:pwd.current.value})
        .then((res)=>{
            setCookie("key",res.data.data.cookie);
            setCookie("role",res.data.data.role);
            window.location.href="/home";
            return;
        })
        .catch((err)=>{
            btn.current.disabled=false;
            user.current.disabled=false;
            pwd.current.disabled=false;
            wait.current.classList.remove("wait");
            setError(err.response.data.data);
        });
    }
    return(
        <div ref={block} className="login">
            <img className="logo" src={loginLogo} alt="icon"/>
            <div>
                <h2>Login</h2>
                <div>
                    <img src={userId} alt=""/>
                    <input type="text" autoComplete="off" ref={user} onChange={()=>{setError("")}} name="user" id="user" placeholder="User Id"/>
                </div>
                <div>
                    <img src={pwdImg} alt=""/>
                    <input type="password" ref={pwd} autoComplete="off" onChange={()=>{setError("")}} name="pwd" id="pwd" placeholder="Password"/>
                </div>
                <div className="error">{error}</div>
                <button onClick={submit} ref={btn} type="button" >Login</button>
                <span onClick={()=>show(1)}>Forgot password?</span>
            </div>
        </div>
    )
}

export default LoginBlock;