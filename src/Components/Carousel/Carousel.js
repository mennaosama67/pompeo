import React, { useState, useContext } from "react";

import "./Carousel.css";
import { DataContext } from "./../ProductData/DataProvider";
import RenderedProductList from "../ProductData/RenderedProductList";
import SubHeader from "../Header/SubHeader";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function Carousel() {
  const value=useContext(DataContext);
    const[ products]=value.products;
 
  const collection = products.slice(0, 6);
 
  return (
    <>
      <div className="container text-center mt-4">
        <SubHeader>OUR ONLINE STORE</SubHeader>
        <h1>Pottery Collection</h1>
        <RenderedProductList productList={collection} />
        
         <div className="collection-btn">
         <Link to="/shop">
            <Button >view all products</Button>
          </Link>
           </div> 
        
      </div>
    </>
  );
}

export default Carousel;
