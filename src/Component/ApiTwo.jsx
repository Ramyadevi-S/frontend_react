import React, { useState } from "react";

export function ApiTwo(){
    const [data,setdata]=useState([])
    const handledata=async ()=>{
        let res=await fetch("https://fakestoreapi.com/products")
        let d=await res.json()
        setdata(d)
        console.log(data)
    }
    
    return(
        <div>
            <div>
            {data.map((da,i)=>(
                <div>
                    <h3>{da.title}</h3>
                    <img src={da.image} height={200} weight={200} />
                </div>
            )
            )}
            </div>
            <button onClick={handledata}>Click me</button>
        </div>
    )

}