import React, { useEffect, useState } from "react";
function ApiCallOne() {
    const [data, setdata] = useState([])

    const handledata = async () => {
        let res = await fetch("https://fakestoreapi.com/products")
        let jsonf = await res.json()
        setdata(jsonf)
        console.log(jsonf);

    }
    useEffect(()=>{
        console.log("useeffect");
        handledata()
        
    },[])
    return (
        <div>
            {/* {data[0]?.title} */}

            {/* <button onClick={handledata}>Call API</button>           */}
            <div className="container">
                {data.map(items => (
                    <div className="card">
                        <img className="img " src={items.image} height={200} weight={200} />
                        <h2 >{items.title}</h2>
                        <h3>Price: {items.price}</h3>
                    </div>))
                }
            </div>
        </div>
    )

}
export default ApiCallOne