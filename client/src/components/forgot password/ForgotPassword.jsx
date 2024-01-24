import { useRef, useState } from "react";
import axios from "axios";

import userId from "../img/male-icon.png";
import "./forgot_password.css";

const ForgotPassword=({show})=>{
    const user=useRef();
    const[error,setError]=useState("");

    const sendOTP=()=>{
        if(!user.current.value){
            setError("user Id is empty");
            return;
        }
        let url="http://"+process.env.REACT_APP_API_URL+":"+process.env.REACT_APP_API_PORT+"/forget/"
        axios.post(url,{userID:user.current.value})
        .then((req)=>{

        })
    }
    return(
        <div className="login forgot">
            <div>
                <h2>Forgot Password</h2>
                <p>An otp will be send to your email address in order to verify you</p>
                <div>
                    <img src={userId} alt=""/>
                    <input ref={user} onChange={()=>setError("")} type="text" name="name" id="name" placeholder="User Id"/>
                </div>
                <div className="error">{error}</div>
                <button type="button" onClick={()=>sendOTP()}>Send OTP</button>
                <span onClick={()=>show(0)}>back to login</span>
            </div>
        </div>
    )
}

export default ForgotPassword;