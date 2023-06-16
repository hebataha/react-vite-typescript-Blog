import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'

export default function IndexShared() {
function getPara (paraData){
return paraData
}
console.log(getPara)
  return (
    <div>
      <Header getPara={getPara}/>
      <Footer/>
    </div>
  )
}
