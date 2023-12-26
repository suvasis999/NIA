import React from 'react'

export const Aboutus = () => {
  return (
    <section className="py-0">
    <div className="container-fluid px-0">
        <div className="row g-0 overlap-column">
            <div className="col-lg-6 bg-img cover-background overflow-visible rounded" data-overlay-dark="0" 
             style={{ backgroundImage: "url('assets/img/bg/experiance.jpg')" }}>
                <div className="d-flex about-contact">
                    <div className="icon rounded-start">
                        <i className="ti-mobile display-22 text-white d-block mt-2"></i>
                    </div>
                    <div className="contact-text">
                        <h4 className="mb-1 h5 text-white">Do you have any question?</h4>
                        <span className="text-white fw-bold">24838800</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="bg-light py-6 py-xl-8 px-1-9 px-xxl-9 rounded">
                    <div className="w-xxl-80">
                        <div className="mb-1-6 mb-lg-1-9 title-style1">
                            <span>about us</span>
                            <h2 className="display-22 display-sm-18 display-md-16 mb-0">We are a professional and creative company and we offer you a trusty insurance on your veicle.</h2>
                        </div>
                       <p className="mb-xl-1-9">New India Assurance Co Ltd is a multinational general insurance Government of India Public Sector Undertaking company operating in 22 Countries and Head Quartered at Mumbai in India The Global business stands at US$ 4.6 Billion completed in the last financial year 2021-2022.</p>
                       

                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
