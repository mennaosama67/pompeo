import React from "react";
import SubHeader from "../Header/SubHeader";
import SubHeader2 from "./../Header/SubHeader2";
import "./LatestNews.css";
function LatestNews() {
  return (
    <div className="news container mt-5" data-aos="fade-up">
      <div className="news-content">
        <div className="logo-icon">
          <img src="../../images/icons/subscribe.png" />
        </div>
        <SubHeader>LATEST NEWS</SubHeader>
        <SubHeader2 part1="Latest news" part2="New updates" />

       <div className="input-container">
       <div class="input-group mb-3 mt-5">
          <input
            type="text"
            class="form-control"
            placeholder="Enter your Email"
            aria-label="Enter your Email"
            aria-describedby="basic-addon2"
          />
          <span class="input-group-text px-5" id="basic-addon2">
           <button className="subscribe-btn">SUBSCRIBE</button>
          </span>
        </div>
        </div> 
      </div>
    </div>
  );
}

export default LatestNews;
