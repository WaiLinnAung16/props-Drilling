import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({title,image,price,id}) => {
  return (
    <div className=' flex flex-col items-center gap-3 border border-purple-900 rounded p-5'>
        <div>
            <img src={image} alt="" className=' h-[150px] object-cover'/>
        </div>
        <div className='text-center'>
            <h1>{title}</h1>
            <p>${price}</p>
        </div>
        <div className=' flex gap-2'>
            <button className=' px-7 py-1 bg-purple-600 text-white'>Add to cart</button>
            <Link to={`/detail/${id}`}>
            <button className=' px-7 py-1 bg-purple-600 text-white'>Detail</button>
            
            </Link>
        </div>
    </div>
  )
}

export default Product