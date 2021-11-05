import React from 'react'
import { Link } from 'react-router-dom'
import SubHeader from '../Header/SubHeader'
import SubHeader2 from '../Header/SubHeader2'
import './Crew.css'
function Crew() {
    return (
        <>
        <div className=" crew-section">
            <div className="container ">

                <div className="section-header">
                    <SubHeader>OUR CREW</SubHeader>
                    <h1>Talented Artist</h1>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12  _card">
                           <div className="card-content">
                               <img src="../../images/crew/_1.jpg"  />
                               <h5>Maria Monroy</h5>
                               <h6>SENIOR DESIGNER</h6>
                               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  enim in eros elementum</p>
                               <div className="icons">
                               <i class="fab fa-facebook-f"></i>
                               <i class="fab fa-twitter"></i>
                               <i class="fab fa-google-plus-g"></i>
                               </div>
                           </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 _card">
                           <div className="card-content">
                               <img src="../../images/crew/2.jpeg" alt="" />
                               <h5>Dominic Basket</h5>
                               <h6>SENIOR DESIGNER</h6>
                               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  enim in eros elementum</p>
                               <div className="icons">
                               <i class="fab fa-facebook-f"></i>
                               <i class="fab fa-twitter"></i>
                               <i class="fab fa-google-plus-g"></i>
                               </div>
                           </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 _card">
                           <div className="card-content">
                               <img src="../../images/crew/3.jpeg" alt="" />
                               <h5>Eduard Fisher</h5>
                               <h6>SENIOR DESIGNER</h6>
                               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  enim in eros elementum</p>
                               <div className="icons">
                               <i class="fab fa-facebook-f"></i>
                               <i class="fab fa-twitter"></i>
                               <i class="fab fa-google-plus-g"></i>
                               </div>
                           </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="feature-section conatainer">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="img-wrapper container">
                    <img src="../../images/vases/img_4.png"  className="img-back"/>                   
                    <img src="../../images/vases/img_6.png"  className="img-front" />
                   </div>
                </div>
                <div className="col-lg-6 col-md-12 feature-content container" >
                    <SubHeader2 part1="Created With Love" part2=" Passion"></SubHeader2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                    <Link to="/shop">
                    <span>View More Pieces</span>
                    </Link>
                </div>
            </div>

        </div>
        </>
    )
}

export default Crew
