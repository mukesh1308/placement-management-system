import { useEffect, useState } from "react";
import BasicInfo from "../basic info/BasicInfo";
import AcademicInfo from "../academic info/AcademicInfo";
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
                <li id="2">Batch</li>
                <span className="marker"></span>
            </ul>
            {tog===0 && <BasicInfo info={info}/>}
            {tog===1 && <AcademicInfo info={info}/>}
        </div>
    );
}

export default StudentInfo;