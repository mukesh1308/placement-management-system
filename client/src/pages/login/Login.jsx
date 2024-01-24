import LoginBlock from "../../components/login_block/LoginBlock";
import ForgotPassword from "../../components/forgot password/ForgotPassword";
import "./login.css";
import { useState } from "react";


const Login=()=>{
    const [login,setlogin]=useState(0);
    console.log(login);
    return(
        <div className="screen">
            {login===0 && <LoginBlock show={setlogin}/>}
            {login===1 && <ForgotPassword show={setlogin}/>}
        </div>
    )
}

export default Login;