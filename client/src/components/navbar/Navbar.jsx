import { useContext } from "react";
import { Cookies } from "../../App";
import "./navbar.css";

const Navbar=({links})=>{
    const removeCookie=useContext(Cookies)[2];
    return(
        <nav>
            <h1 onClick={()=>window.location.href="/home"}>PMS</h1>
            <div>
                <ul>
                    {links.map((ele,i)=>{
                        return(
                            <a href={ele.path} key={i}><li>{ele.tag}</li></a>
                        );
                    })}
                </ul>
                <button type="button" onClick={()=>{removeCookie("key");removeCookie("role")}}>Log out</button>    
            </div>
        </nav>
    );
}

export default Navbar;