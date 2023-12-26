import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import {Link} from 'react-router-dom'

export const ResSlider = () => {
  return (
    <Carousel showThumbs={false} autoPlay showArrows={false}>
                <div className="item bg-img cover-background sliderTextShadow " 
                style={{ backgroundImage: "url('assets/img/banner/veh.jpg')" }}>
                    <div className="container pt-sm-6 pt-md-0 d-flex flex-column">
                        <div className="row align-items-center justify-content-end text-end  pt-6 pt-md-0">
                            <div className="col-lg-10 mb-1-9 mb-lg-0 py-6">
                               
                                <h1 className="display-18 display-sm-13 display-md-10 display-lg-5 display-xl-4 display-xxl-2 mb-2-3 text-white"> Insurance to protect you better</h1>
                               <Link to="/contact" className="butn-style3 me-2"><span>Learn More</span></Link>
                               <Link to="/contact" className="butn-style3 white"><span>Contact Us</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item bg-img cover-background sliderTextShadow"  
                style={{ backgroundImage: "url('assets/img/banner/1.jpg')" }}>
                   
                    <div className="container pt-sm-6 pt-md-0 d-flex flex-column">
                        <div className="row align-items-center justify-content-end text-end  pt-6 pt-md-0">
                            <div className="col-lg-10 mb-1-9 mb-lg-0 py-6">
                               
                                <h1 className="display-18 display-sm-13 display-md-10 display-lg-5 display-xl-4 display-xxl-2 mb-2-3 text-white"> Insurance to protect you better</h1>
                               <Link to="/contact" className="butn-style3 me-2"><span>Learn More</span></Link>
                               <Link to="/contact" className="butn-style3 white"><span>Contact Us</span></Link>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="item bg-img cover-background sliderTextShadow " 
                 style={{ backgroundImage: "url('assets/img/banner/health.jpg')" }}>
                   
                    <div className="container pt-sm-6 pt-md-0 d-flex flex-column">
                        <div className="row align-items-center justify-content-end text-end  pt-6 pt-md-0">
                            <div className="col-lg-10 mb-1-9 mb-lg-0 py-6">
                               
                                <h1 className="display-18 display-sm-13 display-md-10 display-lg-5 display-xl-4 display-xxl-2 mb-2-3 text-white"> Insurance to protect you better</h1>
                               <Link to="/contact" className="butn-style3 me-2"><span>Learn More</span></Link>
                               <Link to="/contact" className="butn-style3 white"><span>Contact Us</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
  )
}
