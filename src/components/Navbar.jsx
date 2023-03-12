import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [item,setItem] = useState('');
  const navigate = useNavigate();

  const submitHandler =(e) =>{
    e.preventDefault();
    navigate('/search',{state:{pd:item}})
  }
  
  return (
    <div className=' flex justify-between bg-slate-300 p-5 mb-5'>
        <Link to={'/'}>
        <h1>NearShop</h1>
        </Link>
        <form onSubmit={submitHandler}>
          <input type="text" placeholder='Search...' value={item} onChange={(e)=>setItem(e.target.value)}/>
        </form>           
    </div>
  )
}

export default Navbar                    