import React from 'react'
import { ProductThumb } from './ProductThumb'

export const Content = () => {
  return (
    <section>
            <div className="container">
                <div className="section-heading text-center mb-2-9 mb-lg-6 wow fadeIn" data-wow-delay="100ms">
                    <span>Our Products</span>
                    <h2 className="display-22 display-sm-18 display-md-16 display-lg-11 mb-0">Our provided services</h2>
                </div>
                <div className="row g-lg-5 mt-n2-9">
                <div className="col-md-6 col-lg-4 mt-2-9 wow fadeIn" data-wow-delay="200ms">
                    <ProductThumb
                     thumb={"/assets/img/service/service-1.jpg"}
                     icon={"/assets/img/icons/icon-03.png"}
                     title={"Better Health"}
                     shortDesc={"We help you discover any protection inclusions that are ideal for you."}
                     routeName={"product"}
                     proposalDownloadlink={"/assets/download/proposal"}
                     claimDownloadlink={"/assets/download/claim"}
                     />
                     </div>

                     <div className="col-md-6 col-lg-4 mt-2-9 wow fadeIn" data-wow-delay="200ms">
                    <ProductThumb
                     thumb={"/assets/img/service/service-3.jpg"}
                     icon={"/assets/img/icons/icon-03.png"}
                     title={"Family Health"}
                     shortDesc={"We help you discover any protection inclusions that are ideal for you."}
                     routeName={"product"}
                     proposalDownloadlink={"/assets/download/proposal"}
                     claimDownloadlink={"/assets/download/claim"}
                     />
                     </div>
                     <div className="col-md-6 col-lg-4 mt-2-9 wow fadeIn" data-wow-delay="200ms">
                    <ProductThumb
                     thumb={"/assets/img/service/service-2.jpg"}
                     icon={"/assets/img/icons/icon-03.png"}
                     title={"Motor Insurance"}
                     shortDesc={"We help you discover any protection inclusions that are ideal for you."}
                     routeName={"product"}
                     proposalDownloadlink={"/assets/download/proposal"}
                     claimDownloadlink={"/assets/download/claim"}
                     />
                     </div>
                     <div className="col-md-6 col-lg-4 mt-2-9 wow fadeIn" data-wow-delay="200ms">
                    <ProductThumb
                     thumb={"https://www.plancover.com/insurance/wp-content/uploads/2019/06/Blog-43-Group-Health-and-Accident-Insurance-All-You-Wanted-To-Know.jpg"}
                     icon={"/assets/img/icons/icon-03.png"}
                     title={"Accident Insurance"}
                     shortDesc={"We help you discover any protection inclusions that are ideal for you."}
                     routeName={"product"}
                     proposalDownloadlink={"/assets/download/proposal"}
                     claimDownloadlink={"/assets/download/claim"}
                     />
                     </div>
                    
                     <div className="col-md-6 col-lg-4 mt-2-9 wow fadeIn" data-wow-delay="200ms">
                    <ProductThumb
                     thumb={"https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/07/23/Photos/Processed/Homeinsurance-kkuH--621x414@LiveMint.jpg"}
                     icon={"/assets/img/icons/icon-03.png"}
                     title={"Home Insurance"}
                     shortDesc={"We help you discover any protection inclusions that are ideal for you."}
                     routeName={"product"}
                     proposalDownloadlink={"/assets/download/proposal"}
                     claimDownloadlink={"/assets/download/claim"}
                     />
                     </div>
                     <div className="col-md-6 col-lg-4 mt-2-9 wow fadeIn" data-wow-delay="200ms">
                    <ProductThumb
                     thumb={"https://indiacsr.in/wp-content/uploads/2023/08/Benefits-of-Life-Insurance-Policy.jpg"}
                     icon={"/assets/img/icons/icon-03.png"}
                     title={"Individual Health Insurance"}
                     shortDesc={"We help you discover any protection inclusions that are ideal for you."}
                     routeName={"product"}
                     proposalDownloadlink={"/assets/download/proposal"}
                     claimDownloadlink={"/assets/download/claim"}
                     />
                     </div>

                     <div className="col-md-6 col-lg-4 mt-2-9 wow fadeIn" data-wow-delay="200ms">
                    <ProductThumb
                     thumb={"https://www.icicilombard.com/WebPages/Resources/images/insurance-information/Tips%20for%20travel%20insurance.jpg"}
                     icon={"/assets/img/icons/icon-05.png"}
                     title={"Travel Insurance"}
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
