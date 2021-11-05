import React, { useState, useContext } from "react";
import SubHeader from "../Header/SubHeader";
import { DataContext } from "./DataProvider";
import "./ProductDetail.css";
import RelatedProducts from "./RelatedProducts";
import { Link } from "react-router-dom";

function ProductDetail(props) {
  const id = parseInt(props.match.params.id);

   const value=useContext(DataContext);
  const[ products]=value.products;
  const addCart=value.addCart;


  const details = products.filter((product) => {
    return product.id === id;
  });

  
  return (
    <>
      {details.map((item) => (
        <div className="container details " key={item.id}>
          <div className="row details-section">
            <div className="product-img col-lg-6 col-md-12 col-sm-12">
              <img src={item.image} />
            </div>

            <div className="product-content mt-4 col-lg-5 col-md-12 col-sm-12">
              <SubHeader className="">PRODUCT DETAIL</SubHeader>
              <h2 className="">{item.name}</h2>
              <h4>{`$ ${item.price} USD`}</h4>
              <p>
                The attractions of ceramics lie partly in its contradictions. It
                is both difficult and easy, with an element beyond our control.
                It is both extremely fragile and durable. Like 'Sumi' ink
                painting, it does not lend itself to erasures and indecision.
              </p>
              <h4>
                Category : <span className="category"> {item.category} </span>
              </h4>
              <h4>Quantity</h4>
              <div className="quantity">
                <input
                  type="number"
                  min="1"
                  max="9"
                  step="1"
                  placeholder="1"
                  id="number"
                />
                <br />
              </div>
              <div className="cart-btn">
                <button className="_btn py-3 " onClick={()=>addCart(item.id)}>ADD TO CART</button>
              </div>
            </div>
            <hr className=" horizontal"/>
          </div>
          <RelatedProducts category={item.category} prodName={item.name} relatedHeader="Related Items"/>
        
       <Link to="/shop"> <button className="_btn mb-5 py-3 back-btn ">back to shop</button></Link>
          
        </div>
       
      ))}
    </>
  );
}

export default ProductDetail;
