import { useRef ,useState} from "react"
import './Login.css';

export default function Login(){
    const[res, setRes]= useState("");
    const[name,setName]= useState("");
    const [pwd,setPwd]= useState("");
    const [loginStatus,setLoginStatus]=useState();

    // const nameRef= useRef();
    // const pwdRef= useRef();

    const apiCall=async()=>{
        // let data={
        //     // "email": nameRef.current.value,
        //     // "password": pwdRef.current.value
        // }
        let data={
            "email":name,
            "password":pwd
        }
      let response=  await fetch("https://reqres.in/api/login",{
        method:"post",
        body:JSON.stringify(data),
        headers:{"content-type":"application/json"}
    })
    if(response.ok){
        
        let json=await response.json();
        console.log(json);
        setRes(json['token']);
        setLoginStatus(true);

  }else{
    setLoginStatus(false);
    setRes("login failure!!");
}
}
    return(
        <>
        {/* <div>
            <input  ref={nameRef} type="text" placeholder="Enter email"/>
            
        </div>
        <div>
            <input  ref={pwdRef} type="Password" placeholder="Enter password"/>

        </div>
        <div>
            <input type="button" onClick={()=> apiCall()} value="Login"/>

        </div> */}
          <div>
            <input   className="input" onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter email"/>
            
        </div>
        <div>
            <input className="input" onChange={(e)=>setPwd(e.target.value)} type="Password" placeholder="Enter password"/>

        </div>
        <div>
            <input className="input" type="button" onClick={()=> apiCall()} value="Login"/>

        </div>
        <div>
            <h1>
            Token
            </h1>
        </div>
        <h1 className={loginStatus?'success':'failure'}>{res}</h1>
        </>
    )

}