import axios from 'axios'
import React, { useEffect, useState } from 'react'
import HomeComponents from './HomeComponents'

function Home() {
    const [data,setData]=useState([])
 useEffect(()=>{
  axios.get("http://localhost:3000/products").then((res)=>{setData(res.data)}).catch(()=>{})
 })
 
    return (
    <div className="container-fluid mt-0 border rounded-3 bg-secondary text-white shadow-lg ">
    <h1 className='fst-italic text-center text-danger'>Welcome to e-Commerce Website</h1>
        {data.length>0?
        <div className='d-flex flex-wrap justify-content-evenly rounded-2 gap-3'>
      {data.map((data,index)=>{
        return(
          
            <HomeComponents product={data}/>
            
        )
      })}</div>:<h1>Issue to fetch Data</h1>}
        
    </div>
  )
}

export default Home ;