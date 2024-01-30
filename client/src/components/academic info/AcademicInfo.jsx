import { useEffect, useRef } from "react";
import "./academic_info.css"

const AcademicInfo=({info})=>{
    const block=useRef();
    useEffect(()=>{
        setTimeout(()=>{
            block.current.style.transform="translateX(0%)";
            block.current.style.opacity=1;
        },50);
    },[])
    return(
        <div ref={block} className="detail academic">
            <h3>subject</h3>
            <table>
                <tbody>
                    {info.subject_marks.map((ele,i)=>{
                        return (
                        <tr key={i}>
                            <td>{ele.subject.subject_code}</td>
                            <td>:</td>
                            <td>{ele.subject.subject_name}</td>
                            <td>:</td>
                            <td>{ele.grade}</td>
                        </tr>);
                    })}
                </tbody>
            </table>
            <h3>marks</h3>
            <table>
                <tbody>
                    <tr>
                        <td>CGPA</td>
                        <td>:</td>
                        <td>{info.cgpa}</td>
                    </tr>
                    <tr>
                        <td>10<sup>th</sup> mark</td>
                        <td>:</td>
                        <td>{info.ten_mark} %</td>
                    </tr>
                    <tr>
                        <td>12<sup>th</sup> mark</td>
                        <td>:</td>
                        <td>{info.twelve_mark} %</td>
                    </tr>
                    <tr>
                        <td>board of school</td>
                        <td>:</td>
                        <td>{info.board_of_school}</td>
                    </tr>
                    <tr>
                        <td>history of arrears</td>
                        <td>:</td>
                        <td>{info.arrears.length}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default AcademicInfo;