import './App.css'
import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import Contact from './Components/Contact/Contact'
import Portofolio from './Components/Portofolio/Portofolio'
import About from './Components/About/About'

function App() {



let routes = createBrowserRouter([{
path:'/',element:<Layout></Layout>,children:[
  {index:true,element:<Home></Home>},
  {path:'/about',element:<About></About>},  
  {path:'/contact',element:<Contact></Contact>},  
  {path:'/portofolio',element:<Portofolio></Portofolio>},
  {path:'*',element: "NotFound" }  
]
  }
])

  return (
  <RouterProvider router={routes}></RouterProvider>
  )
}

export default App
