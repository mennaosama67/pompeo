import React from "react";
import SubHeader from './SubHeader';

import './Header.css'
import SubHeader2 from "./SubHeader2";
import Button from "../Button/Button";
function Header(props) {
 
  return (
    <div className="_header container-fluid " style={{ backgroundImage:`url('${process.env.PUBLIC_URL}/images/backgrounds/pg_1.jpeg`}}>

      <div className="header-wrapper row">

        <div className="header-content col-lg-6 col-md-12"  data-aos="fade-right">
          <SubHeader>POMPEO POTTERY</SubHeader>
          <SubHeader2 part1=' Unique Porcelain' part2='Stone Collection'/>
         
          <p>{props.parag1}</p>
          <Button>shop collection</Button>
        </div>
        <div className="header-image  col-lg-6 col-md-12" data-aos="fade-left">
            <img src="../../images/backgrounds/pg_3.png" className=""/>
        </div>
      </div>
    </div>
  );
}

export default Header;
