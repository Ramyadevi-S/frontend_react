import React, { useState } from "react";

function TicketBook(){
    const [data,usedata]=useState(1)
    const handleclick=()=>{
        if (data==10){
            usedata(1)
        } else{
            usedata(data+1)
        }

        }
        
    return(
        <div>
            <h1 >Code from TicketBook</h1>
            <h2 className="ticket">count - {data}</h2>
            <button className="btn" onClick={handleclick}>Click me!</button>
        </div>
    )
}
export default TicketBook