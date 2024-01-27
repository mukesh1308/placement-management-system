import { useRef, useState, useEffect } from "react";
import axios from "axios";

import userId from "../img/male-icon.png";
import "./forgot_password.css";

const ForgotPassword=({show,key,setKey,wait})=>{
    const user=useRef();
    const[error,setError]=useState("");
    const block=useRef();
    const btn=useRef();
    useEffect(()=>{
        setTimeout(()=>{
            block.current.style.transform="translateX(0px)";
            block.current.style.opacity="1";
        },50);
    },[])
    const sendOTP=()=>{
        if(!user.current.value){
            setError("user Id is empty");
            return;
        }
        let url=process.env.REACT_APP_API_URL+"/forgot";
        btn.current.disabled=true;
        user.current.disabled=true;
        wait.current.classList.add("wait");
        axios.post(url,{userID:user.current.value})
        .then((res)=>{
            setKey(res.data.data);
            btn.current.disabled=false;
            user.current.disabled=false;
            wait.current.classList.remove("wait");
            show(2);
        })
        .catch((err)=>{
            btn.current.disabled=false;
            user.current.disabled=false;
            wait.current.classList.remove("wait");
            setError(err.response.data.data);
        });
    }
    return(
        <div ref={block} className="login forgot">
            <div>
                <h2>Forgot Password</h2>
                <p>An otp will be send to your email address in order to verify you</p>
                <div>
                    <img src={userId} alt=""/>
                    <input ref={user} autoComplete="off" onChange={()=>setError("")} type="text" name="name" id="name" placeholder="User Id"/>
                </div>
                <div className="error">{error}</div>
                <button type="button" ref={btn} onClick={()=>sendOTP()}>Send OTP</button>
                <span onClick={()=>show(0)}>back to login</span>
            </div>
        </div>
    )
}

export default ForgotPassword;