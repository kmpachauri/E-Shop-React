import React, { useState } from "react";
import './navbar.css'
import { Link } from "react-router-dom";
import { item } from "./data";



const navbar = () => {
  // const [data, setdata] = useState(item);
  // const filterBycategory = (cat)=>{
  //   const element = item.filter((home)=>home.category ===  cat);
  //   setdata(element)
  // }
  return (
    <header>
      <div className="navbar">
        <Link to={'/'} className="brand-name">E-Shop</Link>
        <Link to={'/'} className="hme">Home</Link>
        <div 
        // onClick={()=> filterBycategory('mobile')}
        className="mobile">Smartphones</div>
        <div className="laptop">Laptops</div>
        <div className="tablet">Tablets</div>
        {/* <div className="about">About E-Shop</div> */}
      
        <div className="search-bar">
            <input type="text" placeholder="Search Products" />
        </div>
        <Link to={'/cart'} className="cart">Cart</Link>
        </div>
      
    </header>
  );
};

export default navbar;