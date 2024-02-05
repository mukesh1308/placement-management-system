import SearchBar from "../../components/search bar/SearchBar";
import Navbar from "../../components/navbar/Navbar";
import DriveInfo from "../../components/drive info/DriveInfo";
import { useContext, useEffect, useState } from "react";
import { Cookies } from "../../App";
import { checkValid } from "../../checkValid";
import "./company.css";
import axios from "axios";

const Company=()=>{
    const cookie=useContext(Cookies)[0];
    const setCookie=useContext(Cookies)[1];
    const [data,setData]=useState(null);
    const onSearch=(val)=>{
        let url=process.env.REACT_APP_API_URL+"/company/info?id="+val.value;
        axios.get(url,{
            headers:{key:cookie.key}
        })
        .then((res)=>{
            setData(res.data.data);
        })
        .catch((err)=>{
            alert("server error");
        })
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
                {data && <div className="company-data">
                    <div className="conpany-info">
                        <table>
                            <tr>
                                <td>company name</td>
                                <td>:</td>
                                <td>{data.company_name}</td>
                            </tr>
                            <tr>
                                <td>company address</td>
                                <td>:</td>
                                <td>{data.company_address}</td>
                            </tr>
                            <tr>
                                <td>HR name</td>
                                <td>:</td>
                                <td>{data.HR_name}</td>
                            </tr>
                        </table>
                    </div>
                    {data && <DriveInfo drive={data.drives}/>}
                </div>}
            </div>
        </>
    );
}

export default Company;