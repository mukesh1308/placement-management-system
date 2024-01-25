import LoginBlock from "../../components/login_block/LoginBlock";
import ForgotPassword from "../../components/forgot password/ForgotPassword";
import OTP from "../../components/otp/OTP";
import ChangePassword from "../../components/change password/ChangePassword";
import SuccessChangePassword from "../../components/success change password/SuccessChangePassword";
import "./login.css";
import { useRef, useState } from "react";


const Login=()=>{
    const [login,setlogin]=useState(0);
    const [key,setKey]=useState({});
    const wait=useRef();
    return(
        <div ref={wait} className="screen">
            {login===0 && <LoginBlock show={setlogin} wait={wait}/>}
            {login===1 && <ForgotPassword show={setlogin} keys={key} setKey={setKey} wait={wait}/>}
            {login===2 && <OTP show={setlogin} keys={key} setKey={setKey} wait={wait}/>}
            {login===3 && <ChangePassword show={setlogin} keys={key} setKey={setKey} wait={wait}/>}
            {login===4 && <SuccessChangePassword show={setlogin}/>}
        </div>
    )
}

export default Login;