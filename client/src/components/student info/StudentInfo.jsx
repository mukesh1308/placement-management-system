import { useEffect, useState } from "react";
import "./student_info.css";

const StudentInfo=({info})=>{
    const[tog,setTog]=useState(0);
    useEffect(()=>{
        let mark=document.querySelector(".marker");
        mark.style.width=document.querySelector(".select-bar li:first-child").offsetWidth+"px";
        mark.style.left=document.querySelector(".select-bar li:first-child").offsetLeft+"px";
        document.querySelectorAll(".select-bar li").forEach((ele)=>{
            ele.addEventListener("click",()=>{
                mark.style.left=ele.offsetLeft+"px";
                mark.style.width=ele.offsetWidth+"px";
                setTog(parseInt(ele.id));
            })
        })
    },[]);
    return(
        <div className="info">
            <ul className="select-bar">
                <li id="0">basic</li>
                <li id="1">academic</li>
                <span className="marker"></span>
            </ul>
            {tog===0 && <table>
                <tr>
                    <td>name</td>
                    <td>:</td>
                    <td>{info.name}</td>
                </tr>
                <tr>
                    <td>registration no.</td>
                    <td>:</td>
                    <td>{info.registration_no}</td>
                </tr>
                <tr>
                    <td>department</td>
                    <td>:</td>
                    <td>{info.department}</td>
                </tr>
                <tr>
                    <td>HOD</td>
                    <td>:</td>
                    <td>{info.hod}</td>
                </tr>
            </table>}
        </div>
    );
}

export default StudentInfo;