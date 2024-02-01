import SearchBar from "../../components/search bar/SearchBar";
import Navbar from "../../components/navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import { Cookies } from "../../App";
import { checkValid } from "../../checkValid";
import "./company.css";

const Company=()=>{
    const cookie=useContext(Cookies)[0];
    const setCookie=useContext(Cookies)[1];
    const onSearch=(val)=>{
        console.log(val);
    }
    const [links,setLinks]=useState([]);
    useEffect(()=>{
        checkValid(cookie,setCookie);
        if(cookie.role==="student"){
            setLinks([{tag:"company",path:"/company"},{tag:"drives",path:"/drive"},{tag:"update",path:"/update"}]);
        }
    },[cookie,setCookie])
    return(
        <>
            <Navbar links={links}/>
            <div className="company-main">
                <SearchBar url={process.env.REACT_APP_API_URL+`/company`} onSearch={onSearch} placeHolder="search company"/>
            </div>
        </>
    );
}

export default Company;