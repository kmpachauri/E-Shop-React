import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { item } from "./data";
import "./home.css";
import home from "./home";

const ItemDetails = () => {
  const { id } = useParams();
  const [home, setHome] = useState({});
  
  

  useEffect(() => {
    const filterhome = item.filter((home) => home.id == id);
    //  console.log(filterhome)
    setHome(filterhome[0]);

    
  }, [id]);

  return (
    <>
    <div className="container">
      <div className="img" style={{margin:'50px'}}>
        <img src={home.imgsrc} alt="" />
      </div><br />
      <div style={{textAlign:'center'}}>
        <h2 className="card-title">{home.title}</h2>
        <br />
        <p className="card-text" style={{margin:'0 350px 0 300px'}}>{home.description}</p>
        <br />
        <h2 className="price">₹ {home.price} /-</h2>
        <br />
        <div style={{width:'40%' , margin:'auto',display:'flex'}}>
        <button className="btn-buy">
          <a href={home.amazonlink} target="_blank">
            Buy Now{" "}
          </a>
        </button>
        <button className="btn-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  
</>
  )
    
    
  
};

export default ItemDetails;
