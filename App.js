import React, { useState } from 'react'
import Navbar from './navbar'
import Home from './home'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Cart from './Cart'
import Search from './Search'
import ItemDetails from './itemdetails'
import { item } from './data'




const App = () => {
  const [data, setdata] = useState([...item])
  return (
    <main className='app'>

      
      <Router>
      <Navbar  />
      <Routes>
        <Route path="/" element={<Home item={data} />}/>
        
        <Route path="/home/:id" element={<ItemDetails />}/>
        <Route path="/search/:term" element={<Search />}/>
        <Route path="/cart" element={<Cart />}/>

      </Routes>
      </Router>

    </main>
  )
}

export default App