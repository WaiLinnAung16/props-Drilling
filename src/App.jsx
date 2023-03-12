import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Detail from './components/Detail'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Search from './components/Search'

const App = () => {
  const [products,setProducts] = useState([]);
    const fetchApi = async()=>{
        const api = await fetch(`https://fakestoreapi.com/products`);
        const data = await api.json();
        setProducts(data);
    };
    useEffect(()=>{
      fetchApi();
    })
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path='/' element={<Products products={products}/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/search' element={<Search products={products}/>}/>
      </Routes>
    </div>
  )
}

export default App