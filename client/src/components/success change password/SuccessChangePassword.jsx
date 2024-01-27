import succes from "../img/success-green-check-mark-icon.png"
import { useRef, useEffect } from "react";
import "./success.css";


const SuccessChangePassword=({show})=>{
    const block=useRef();
    useEffect(()=>{
        setTimeout(()=>{
            block.current.style.transform="translateX(0px)";
            block.current.style.opacity="1";
        },50);
    },[])
    return(
        <div ref={block} className="login forgot">
            <div>
                <h2>password changed successfully</h2>
                <img className="success-icon" src={succes} alt=""/>
                <span onClick={()=>show(0)}>move to login</span>
            </div>
        </div>
    );
}

export default SuccessChangePassword;