import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Products = () => {
    const [ProApp, SetProducts] = useState([])

    const fetchData = async () => {
            try {
            const res = await fetch('https://dummyjson.com/products')
            const data = await res.json();
            SetProducts(data.products)
            console.log(data.products);
            
        }

     catch (error) {
        console.log(error)
    }
    }

    useEffect(()=>{
        fetchData()

    },[])

    return(
        // <ProApp />
        <>

        {ProApp.map((ele,i)=>(
            <div key={i}>
               <Link to={`/products/${ele.id}`}>
                    <p>{ele.title}</p>
               </Link>
            </div>
        ))}
        </>
    )
}
export default Products