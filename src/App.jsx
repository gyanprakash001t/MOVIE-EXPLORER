import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import allTrendingTvshows from './pages/allTrendingTvshows'
import AllTrendingMovies from './pages/allTrendingMovies'
import { Route,Routes } from 'react-router-dom'

function App() {
 

  return (
    <Routes>
    <Route path ="/" element ={<Home/>}/>
    <Route path ="/allTrendingMovies" element ={<AllTrendingMovies/>}/>
    <Route path ="allTrendingTvshows" element ={<allTrendingTvshows/>}/>
    </Routes>
  )
}

export default App
