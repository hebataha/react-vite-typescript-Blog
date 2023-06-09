import { useState } from 'react'
import './App.css'
import Header from './components/shared/Header/Header'
import Footer from './components/shared/Footer/Footer'
import SinglePost from './components/SinglePost/SinglePost'
import InputSearch from './components/InputSearch/InputSearch'
import RecentPosts from './components/RecentPosts/RecentPosts'
import Catagories from './components/Catagories/Catagories'
import Tags from './components/Tags/Tags'

function App() {


  return (
    <>
  <Header/>
  <div className="flex container">
    <div className='flex-1'>
  <SinglePost/>
  </div>
  <div className='flex-2'>
  <InputSearch/>
  <RecentPosts/>
  <Catagories/>
  <Tags/>
  </div>

  </div>
 
  <Footer/>
 
    </>
  )
}

export default App
