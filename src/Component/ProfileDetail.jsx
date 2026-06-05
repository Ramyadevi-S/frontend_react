import React, { useEffect, useState } from "react";
// import img1 from "./src/assets/img1.jpg";

export function ProfileDetail() {
    const [data, setdata] = useState([])
    const handledata=()=>{
    //     let res=await fetch("https://fakestoreapi.com/products")
    //     let op=await res.json()
const op = [
  {
    name: "Matthew",
    image: "./src/assets/img1.jpg"
  },
  {
    name: "Karen",
    image: "./src/assets/img2.webp"
  },
  {
    name: "Vanessa",
    image: "https://preview.redd.it/just-finished-daredevil-season-1-i-cant-understand-vanessa-v0-ce5lec8fjmog1.jpeg?auto=webp&s=19f62f251cd9d2494a9302504a1f6aac94bad2e7"
  },
  {
    name: "Foggy",
    image: "https://picsum.photos/id/1005/200/200"
  },
  {
    name: "Dexter",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMcgJ9x_-Cg_4-ajmZ8Dtzah0sS5ADpUUcXQ&s"
  }
];
    setdata(op)
}
useEffect(() => {
    console.log("useeffect");
    handledata()

}, [])
return (
    <div className="container">
        <p className="title">Who's Watching ?</p>
        <div  className="cards">
            {data.map((items,i) => (
                <div key={i}>
                    <img className="img" src={items.image}/>
                    <p>{items.name}</p>
                </div>))
            }
        </div>
        <button>Manage Profiles</button>
    </div>
)
}