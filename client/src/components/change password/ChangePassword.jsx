import { useState,useRef, useEffect } from "react";
import axios from "axios";
import password from "../img/passcode-icon.png"
import back from "../img/angle-circle-left-icon.png";


const ChangePassword=({show,keys,wait})=>{
    const[error,setError]=useState("");
    const pass=useRef();
    const conform=useRef();
    const block=useRef();
    const btn=useRef();
    useEffect(()=>{
        setTimeout(()=>{
            block.current.style.transform="translateX(0px)";
            block.current.style.opacity="1";
        },50);
    },[])
    const change=()=>{
        if(!pass.current.value){
            setError("password is empty");
            return;
        }
        if(!conform.current.value){
            setError("conform password is empty");
            return;
        }
        if(pass.current.value!==conform.current.value){
            setError("password and conform password must be same");
            return;
        }
        let url=process.env.REACT_APP_API_URL+"/forgot/change";
        pass.current.disabled=true;
        conform.current.disabled=true;
        btn.current.disabled=true;
        wait.current.classList.add("wait");
        axios.put(url,{password:pass.current.value},{
            headers:{
                key:keys
            }
        })
        .then((res)=>{
            pass.current.disabled=false;
            conform.current.disabled=false;
            btn.current.disabled=false;
            wait.current.classList.remove("wait");
            show(4);
        })
        .catch((err)=>{
            pass.current.disabled=false;
            conform.current.disabled=false;
            btn.current.disabled=false;
            wait.current.classList.remove("wait");
            setError(err.response.data.data);
        })

    }
    return(
        <div ref={block} className="login">
            <img className="back" onClick={()=>show(2)} src={back} alt=""/>
            <div>
                <h2>Enter new Password</h2>
                <div>
                    <img src={password} alt=""/>
                    <input type="text" ref={pass} onChange={()=>setError("")} name="pwd" id="pwd" placeholder="Password"/>
                </div>
                <div>
                    <img src={password} alt=""/>
                    <input type="password" ref={conform} onChange={()=>setError("")} name="conform" if="conform" placeholder="Conform Password"/>
                </div>
                <div className="error">{error}</div>
                <button type="button" ref={btn} onClick={()=>change()}>Change Password</button>
            </div>
        </div>
    )
}

export default ChangePassword;