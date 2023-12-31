import React from 'react'
import {Link} from 'react-router-dom'

export const BreadCumb = (props) => {
  return (
    <section className="page-title-section top-position1 bg-img cover-background left-overlay-dark" data-overlay-dark="6" 
    style={{ backgroundImage: ""+props.bgImage+"" }}>
            <div className="container">
                <div className="page-title">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>{props.title}</h1>
                        </div>
                        <div className="col-md-12">
                            <ul className="ps-0">
                                <li> <Link to="/" className="text-white">{props.mainRoute}</Link></li>
                                <li> <Link to={"/"+props.routeLink+""} className="text-white">{props.route}</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-inline-block p-2 border border-width-2 border-white top-20 right-10 ani-move position-absolute rounded-circle z-index-1"></div>
            <div className="d-inline-block p-2 border border-width-2 border-white bottom-10 left-10 ani-left-right position-absolute z-index-1"></div>
            <img src="assets/img/content/shape5.png" className="position-absolute top-20 left-5 ani-top-bottom z-index-1" alt="..."/>
        </section>
  )
}
