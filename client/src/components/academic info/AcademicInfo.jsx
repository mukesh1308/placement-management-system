import "./academic_info.css"

const AcademicInfo=({info})=>{
    return(
        <div className="detail">
            <table>
                {info.academic_mark.map((ele,i)=>{
                    return (<tr key={i}>
                        <td>{ele.subject_code}</td>
                        <td>:</td>
                        <td>{ele.subject_name}</td>
                        <td>:</td>
                        <td>{ele.grade}</td>
                    </tr>);
                })}
            </table>
            <div>CGPA:<span>{info.cgpa}</span></div>
        </div>
    );
}

export default AcademicInfo;