import React, { useState,useContext } from "react";
import { DataContext } from "./DataProvider";
import SubHeader from "../Header/SubHeader";
import "./ShopList.css";
import { Link } from "react-router-dom";
import RenderedProductList from "./RenderedProductList";
function ShopList() {
  const value=useContext(DataContext);
  const [products]=value.products;

  return (
    <>
      <div className="container shop">
        <div className="top-content mt-5">
          <SubHeader>OUR ONLINE STORE</SubHeader>
          <h1>Ceramic Collection</h1>
        </div>
        <RenderedProductList productList={products}/>
      </div>
    </>
  );
}

export default ShopList;
