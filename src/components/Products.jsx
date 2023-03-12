import React from 'react'
import Product from './Product';

const Products = ({products}) => {
  return (
    <div className=' grid grid-cols-4 gap-3 container mx-auto'>
        {products?.map((product)=>(
            <Product key={product.id} {...product}/>
        ))}
    </div>
  )
}

export default Products