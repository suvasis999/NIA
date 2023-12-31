import React from 'react'
import { ProductThumb } from './ProductThumb'

export const Liability = () => {
  return (
    <section>
    <div className="container">
        <div className="section-heading text-center mb-2-9 mb-lg-6 wow fadeIn" data-wow-delay="100ms">
            <span>Our Products</span>
            <h2 className="display-22 display-sm-18 display-md-16 display-lg-11 mb-0">Liability</h2>
        </div>
        <div className="row g-lg-5 mt-n2-9">
        <div className="col-md-6 col-lg-4 mt-2-9 wow fadeIn" data-wow-delay="200ms">
            <ProductThumb
             thumb={"/assets/img/service/CARRIERS-LIABILITY.jpg"}
             icon={"/assets/img/icons/icon-03.png"}
             title={"CARRIERS LIABILITY             "}
             shortDesc={"We help you discover any protection inclusions that are ideal for you."}
             routeName={"product"}
             proposalDownloadlink={"/assets/download/proposal"}
             claimDownloadlink={"/assets/download/claim"}
             />
             </div>

             <div className="col-md-6 col-lg-4 mt-2-9 wow fadeIn" data-wow-delay="200ms">
            <ProductThumb
             thumb={"/assets/img/service/DIRECTORS-AND-OFFICERS-LIABILITY.jpg"}
             icon={"/assets/img/icons/icon-03.png"}
             title={"DIRECTOR'S AND OFFICERS LIABILITY"}
             shortDesc={"We help you discover any protection inclusions that are ideal for you."}
             routeName={"product"}
             proposalDownloadlink={"/assets/download/proposal"}
             claimDownloadlink={"/assets/download/claim"}
             />
             </div>
             
             <div className="col-md-6 col-lg-4 mt-2-9 wow fadeIn" data-wow-delay="200ms">
            <ProductThumb
             thumb={"/assets/img/service/EMPLOYERS-LIABILITY.jpg"}
             icon={"/assets/img/icons/icon-03.png"}
             title={"EMPLOYER'S LIABILITY             "}
             shortDesc={"We help you discover any protection inclusions that are ideal for you."}
             routeName={"product"}
             proposalDownloadlink={"/assets/download/proposal"}
             claimDownloadlink={"/assets/download/claim"}
             />
             </div>
            
             <div className="col-md-6 col-lg-4 mt-2-9 wow fadeIn" data-wow-delay="200ms">
            <ProductThumb
             thumb={"/assets/img/service/LIFT-LIABILITY.jpg"}
             icon={"/assets/img/icons/icon-03.png"}
             title={"LIFT LIABILITY             "}
             shortDesc={"We help you discover any protection inclusions that are ideal for you."}
             routeName={"product"}
             proposalDownloadlink={"/assets/download/proposal"}
             claimDownloadlink={"/assets/download/claim"}
             />
             </div>

             <div className="col-md-6 col-lg-4 mt-2-9 wow fadeIn" data-wow-delay="200ms">
            <ProductThumb
             thumb={"/assets/img/service/PRODUCTS-LIABILITY.jpg"}
             icon={"/assets/img/icons/icon-03.png"}
             title={"PRODUCTS LIABILITY             "}
             shortDesc={"We help you discover any protection inclusions that are ideal for you."}
             routeName={"product"}
             proposalDownloadlink={"/assets/download/proposal"}
             claimDownloadlink={"/assets/download/claim"}
             />
             </div>

             <div className="col-md-6 col-lg-4 mt-2-9 wow fadeIn" data-wow-delay="200ms">
            <ProductThumb
             thumb={"/assets/img/service/PROFESSIONAL-INDEMNITY.jpg"}
             icon={"/assets/img/icons/icon-03.png"}
             title={"PROFESSIONAL INDEMNITY             "}
             shortDesc={"We help you discover any protection inclusions that are ideal for you."}
             routeName={"product"}
             proposalDownloadlink={"/assets/download/proposal"}
             claimDownloadlink={"/assets/download/claim"}
             />
             </div>

             <div className="col-md-6 col-lg-4 mt-2-9 wow fadeIn" data-wow-delay="200ms">
            <ProductThumb
             thumb={"/assets/img/service/PUBLIC-LIABILITY.jpg"}
             icon={"/assets/img/icons/icon-03.png"}
             title={"PUBLIC LIABILITY             "}
             shortDesc={"We help you discover any protection inclusions that are ideal for you."}
             routeName={"product"}
             proposalDownloadlink={"/assets/download/proposal"}
             claimDownloadlink={"/assets/download/claim"}
             />
             </div>
            
        </div>
    </div>
   {/*<img src="/assets/img/content/shape2.png" className="position-absolute top-0 end-0 d-none d-md-block" alt="..."/>
    <img src="/assets/img/content/shape6.png" className="position-absolute bottom-20 left-5 ani-top-bottom d-none d-sm-block" alt="..."/>*/}
</section>
  )
}
