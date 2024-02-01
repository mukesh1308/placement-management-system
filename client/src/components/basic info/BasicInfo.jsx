import { useEffect, useRef } from "react";
import "./basic_info.css";

const BasicInfo=({info})=>{
    const block=useRef();
    useEffect(()=>{
        setTimeout(()=>{
            block.current.style.transform="translateX(0%)";
            block.current.style.opacity=1;
        },50);
    },[])
    return(
        <div ref={block} className="detail">
            <table>
                <tbody>
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
                        <td>{info.department?info.department.dept_name:"-"}</td>
                    </tr>
                    <tr>
                        <td>HOD</td>
                        <td>:</td>
                        <td>{info.department?info.department.hod.name:"-"}</td>
                    </tr>
                    <tr>
                        <td>academic year</td>
                        <td>:</td>
                        <td>{info.year}</td>
                    </tr>
                    <tr>
                        <td>attendance</td>
                        <td>:</td>
                        <td>{info.attendance}</td>
                    </tr>
                    <tr>
                        <td>batch</td>
                        <td>:</td>
                        <td>{info.batch?info.batch.batch_no:"-"}</td>
                    </tr>    
                </tbody>
                
            </table>
            <h3>Skills</h3>
            <div className="skill">
                {info.skill_set.map((ele,i)=>{
                    return(
                        <span key={i}>{ele}</span>
                    );
                })}
            </div>
        </div>
    )
}

export default BasicInfo;