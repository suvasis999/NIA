import React from 'react'
import {Link} from 'react-router-dom'


export default function Header() {
  return (
    <header className="header-style1 menu_area-light">
    <div className="top-bar bg-secondary">
        <div className="container-fluid px-lg-1-6 px-xl-2-5 px-xxl-2-9">
            <div className="row">
                <div className="col-md-9 col-xs-12">
                    <div className="top-bar-info">
                        <ul className="ps-0">
                            <li><i className="ti-mobile"></i>24838800</li>
                            <li className="d-none d-sm-inline-block"><i className="ti-email"></i>info@newindiaoman.com</li>
                        </ul>
                    </div>
                </div>
                <div className="col-xs-12 col-md-3 d-none d-md-block">
                    <ul className="top-social-icon ps-0">
                        <li> <Link to="/">EN |</Link> <Link to="/">AR</Link></li>
                        
                     </ul>
                </div>
               
            </div>
        </div>
    </div>
    <div className="navbar-default border-bottom border-color-light-white">

        
        <div className="" >
            <div className="row align-items-center">
                <div className="col-12 col-lg-12">
                    <div className="menu_area alt-font">
                        <nav className="navbar navbar-expand-lg navbar-light p-0">
                            <div className="navbar-header navbar-header-custom">
                                 <Link to="/" className="navbar-brand">
                                    <img id="logo" src="/assets/img/logos/logo-inner.png" 
                                    alt="logo"  />
                                </Link>
                                
                            </div>

                            <div className="navbar-toggler"></div>

                            <ul className="navbar-nav ms-1" id="nav" style={{display: 'none'}}>
                                <li><Link to="/"> Home</Link></li>
                                <li><a href="#">About Us</a>
                                            <ul>
                                                <li><Link to="/aboutUs/about">About Us</Link></li>
                                                <li><Link to="/aboutUs/CEOmessage">Message From COO</Link></li>
                                                <li><Link to="/aboutUs/team">Team Structure</Link></li>
                                                <li><Link to="/aboutUs/financial">Financial</Link></li>
                                               {/* <li><Link to="/aboutUs/financialRating">FinancialRating</Link></li>
                                                <li><Link to="/aboutUs/performance">Performance</Link></li>
  */}
                                            </ul>
                                        </li>
                                     <li></li>
                                 <li><a href="#">Our Products</a>
                                            <ul>
                                                <li><Link to="/product/Private">Private</Link></li>
                                                <li><Link to="/product/Commercial">Commercial</Link></li>
                                                <li><Link to="/product/Industrial">Industrial</Link></li>
                                                <li><Link to="/product/Liability">Liability</Link></li>
                                                <li><Link to="/product/Others">Others</Link></li>
                                              
                                            </ul>
                                        </li>
                                     <li>
                                    
                                <a href="#">Our Office</a>
                                            <ul>
                                                <li><Link to="/office/OurOffice">Our Office</Link></li>
                                                <li><Link to="/office/GccLocation">Gcc Location</Link></li>
                                                <li><Link to="/office/WorldWideLocation">World Wide Location</Link></li>
                                               {/* <li><Link to="/office/Branches">Our Branches</Link></li>*/}
                                               
                                              
                                            </ul>
                                    </li>
                                <li><Link to="/news">News & Event</Link></li>
                                <li><Link to="/faq">Faq</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                           <div className="attr-nav align-items-lg-center main-font">
                                <ul>
                                     <li className="d-none d-xl-inline-block mr-5" style={{marginRight:'10px'}}>
                                         <a href= "https://www.newindiaoman.com/directcustomer/MTRQUOTE.ASPX" target="_blank"
                                         className="butn-style3 sm text-white"><span>Buy Online</span></a></li>
                                        <li className="d-none d-xl-inline-block"> 
                                        <a href="https://www.newindiaoman.com/Account/login.aspx" target="_blank" 
                                            className="butn-style3 sm text-white" 
                                            style={{ background: '#eb6302'}}><span>Login</span></a></li>
                                </ul>
                            </div>
                           
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
  )
}
