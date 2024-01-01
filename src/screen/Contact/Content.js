import React from 'react'

export const Content = () => {
  return (
    <>
    <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-xl-4 mb-2-9 mb-lg-0">
                        <div className="pe-lg-3 mt-n1-9">
                            <div className="card card-style4 mt-1-9">
                                <div className="card-body p-1-2 p-sm-1-3">
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 icon-box">
                                            <i className="ti-location-pin text-primary z-index-9 display-8 position-relative"></i>
                                            <div className="box-circle primary"></div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h4 className="h5">Location</h4>
                                            <p style={{fontSize:18}}><b>Mr. Gaurav Sharma</b></p>
                                            <span>

Chief Operating Officer<br/>
The New India Assurance Co Ltd<br/>
P O Box 2907<br/>
Postal Code 112, Ruwi<br/>
Sultanate of Oman</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-style4 mt-1-9">
                                <div className="card-body p-1-2 p-sm-1-2">
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 icon-box">
                                            <i className="ti-mobile text-primary z-index-9 display-8 position-relative"></i>
                                            <div className="box-circle primary"></div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <span className="d-block">Phone:24838800</span>
                                            <span>Fax:24838899</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-style4 mt-1-9">
                                <div className="card-body p-1-2 p-sm-1-2">
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 icon-box">
                                            <i className="ti-email text-primary z-index-9 display-8 position-relative"></i>
                                            <div className="box-circle primary"></div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <span className="d-block">niamct@omantel.net.om</span>
                                            <span>www.newindiaoman.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-xl-8">
                        <div className="ps-xl-3">
                            <h2 className="h3 mb-4">Quick Contact</h2>
                            <form className="quform" action="https://lifesthtml.websitelayout.net/quform/contact.php" method="post" enctype="multipart/form-data" onclick="">
                                <div className="quform-elements">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="quform-element form-group">
                                                <label for="name">Your Name <span className="quform-required">*</span></label>
                                                <div className="quform-input">
                                                    <input className="form-control" id="name" type="text" name="name" placeholder="Your name here" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="quform-element form-group">
                                                <label for="email">Your Email <span className="quform-required">*</span></label>
                                                <div className="quform-input">
                                                    <input className="form-control" id="email" type="text" name="email" placeholder="Your email here" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="quform-element form-group">
                                                <label for="subject">Your Subject <span className="quform-required">*</span></label>
                                                <div className="quform-input">
                                                    <input className="form-control" id="subject" type="text" name="subject" placeholder="Your subject here" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="quform-element form-group">
                                                <label for="phone">Contact Number</label>
                                                <div className="quform-input">
                                                    <input className="form-control" id="phone" type="text" name="phone" placeholder="Your phone here" />
                                                </div>
                                            </div>
                                        </div>
                                       <div className="col-md-12">
                                            <div className="quform-element form-group">
                                                <label for="message">Message <span className="quform-required">*</span></label>
                                                <div className="quform-input">
                                                    <textarea className="form-control h-auto" id="message" name="message" rows="3" placeholder="Tell us a few words"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<div className="col-md-12">
                                            <div className="quform-element">
                                                <div className="form-group">
                                                    <div className="quform-input">
                                                        <input className="form-control" id="type_the_word" type="text" name="type_the_word" placeholder="Type the below word" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="quform-captcha">
                                                        <div className="quform-captcha-inner">
                                                            <img src="assets/quform/images/captcha/courier-new-light.png" alt="..."/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>*/}
                                        <div className="col-md-12">
                                            <div className="quform-submit-inner">
                                                <button className="butn border-0" type="submit">Send Message</button>
                                            </div>
                                            <div className="quform-loading-wrap text-start"><span className="quform-loading"></span></div>
                                        </div>
                                       
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <iframe className="map" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7656759.245943123!2d51.02625612341101!3d20.438398162941382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91f9c1130b0891%3A0x3290eabed2ed31d6!2zVGhlIE5ldyBJbmRpYSBBc3N1cmFuY2UgQ29tcGFueSDYtNix2YPYqSDYp9mE2YfZhtiv2YrYqSDYp9mE2KzYr9mK2K_YqSDZhNmE2KrYo9mF2YrZhg!5e0!3m2!1sen!2sin!4v1704023522257!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    </>
  )
}
