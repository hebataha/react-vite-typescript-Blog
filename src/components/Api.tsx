import React, { useEffect } from 'react'

export default function Api() {
    useEffect(()=> { 
       fetch("https://dummyjson.com/products/").then((response)=>response.json()).then((data)=>console.log(data))
    } , [])
    
  return (
    <div>
      
    </div>
  )
}
