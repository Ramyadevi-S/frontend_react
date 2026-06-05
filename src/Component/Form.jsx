import React, { useState } from "react";
export function Form(){
    const[input,setinput]=useState(" ")
    const[data,setdata]=useState("")
    function handlechange(e){
        console.log(e.target.value);
        setinput(e.target.value)
    }
    function handlesubmit(){
        setdata(input)
    }
    return(
        <div>
            <lable>full name</lable>
            <input onChange={handlechange} placeholder="Enter"/>
            <button onClick={handlesubmit}>Submit</button>
            <h2>{data}</h2>
        </div>
    )
}

