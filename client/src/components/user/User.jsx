import emailIcon from "../img/email-address-icon.png";
import phoneIcon from "../img/mobile-icon.png";
import githubIcon from "../img/github-icon.png";
import linkedinIcon from "../img/linked-in.png";
import "./user.css";

const User=({user})=>{
    console.log(user);
    return(
        <div className="profile">
            <img src={`https://drive.google.com/thumbnail?id=${user.img}&sz=w1000`} alt="alt" />
            <h3>{user.name}</h3>
            <table>
                <tr>
                    <td><img src={emailIcon} alt=""/></td>
                    <td>{user.email}</td>
                </tr>
                <tr>
                    <td><img src={phoneIcon} alt=""/></td>
                    <td>{user.mobile_no}</td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <img className="link" onClick={()=>window.location.href=user.github} src={githubIcon} alt=""/>
                        <img className="link" onClick={()=>window.location.href=user.linkedin} src={linkedinIcon} alt=""/>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default User;