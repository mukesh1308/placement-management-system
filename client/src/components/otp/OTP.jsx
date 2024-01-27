import { useRef, useState, useEffect } from "react";
import password from "../img/passcode-icon.png";
import back from "../img/angle-circle-left-icon.png";
import axios from "axios";
import "./otp.css";

const OTP=({show,keys,setKey,wait})=>{
    const[error,setError]=useState("");
    const otp=useRef();
    const block=useRef();
    const btn=useRef();
    useEffect(()=>{
        setTimeout(()=>{
            block.current.style.transform="translateX(0px)";
            block.current.style.opacity="1";
        },50);
    },[])
    const submit=()=>{
        if(!otp.current.value){
            setError("otp is Empty");
            return;
        }
        if(otp.current.value.length!==6){
            setError("OTP must have only 6 character");
            return;
        }
        let url=process.env.REACT_APP_API_URL+"/forgot/check";
        btn.current.disabled=true;
        otp.current.disabled=true;
        wait.current.classList.add("wait");
        axios.post(url,{otp:otp.current.value},{
            headers:{
                key:keys.key,
                user:keys.user
            }
        })
        .then((res)=>{
            setKey(res.data.data);
            btn.current.disabled=false;
            otp.current.disabled=false;
            wait.current.classList.remove("wait");
            show(3);
        })
        .catch((err)=>{
            btn.current.disabled=false;
            otp.current.disabled=false;
            wait.current.classList.remove("wait");
            setError(err.response.data.data);
        });
    }
    return(
        <div ref={block} className="login">
            <img className="back" onClick={()=>show(1)} src={back} alt=""/>
            <div>
                <h2>OTP</h2>
                <p>OTP as been send to {keys.email}</p>
                <div>
                    <img src={password} alt=""/>
                    <input type="text" autoComplete="off" ref={otp} onChange={()=>setError("")} name="otp" id="otp" placeholder="Enter OTP"/>
                </div>
                <div className="error">{error}</div>
                <button onClick={submit} ref={btn} type="button">Submit</button>
            </div>
        </div>
    );
}

export default OTP;