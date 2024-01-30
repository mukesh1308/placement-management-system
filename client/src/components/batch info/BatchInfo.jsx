import { useEffect, useRef } from "react";
import "./batch_info.css";

const BatchInfo=({info})=>{
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
                        <td>batch No</td>
                        <td>:</td>
                        <td>{info.batch_no}</td>
                    </tr>
                    <tr>
                        <td>batch year</td>
                        <td>:</td>
                        <td>{info.academic_year}</td>
                    </tr>
                    <tr>
                        <td>batch mentor</td>
                        <td>:</td>
                        <td>{info.batch_mentor?info.batch_mentor.name:"-"}</td>
                    </tr>
                </tbody>
            </table>
            <h3>subject teacher</h3>
            <table>
                <tbody>
                    {
                        info.subject.map((ele,i)=>{
                            return(
                                <tr key={i}>
                                    <td>{ele.subject_name}</td>
                                    <td>:</td>
                                    <td>{ele.subject_teacher.name}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default BatchInfo;