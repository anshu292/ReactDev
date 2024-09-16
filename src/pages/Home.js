import { useRef, useState } from "react"

export default function Home(){

    const[name, setName]= useState('some name');
    const [nameList,setNameList]= useState(['fasd','adsd','ewew']);
    const nameRef= useRef();

    const printValue= ()=>{
        console.log(nameRef.current.value);

    }

    return(
        <>
        <h1>this is home component</h1>
        <h2>{name}</h2>
        {
        nameList.map((obj, index)=>{
            return <h1>{obj}</h1>
        })

        }
        <input ref={nameRef} type="text" placeholder="enter name"/>
        <input onClick={()=> printValue()} type="button" value="Click"/>
          </>
    )
}