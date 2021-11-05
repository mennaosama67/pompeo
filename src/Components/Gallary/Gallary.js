import React from "react";
import { Link } from "react-router-dom";
import './Gallary.css'
function Gallary() {
  return (
    <div className="gallary-wrapper container">
      <div className="row">
      
        <div className="col-lg-5 col-sm-12 gallary-img" data-aos="fade-right">
        
              <img src="../../images/vases/img_6.png" alt="" />
        </div>
        <div className="col-lg-5 col-sm-12 gallary-content" data-aos="fade-left">
          <h3>Gold & Black Pottery</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute.</p>
          <Link to="/shop/18"><span className="view-link">View Details</span></Link>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-5 col-sm-12 gallary-content" data-aos="fade-right">
            <h3>Orange Ceramic</h3>
            <p>Pri cu dico labores officiis, odio principes complectitur ad sea. Sea id doctus forensibus, nec lorem vocent aliquam eu. Aliquid definitiones id cum, ad meliore perpetua referrentur sed. Quas suscipit ad mea verear vivendo tincidunt.</p>
            <Link to="/shop/11"><span className="view-link">View Details</span></Link>

        </div>
        <div className="col-lg-5 col-sm-12 gallary-img-second" data-aos="fade-left">
        <img src="../../images/vases/img_4.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Gallary;
