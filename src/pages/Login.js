import { useRef } from "react"

export default function Login(){
    const nameRef= useRef();
    const pwdRef= useRef();

    const apiCall=async()=>{
        let data={
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }
      let res=  await fetch("https://reqres.in/api/login",{
        method:"post",
        body:JSON.stringify(data),
        headers:{"content-type":"application/json"}
    })
        
        let json=await res.json();
        console.log(json);

    }
    return(
        <>
        <div>
            <input  ref={nameRef} type="text" placeholder="Enter email"/>
            
        </div>
        <div>
            <input  ref={pwdRef} type="Password" placeholder="Enter password"/>

        </div>
        <div>
            <input type="button" onClick={()=> apiCall()} value="Login"/>

        </div>
        
        </>
    )

}