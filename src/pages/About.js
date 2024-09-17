import { useState } from "react";
import Login from "./Login";

export default function About(){

    const[userList, setUserList]=useState([]);

    const getData =async(pageNo)=> {
        let res=await fetch('https://reqres.in/api/users?page='+pageNo,{method:"GET"});
        let json= await res.json();

        console.log(json);
    
        setUserList(json['data']);


    }
   const  changepageNo=(val)=>{
        console.log(val);
        getData(val);

    }
    return (
    <>
    <Login/>
    
    <button onClick={()=>getData('1')}>CLick to get user list</button>
        <select onChange={(e)=>changepageNo(e.target.value )}>
            <option value="1">Page 1</option>
            <option value="2">Page 2</option>
            <option value="3">Page 3</option>
            <option value="4">Page 4</option>
        </select>

        {
            userList.length<=0?<h1>No user found</h1>:null

        }
   { userList.map((obj, index) =>{
        return <div>
           
            <img
            src={obj.avatar}
            alt={`${obj.first_name}'s avatar`}
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
          />
           {obj.first_name}-- {obj.email}
         
        </div>

})
    }
  </>
)
}