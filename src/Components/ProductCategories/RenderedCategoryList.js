import React from "react";
import SecondaryHeader from "../Header/SecondaryHeader";
import SubHeader from "../Header/SubHeader";

import RelatedProducts from '../ProductData/RelatedProducts';
function RenderedCategoryList(props) {
    const cat = props.match.params.category;
    let title="";
    let bgImg='';
     if(cat==='mugs'){
        title="Mugs";
        bgImg="mugs.jpg"
     }else if(cat==='plates'){
        title="Plates";
        bgImg="plate.jpeg"
     }else{
         title="Vases"
         bgImg="vase2.jpg"
     }
    return (
        <div>
            <SecondaryHeader title={title} bgImg={bgImg}/>
                 <div className="header-category-content" style={{textAlign:"center",marginTop:"10rem"}}>
                     <SubHeader>OUR ONLINE STORE</SubHeader>
                     <h1>Product Collection</h1>
                 </div>
            <RelatedProducts category={cat} />
        </div>
    )
}

export default RenderedCategoryList
