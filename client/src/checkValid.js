import axios from 'axios';

const checkValid=(cookie,setCookie)=>{
    if(!cookie.key){
        window.location.href="/";
        return;
    }
    let url=process.env.REACT_APP_API_URL+"/validate";
    axios.get(url,{
        headers:{
            key:cookie.key
        }
    })
    .then((res)=>{
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