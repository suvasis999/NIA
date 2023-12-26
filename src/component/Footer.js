import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer-style3 pt-0 overflow-visible">
    <div className="container">
        <div className="row mt-n2-9">
            <div className="col-sm-6 col-lg-4 pe-5 mt-2-9 wow fadeIn" data-wow-delay="200ms">
                <div className="footer-top">
                    <h3 className="mb-1-9 h5 font16">About us</h3>
                    <p className="mb-1-6 text-white font14">New India Assurance Co Ltd is a multinational general insurance Government of 
                    India Public Sector Undertaking company operating in 23 Countries and Head Quartered</p>
                    <ul className="social-icon-style1 mb-0 d-inline-block list-unstyled">
                        <li className="d-inline-block me-2"><a href="#!"><i className="fab fa-facebook-f"></i></a></li>
                        <li className="d-inline-block me-2"><a href="#!"><i className="fab fa-twitter"></i></a></li>
                        <li className="d-inline-block me-2"><a href="#!"><i className="fab fa-youtube"></i></a></li>
                        <li className="d-inline-block"><a href="#!"><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="col-sm-6 col-lg-2 mt-2-9 wow fadeIn" data-wow-delay="350ms">
                <h3 className="h5 mb-1-9 font16">Company</h3>
                <ul className="footer-list ps-0">
                    <li>
                    <Link to="/aboutUs"> About us</Link>
                    </li>
                    <li>
                    <Link to="/vision"> Vision & Missione</Link>
                    </li>
                    <li>
                    <Link to="/management"> Management</Link>
                    </li>
                    <li>
                    <Link to="/agency"> Agency Operations</Link>
                    </li>
                    </ul>
            </div>
            <div className="col-sm-6 col-lg-2 mt-2-9 wow fadeIn" data-wow-delay="350ms">
                <h3 className="h5 mb-1-9 font16">Quick Links</h3>
                <ul className="footer-list ps-0">
                    <li>
                    <Link to="/"> Login</Link>
                    </li>
                    <li>
                    <Link to="/"> Register</Link>
                    </li>
                    <li>
                    <Link to="/news"> Latest News</Link>
                    </li>
                    <li>
                    <Link to="/download"> Downloads</Link>
                    </li>
                  </ul>  
            </div>
            <div className="col-sm-6 col-lg-3 mt-2-9 wow fadeIn" data-wow-delay="650ms">
                <h3 className="h5 mb-1-9 font16">NewsLetter</h3>
                <p className="text-white">Subscribe to our newsletter </p>
                <form className="quform newsletter-form" action="#" method="post"
                 encType="multipart/form-data" >

                    <div className="quform-elements">

                        <div className="row">

                            <div className="col-md-12">
                                <div className="quform-element">
                                    <div className="quform-input">
                                        <input className="form-control" id="email_address" type="text" name="email_address" placeholder="Subscribe with us" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="quform-submit-inner">
                                    <button className="butn-style3 white border-0 w-100" type="button"><span>Subscribe</span></button>
                                </div>
                                <div className="quform-loading-wrap text-center"><span className="quform-loading"></span></div>
                            </div>
                         </div>

                    </div>

                </form>
            </div>
        </div>
    </div>
    <div className="footer-bar">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <p>&copy; <span className="current-year"></span> New India Oman is Powered by  <Link to="/" className=" text-white-hover">InteracOman</Link></p>
                </div>
            </div>
        </div>
    </div>
</footer>

  )
}
