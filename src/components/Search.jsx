import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Search = ({products}) => {
    const location = useLocation();
    // console.log(location);
    const item = location.state.pd;
    const [search,setSearch] = useState([])
    useEffect(()=>{
        const filter = products.filter((pd)=>pd.title.toLowerCase().includes(item))
        setSearch(filter)
    },[]);

  return (
    <div>
        {
            search?.map((i)=><h1 key={i.id}>{i.title}</h1>)
        }
    </div>
  )
}

export default Search