import React,{useEffect, useState} from 'react'
import { BreadCumb } from '../component/BreadCumb'
import { Content } from './Product/Content'
import { useParams } from "react-router-dom";
import { Commercial } from './Product/Commercial';
import { Industrial } from './Product/Industrial';
import { Liability } from './Product/Liability';
import { Others } from './Product/Others';

export const Product = (props) => {
  let { title } = useParams(); 
  const[titlename,setName]=useState(title);
  useEffect(() => {
    console.log(`/something/${title}`);
    setName(title);
},[]);
    return (
    <>
   
    <BreadCumb bgImage={"url('/assets/img/banner/private.jpeg')"} routeLink={"product/Private"} mainRoute={"Home"} 
    route={"product"} title={"Our Product "}/>
    {title==='Private'?
    <Content/>:
    title==='Commercial'?
    <Commercial/>:
    title==='Industrial'?
    <Industrial/>:
    title==='Liability'?
    <Liability/>:
    title==='Others'?
    <Others/>:<></>}
     {/* <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 order-2 order-lg-1 wow fadeIn" data-wow-delay="200ms">
                        <div className="sidebar pe-xl-4">
                            <div className="widget mb-1-9 rounded">
                                <div className="widget-title">
                                    <h3 className="mb-0 h6">Our Products</h3>
                                </div>
                                <div className="list-style3 p-1-9">
                                    <ul className="list-unstyled mb-0">
                                        <li className="active"><a href="life-insurance.html">Private<span className="ti-arrow-right"></span></a></li>
                                        <li><a href="car-insurance.html">Commercial<span className="ti-arrow-right"></span></a></li>
                                        <li><a href="health-insurance.html">Industrial<span className="ti-arrow-right"></span></a></li>
                                        <li><a href="home-insurance.html">Liability<span className="ti-arrow-right"></span></a></li>
                                        <li><a href="travel-insurance.html">Others<span className="ti-arrow-right"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="widget mb-1-9 rounded">
                                <div className="widget-title">
                                    <h3 className="mb-0 h6">contact info</h3>
                                </div>
                                <div className="p-1-9">
                                    <div className="d-flex mb-1-9">
                                        <div className="flex-shrink-0">
                                            <i className="ti-mobile text-primary display-23"></i>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h4 className="mb-1 h6">Phone</h4>
                                            <span> (+44) 123 456 789</span>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-1-9">
                                        <div className="flex-shrink-0">
                                            <i className="ti-email text-primary display-23"></i>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h4 className="mb-1 h6">Email</h4>
                                            <span>email@youradress.com</span>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0">
                                            <i className="ti-location-pin text-primary display-23"></i>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h4 className="mb-1 h6">Location</h4>
                                            <span>Regina ST, London, SK 8GH.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="widget mb-1-9 rounded">
                                <div className="widget-title">
                                    <h3 className="mb-0 h6">Brochures</h3>
                                </div>
                                <div className="p-1-9">
                                    <ul className="brochures">
                                        <li>
                                            <a href="#!"><i className="far fa-file-pdf"></i>Download.pdf</a>
                                        </li>
                                        <li>
                                            <a href="#!"><i className="far fa-file-alt"></i>Download.txt</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    <div className="col-lg-9 order-1 order-lg-2 mb-2-9 mb-lg-0 wow fadeIn" data-wow-delay="400ms">
                        <div className="row">
                           
                        
                    </div>
                </div>
            </div>
            </div>
        </section>*/}
   
    </>
  )
}
