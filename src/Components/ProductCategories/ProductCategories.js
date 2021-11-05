import React from "react";
import { Link } from "react-router-dom";
import SubHeader from "../Header/SubHeader";
import SubHeader2 from "../Header/SubHeader2";
import "./ProductCategories.css";
import SingleCategory from "./SingleCategory";

function ProductCategories() {
  return (
    <div className="container categories-section " data-aos="fade-up">
      <div className="headers">
        <SubHeader>PRODUCT CATEGORIES</SubHeader>
        <SubHeader2 part1="Porcelain " part2=" Pottery" />
      </div>
      
        <div className="row mt-5 category-wrapper pt-5 ">
          <div className="col-lg-4 col-sm-12 category">
            <Link>
              <SingleCategory category="mugs" />
            </Link>
          </div>
          <div className="col-lg-4 col-sm-12 category">
            <Link>
              <SingleCategory category="vases" />
            </Link>
          </div>
          <div className="col-lg-4 col-sm-12 category">
            <Link>
              <SingleCategory category="plates" />
            </Link>
          </div>
        
      </div>
      <div className="info-wrapper pt-5">
        <div className="row">
       
            <div className="div-column-left col-lg-5 col-md-12">
              <h1 className="history-title">
              Hand Grafted <br/>
              Pottery since 1990
              </h1>
              <p className="history-paragragh">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.
              </p>
            </div>
         
       
          <div className="div-column-right col-lg-5 col-md-12">
          <h1 className="history-title">
          We Provide Premium <br/>
           Pottery Produts
              </h1>
              <p className="history-paragragh">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.
              </p>
          </div>
          </div>
        </div>
        <hr/>
      </div>
   
  );
}

export default ProductCategories;
