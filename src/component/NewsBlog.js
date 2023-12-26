import React from 'react'

export const NewsBlog = () => {
  return (
    <section className="pt-0">
            <div className="container position-relative z-index-2">
                <div className="text-center mb-6 wow fadeIn title-style1" data-wow-delay="100ms">
                   
                    <h2 className="display-22 display-sm-18 display-md-16 mb-0">Latest News & Event</h2>
                </div>
                <div className="row gx-xl-5 mt-n6">
                    <div className="col-md-6 col-lg-4 mt-6 wow fadeIn" data-wow-delay="200ms">
                        <article className="card card-style9">
                            <div className="card-body newsEv">
                                <span className="card-date">Oct 04, 2023</span>
                               
                                <h3 className="h4 mb-4"><a href="#">New India Assurance Company Oman has announced ...</a></h3>
                                <div className="image-box"><img src="assets/img/bg/n1.jpg" className="rounded" alt="..."/></div>
                                <a href="#" className="border-bottom display-30 font-weight-600 text-dark">Read More <i className="ti-arrow-right align-middle display-31"></i></a>
                            </div>
                        </article>
                    </div>
                    <div className="col-md-6 col-lg-4 mt-6 wow fadeIn" data-wow-delay="400ms">
                        <article className="card card-style9">
                            <div className="card-body newsEv">
                                <span className="card-date">Aug 31, 2022</span>
                                <ul className="mb-2 p-0">
                                </ul>
                                <h3 className="h4 mb-4"><a href="#">New India Assurance Company Ltd hosted a broker’s...</a></h3>
                                <div className="image-box"><img src="assets/img/bg/n2.jpg" className="rounded" alt="..."/></div>
                                <a href="#" className="border-bottom display-30 font-weight-600 text-dark">Read More <i className="ti-arrow-right align-middle display-31"></i></a>
                            </div>
                        </article>
                    </div>
                    <div className="col-md-6 col-lg-4 mt-6 wow fadeIn" data-wow-delay="600ms">
                        <article className="card card-style9">
                            <div className="card-body newsEv">
                                <span className="card-date">Jul 23, 2022</span>
                                <h3 className="h4 mb-4"><a href="#">THE NEW INDIA ASSURANCE COMPANY LIMITED celebrated the 105..</a></h3>
                                <div className="image-box"><img src="assets/img/bg/n3.jpg" className="rounded" alt="..."/></div>
                                <a href="#" className="border-bottom display-30 font-weight-600 text-dark">Read More <i className="ti-arrow-right align-middle display-31"></i></a>
                            </div>
                        </article>
                    </div>
                </div>
            </div>

        </section>
  )
}
