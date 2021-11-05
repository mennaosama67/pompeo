import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="container _footer pb-5">
       
      <div className="footer-head text-center mt-5">
        <Link to="/">
          <a className="nav-brand  ms-5">Pompeo</a>
        </Link>
        <p className="mt-5 ms-5">
          I have always striven to fix beauty in wood, stone,
          <br />
          glass or pottery, that has been my creed.
        </p>
      </div>
      <div className="row contacts" data-aos="fade-left">
        <div className="col-lg-4 col-sm-12">
          <div className="contact">
            <img src="../../images/icons/email.png" />
            <h6>EMAIL</h6>
            <p>pompeopotery@gmail.com</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12">
          <div className="contact">
       
            <img src="../../images/icons/location.png" />
            <h6>FIND</h6>
            <p>
              Central Park, Manhattan
              <br />
              New York, 1101
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12">
          <div className="contact">
            <img src="../../images/icons/call.png" />
            <h6>CALL</h6>
            <p>+1 292 345 678</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
