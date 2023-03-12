import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Detail = () => {
    const {id} =useParams()
    const [products,setProducts] = useState({});
    const fetchApi = async()=>{
        const api = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await api.json();
        setProducts(data);
        console.log(data);
    };
    useEffect(()=>{
        fetchApi()
    },[]);
  return (
    <div className=' flex justify-center gap-5'>
        <div>
            <img src={products?.image} alt="" className=' h-[150px] object-cover'/>
        </div>

        <div className='w-[60%]'>
            <h1>{products?.title}</h1>
            <p>${products?.price}</p> 
        <p>{products?.description}</p>
        </div>
    </div>
  )
}

export default Detail