import React from 'react'

export const HomeContact = () => {
  return (
    <section className="position-relative z-index-9">
    <div className="bg-img section-bg" data-overlay-dark="6" style={{ backgroundImage: "url('assets/img/bg/bg-02.jpg')" }}></div>
    <div className="container position-relative z-index-9">
        <div className="row justify-content-center mb-2-3 mb-md-6">
            <div className="col-lg-9 text-center">
                <h2 className="h1 text-white mb-3 w-md-90 w-xl-80 mx-auto">Need Someone to Take Care Your Future</h2>
                <p className="font-weight-500 mb-0 text-white w-95 w-md-85 w-xl-70 mx-auto">When you're equipped to grow, we realize it is now no longer continually clean to discover the proper markets for your enterprise in different elements of the world.</p>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-xl-11">
                <div className="contact-wrapper-box">
                    <div className="row">
                        <div className="col-lg-6 pe-lg-0">
                            <div className="bg-img h-100 w-100 cover-background contact-image text-center" 
                            style={{ backgroundImage: "url('assets/img/bg/bg-08.jpg')" }}>
                                <div className="position-absolute bottom-5 px-1-9">
                                    <i className="ti-receipt display-20 icon bg-primary mb-3"></i>
                                    <h3 className="text-white mb-3">Make Appointment</h3>
                                    <p className="mb-0 text-white">Perspiciatis unde omnis iste natus error sit voluptatem accusantium accusantium laudantium, totam.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 ps-lg-0">
                            <div className="contact-form-area">
                                <form className="quform" action="#" method="post" >
                                    <div className="quform-elements">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="quform-element form-group">
                                                    <label htmlFor="name">Your Name <span className="quform-required">*</span></label>
                                                    <div className="quform-input">
                                                        <input className="form-control" id="name" type="text" name="name" placeholder="Your name here" />
                                                    </div>
                                                </div>
                                            </div>
                                           <div className="col-md-6">
                                                <div className="quform-element form-group">
                                                    <label htmlFor="email">Your Email <span className="quform-required">*</span></label>
                                                    <div className="quform-input">
                                                        <input className="form-control" id="email" type="text" name="email" placeholder="Your email here" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="quform-element form-group">
                                                    <label htmlFor="subject">Your Subject <span className="quform-required">*</span></label>
                                                    <div className="quform-input">
                                                        <input className="form-control" id="subject" type="text" name="subject" placeholder="Your subject here" />
                                                    </div>
                                                </div>
                                            </div>
                                           <div className="col-md-6">
                                                <div className="quform-element form-group">
                                                    <label htmlFor="phone">Contact Number</label>
                                                    <div className="quform-input">
                                                        <input className="form-control" id="phone" type="text" name="phone" placeholder="Your phone here" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="quform-element form-group">
                                                    <label htmlFor="message">Message <span className="quform-required">*</span></label>
                                                    <div className="quform-input">
                                                        <textarea className="form-control h-auto" id="message" name="message" rows="3" placeholder="Tell us a few words"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
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
                                            </div>
                                            <div className="col-md-12">
                                                <div className="quform-submit-inner">
                                                    <button className="butn-style3 secondary" type="button"><span>Send Message</span></button>
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
            </div>
        </div>
    </div>
</section>

  )
}
