import React from "react";
 
console.log("From Card.jsx")
// function Card(props){
//     console.log("props ", props)
//     return (
//         <>
        
//         </>
//     )

// }
function Card({username="admin",age="18"}){
    console.log(username);
    return (
        <>
        <h1> Username = {username} <br></br>
            age= {age}
        </h1>
        
        </>
    )

}
export default Card;