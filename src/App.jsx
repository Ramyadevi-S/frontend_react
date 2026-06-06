import React, { useState } from "react";
// import TicketBook from "./Component/TicketBook";
// import NewComp from "./Component/NewComp";
// import "./App.css";
import ApiCallOne from "./Component/ApiCallOne";
import { ApiTwo } from "./Component/ApiTwo";
import { ProfileDetail } from "./Component/ProfileDetail";
import { Form } from "./Component/Form";
import { About } from "./Component/About";
import { Product } from "./Component/Product";
import { BrowserRouter,Link,Route,Routes} from "react-router-dom";
import { Home } from "./Component/Home";
import { MovieBook } from "./Component/MobieBook";
import TodoList from "./Component/TodoList";
import "./Todo.css";

function App(){
  // const[names,setnames]=useState(["luffy","zoro"])

  return(

    <div>
      {/* <MovieBook nam="inception" rating="9.3"/>
      <MovieBook nam="daredevil" rating="9.8"/> */}
      <TodoList/>
    </div>
//     <BrowserRouter>
//     <div >

//     {/* <ProfileDetail/> */}
//     {/* <Form/> */}
//     <Link to="/">Home </Link>
//     <Link to="/about">About </Link>
//     <Link to="/product" >Product </Link>


// <Routes>
//     <Route path="/" element={<Home/>}/>
//     <Route path="/about" element={<About/>}/>
//     <Route path="/product" element={<Product/>}/>
// </Routes>
// </div>
//  </BrowserRouter>
  )
}

export default App