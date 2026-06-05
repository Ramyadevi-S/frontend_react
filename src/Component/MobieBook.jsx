import React from "react";
// export function MovieBook(props){
//     return(
//         <div>
//             <h1>name: {props.nam}</h1>
//             <h1>rate: {props.rating}</h1>
//             <h2> {props.anime}</h2>
//         </div>
//     )
export function MovieBook({nam,rating}){
    return(
        <div>
            <h1>name: {nam}</h1>
            <h1>rate: {rating}</h1>
        </div>
    )
}