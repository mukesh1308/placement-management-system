import { useRef, useEffect } from "react";


const SuccessChangePassword=({show})=>{
    const block=useRef();
    useEffect(()=>{
        setTimeout(()=>{
            block.current.style.transform="translateX(0px)";
            block.current.style.opacity="1";
        },50);
    },[])
    return(
        <div ref={block} className="login">
            <div>
                <h2>password changed successfully</h2>
                <span onClick={()=>show(0)}>move to login</span>
            </div>
        </div>
    );
}

export default SuccessChangePassword;