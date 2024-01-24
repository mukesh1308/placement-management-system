import axios from 'axios';

const checkValid=(cookie,setCookie)=>{
    if(!cookie.key){
        window.location.href="/";
        return;
    }
    let url="http://"+process.env.REACT_APP_API_URL+":"+process.env.REACT_APP_API_PORT+"/validate";
    axios.get(url,{
        headers:{
            key:cookie.key
        }
    })
    .then((res)=>{
        console.log(res);
        setCookie('role',res.data.data.role)
    })
    .catch((err)=>{
        if(err.response.status===500){
            alert("internal server error");
        }
        window.location.href="/";
    })
}

export { checkValid };