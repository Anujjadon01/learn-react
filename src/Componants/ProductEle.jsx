import { useState, useEffect } from "react";
import Products from "./Products";
import { useParams } from "react-router-dom";

const ProductsEle = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const fetchData = async () => {
        const res = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await res.json();
        console.log(data, "check    ")
        setData(data)
    }

    useEffect(()=>{
         fetchData()
    },[])
   

    return (
        <>

        {<div>
           {/* <Products />  */}
            <h1>ProductsEle{id}</h1>
          <p>{data.title}</p>
          <img src={data.images} alt=""></img>
        </div>}
        </>
    )
}

export default ProductsEle;