
import { DataContext } from "./DataProvider";
import React, { useState, useContext } from "react";
import RenderedProductList from "./RenderedProductList";
import { Link } from "react-router-dom";

function RelatedProducts({category,prodName,relatedHeader}) {
    const value=useContext(DataContext);
    const[ products]=value.products;
  
    const Allrelated = products.filter((product) => {
        return product.category === category &&product.name!==prodName;
      });
    
      const related= Allrelated.splice(0,3)
    return (
        <>
        <h4>{relatedHeader}</h4>
       <div className="related-list container">
       <RenderedProductList productList={related}/> 
        </div> 
       
        </>
    )
}

export default RelatedProducts
