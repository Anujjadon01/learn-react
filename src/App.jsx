// // import { useEffect, useState } from "react";

// // function add() {
// //   const[count,setCount]=useState(10);
// //   const HandleDecrement=()=>(
// //      setCount(count+1)
// //   )

// //   return(    
// //   <>
// //       <h1>{count}</h1>
// //     <button onClick={HandleDecrement}>count</button>
// //     </>
// //   )
// // }
// // export default add;



// // function FetchData() {

// //   const [data, setData] = useState([]);

// //   const ApiFetch = async () => {

// //     try {
// //       const res = await fetch("https://dummyjson.com/products");
// //       const Apidata = await res.json();

// //       let pritotal=Apidata.products.filter((items)=>items.price>10)
// //       setData(pritotal)
// //     } catch (error) { 
// //       console.log(error)
// //     }

// //   }
// //   useEffect(()=>{
// //     ApiFetch();
// //   },[])


// //   return (
// //     <>

// //       {data.map((item)=> {
// //         return <div key={item.id}>
// //           <p>{item.title}</p>
// //           <img src={item.thumbnail} alt=""></img>
// //           <p>{item.price}</p>
// //         </div>
// //       })}
// //       <h1>Hello</h1>


// //     </>
// //   )

// // }
// // export default FetchData

// import React from "react";
// import { useState, useEffect } from "react";

// function DataPost() {
//   const [data, setData] = useState({
//     firstName: "",
//     lastName: ""
//   });

//   function FormHandle(e) {
//     const { name, value } = e.target;
//     console.log(name,value);
    
//     setData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   }

//   const HandlSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Sending:", data.firstName, data.lastName);

//     try {
//       const res = await fetch("http://192.168.1.30:3000/test", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(data)
//       });

//       const responseData = await res.json();
//       console.log("Response from API:", responseData);

//       // Clear form after successful post
//       setData({
//         firstName: "",
//         lastName: ""
//       });

//     } catch (error) {
//       console.error("Error while posting data:", error);
//     }
//   };

//   return (
//   <>
//     <form onSubmit={HandlSubmit}>
//       <input
//         type="text"
//         id="firstName"
//         name="firstName"
//         placeholder="Enter first name"
//         value={data.firstName}
//         onChange={FormHandle}
//       />
//       <input
//         type="text"
//         id="lastName"
//         name="lastName"
//         placeholder="Enter last name"
//         value={data.lastName}
//         onChange={FormHandle}
//       />
//       <button type="submit">Submit</button>
//     </form>

//       </>
//   );
// }

// export default DataPost;




// function FormHandle(){
//   const [data, setData]=useState({firstName:"", lastName:""})

//   const HandleChange=(e)=>{
//     const {name,value}=e.target;
//     console.log(name,value);

//     setData((pre)=({
//       ...pre,
//       [name]: value
//     }))
    
//   }

//   const handleAddMore=()=>{
//     console.log(data, "try")
//     setData([...data, {firstName:"", lastName:""}])
//   }

//   const HandlSubmit=async (e)=>{
//     e.preventDefault(),

//     setData(data.firstName, data.lastName)


//   }

//   return(
//     <>

//     <form onSubmit={HandlSubmit}>
//        <input type="text" id="firstName" name="firstName" placeholder="Enter firstName name" value={data.firstName} onChange={FormHandle}></input>
//               <input type="text" id="lastName" name="lastName" placeholder="Enter lastName name" value={data.lastName} onChange={FormHandle}></input>
//     </form>
   
//     </>
//   )
// }


// import Chack from "./Componants/Api";

// function APPapi(){

//   const p="Hello";
//   return(
//     <>
//       <Chack data={p}/>
//     </>
//   )
// }

// export default APPapi

import { Route, Routes } from "react-router-dom";
import Home from "./Componants/Home";
import About from "./Componants/About";
import ProductsEle from "./Componants/ProductEle";

function RouteApp(){
  return(
    <>
    <Routes>

      <Route path="/home" element={<Home/>}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/products/:id" element={<ProductsEle/>}></Route>

    </Routes>
    </>
  )
}

export default RouteApp;