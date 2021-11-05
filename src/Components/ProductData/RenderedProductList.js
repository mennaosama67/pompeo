import React from "react";
import "./ShopList.css";
import { Link } from "react-router-dom";
function RenderedProductList({ productList }) {
  const renderedList = productList.map((item) => {
    return (
      <div
        className="product-card col-lg-4 col-md-6 col-sm-12 mt-5"
        key={item.id}
      >
        <Link to={`/shop/${item.id}`}>
          <div className="card-img">
            <img src={item.image} />
            
          </div>
        
        </Link>
        <div className="card-info mt-4">
          <Link to={`/shop/${item.id}`}>
            <h5>{item.name}</h5>
          </Link>
          <h6>{`$ ${item.price} USD`}</h6>
        </div>
      </div>
    );
  });
  return <div className="row">{renderedList}</div>;
}

export default RenderedProductList;
