import axios from "axios";
import { useContext, useState } from "react";
import {AsyncPaginate} from "react-select-async-paginate";
import { Cookies } from "../../App";
import "./search_bar.css";

const SearchBar=({placeHolder,onSearch,url})=>{
    const [search,setSearch]=useState(null);
    const cookie=useContext(Cookies)[0];
    const loadData=async(input)=>{
        try{
            let data=await axios.get(url+`?name=${input}`,{headers:{key:cookie.key}});
            console.log(data);
            return{
                options:data.data.data.map((ele)=>{
                    return {label:ele.search,value:ele.id}
                })
            }
        }
        catch(err){
            console.log(err);
            return {options:[{label:"Network Error",value:null}]}
        }
    }
    const change=(val)=>{
        setSearch(val);
        onSearch(val);
    }
    return(
        <>
            <AsyncPaginate
                className="search"
                placeholder={placeHolder}
                value={search}
                debounceTimeout={1000}
                onChange={change}
                loadOptions={loadData}
            />
        </>
    );
}

export default SearchBar;