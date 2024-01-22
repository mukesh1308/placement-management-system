import { useContext, useRef, useState } from "react";
import { Cookies } from "../App";
import axios from "axios";
import loginLogo from "./man-user-circle-icon.png";
import userId from "./male-icon.png";
import pwdImg from "./lock-icon.png";
import "./login.css";


const Login=()=>{
    const setCookie=useContext(Cookies)[1];
    const [error,setError]=useState("");
    const user=useRef();
    const pwd=useRef();
    const submit=()=>{
        if(!user.current.value){
            setError("user id is Empty");
            return;
        }
        if(!pwd.current.value){
            setError("Password is Empty");
            return;
        }
        let url="http://"+process.env.REACT_APP_API_URL+":"+process.env.REACT_APP_API_PORT+"/login";
        axios.post(url,{userID:user.current.value,password:pwd.current.value})
        .then((res)=>{
            setCookie("key",res.data.data.cookie);
            setCookie("role",res.data.data.role);
            window.location.href="/home";
            return;
        })
        .catch((err)=>{
            setError(err.response.data.data);
        });
    }
    // setCookie("userData","test");
    return(
        <div className="screen">
            <div className="login">
            <img className="logo" src={loginLogo} alt="icon"/>
            <div>
                <h2>Login</h2>
                <div>
                    <img src={userId} alt=""/>
                    <input type="text" ref={user} onChange={()=>{setError("")}} name="user" id="user" placeholder="User Id"/>
                </div>
                <div>
                    <img src={pwdImg} alt=""/>
                    <input type="password" ref={pwd} onChange={()=>{setError("")}} name="pwd" id="pwd" placeholder="Password"/>
                </div>
                <div className="error">{error}</div>
                <button onClick={submit} type="button">Login</button>
                <span>Forgot password?</span>
            </div>
        </div>
        
        </div>
    )
}

export default Login;