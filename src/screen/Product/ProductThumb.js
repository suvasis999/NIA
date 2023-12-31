import React from 'react'
import {Link} from 'react-router-dom'

export const ProductThumb = (props) => {
  return (
   <div className="card-style1">
                            <div className="card-image position-relative">
                                <img src={""+props.thumb+""} className="card-img-top" alt="..."/>
                            </div>
                            <div className="card-body p-1-6 p-sm-1-9 pt-2-3 position-relative">
                                <div className="icon-box position-absolute right-10 top-n20">
                                    <img src={""+props.icon+""}  className="z-index-9 position-relative" alt="..."/>
                                    <div className="box-circle primary"></div>
                                </div>
                                <h3 className="h4 mb-3"><Link to="/">{props.title}</Link></h3>
                                <p className="mb-4">{props.shortDesc}</p>
                                
                                <div class="bd-example">
         <a href={props.proposalDownloadlink}  target="_blank" class="butn  sm"><span>Proposal Form</span></a>
         <a href={props.claimDownloadlink}  target="_blank" class="butn  sm"><span>Claim Form</span></a>
      </div>
                                <Link to={"/"+props.routeName+""} className="text-secondary text-primary-hover font-weight-600">Read more <i className="ti-arrow-right ms-2 align-middle display-30"></i></Link>
                            </div>
                        </div>
                
  )
}
