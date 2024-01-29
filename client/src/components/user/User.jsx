import emailIcon from "../img/email-address-icon.png";
import phoneIcon from "../img/mobile-icon.png";
import githubIcon from "../img/github-icon.png";
import linkedinIcon from "../img/linked-in.png";
import "./user.css";

const User=({user})=>{
    // console.log(user);
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
                <tr onClick={()=>window.location.href=user.github} className="link">
                    <td ><img src={githubIcon} alt=""/></td>
                    <td>github</td>
                </tr>
                <tr onClick={()=>window.location.href=user.linkedin} className="link">
                    <td ><img  src={linkedinIcon} alt=""/></td>
                    <td>linkedin</td>
                </tr>
                        
            </table>
        </div>
    );
}

export default User;