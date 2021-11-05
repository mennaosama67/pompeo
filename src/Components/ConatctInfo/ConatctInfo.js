import React from "react";
import SubHeader from "../Header/SubHeader";
import "./ConatctInfo.css";

import Button from './../Button/Button';
function ConatctInfo() {
  return (
    <>
      <div className="conatainer contact-section ">
        <SubHeader>CONTACT US</SubHeader>
        <h1>Lets get in touch</h1>
        <div className="row contacts">
          <div className="col-lg-4 col-sm-12">
            <div className="contact">
              <h6>PHONE</h6>
              <p>+1 929 234 5678</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="contact">
              <h6>LOCATION</h6>
              <p>
                2567 Fifth Ave, New York City,
                <br />
                NY 20035, USA
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="contact">
              <h6>EMAIL</h6>
              <p>pompoe@pottery1990.com</p>
            </div>
          </div>
        </div>
        <div className="info container ">
          <div
            className=" contact-img"
            style={{
              backgroundImage: `url('${process.env.PUBLIC_URL}/images/backgrounds/contact.jpeg`,
            }}
          ></div>
          <div className="contact-form pb-5">
            <form>
              <h3>Drop Us a Line</h3>
              <div class="row mt-5">
                <div class="col">
                  <div class="input-group ">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <img src="../../images/icons/name.png" alt="" />
                      </span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your name"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <div class="col">
                  <div class="input-group ">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <img src="../../images/icons/mail.png" alt="" />
                      </span>
                    </div>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email Address"
                      aria-label="Email"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div class="col">
                  <div class="input-group">

                    <textarea
                    placeholder="How can we help you ?"
                      class="form-control"
                      aria-label="With textarea"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
              
              </div>
              <Button> send message</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConatctInfo;
