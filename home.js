import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { item } from "./data";



const home = () => {
  
  return (
    <>
        <div className="home">
      
          <div className="card-container">
            {
              item.map((home) => {
              return (
                <>
                 
                  <div className="card">
                  <Link to={`/home/${home.id}`}>
                  <img src={home.imgsrc} className="card-img" alt="img" />
                  </Link>
                    
                    <br />
                    <div className="card-body">
                      <h2 className="card-title">{home.title}</h2>
                      <br />
                      <p className="card-text">{home.description}</p>
                      <br />
                      <h2 className="price">₹ {home.price} /-</h2>
                      <br />
                      <button className="btn-buy">
                        <a href={home.amazonlink} target="_blank">
                          Buy Now{" "}
                        </a>
                      </button>
                      <button className="btn-cart">Add to Cart</button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
       
      
      </>
  );
};

export default home;
