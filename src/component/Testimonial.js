import React from 'react'

export const Testimonial = () => {
  return (
    <section>
    <div className="container">
        <div className="row">
            <div className="col-lg-6 mb-2-9 mb-lg-0">
                <div className="pe-lg-1-9">
                    <div className="mb-1-9 title-style1">
                        <span>testimonials</span>
                        <h2 className="display-22 display-sm-18 display-md-16 mb-0">What Client Say’s About Us</h2>
                    </div>
                    <div className="testimonial-03 mb-2-9 testMonial">
                        <p className="mb-0 lead">"Your company is truly upstanding and is behind its product 100%. We've used insurance for the last five years. It fits our needs perfectly. Nice work on your insurance. It's incredible."</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="flex-grow-1 ms-3">
                            <h4 className="text-secondary h5">Mr Ram</h4>
                          
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="row">
                    <div className="col-sm-6">
                        <img src="assets/img/content/testimonial-01.jpg" className="rounded" alt="..."/>
                    </div>
                    <div className="col-sm-6 d-none d-sm-block">
                        <img src="assets/img/content/testimonial-02.jpg" className="mb-3 rounded" alt="..."/>
                        <div className="bg-primary p-1-6 border-bottom border-width-3 rounded border-secondary-color">
                            <img src="assets/img/icons/icon-14.png" className="mb-3" alt="..."/>
                            <p className="mb-0 text-white">99.9% Customer satisfy based on 750+ reviews.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
