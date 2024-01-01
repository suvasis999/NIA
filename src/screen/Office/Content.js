import React from 'react'
import { Office } from './Office'
import { Marketing } from './Marketing'
import { SubAgent } from './SubAgent'

export const Content = () => {
  return (
    <section>
    <div className="container">
                <div className="section-heading text-center mb-2-9 mb-lg-6 wow fadeIn" data-wow-delay="100ms">
                    <span>Our Office</span>
                    <h2 className="h1 mb-0">Our Office</h2>
                </div>
                <div>
               <Office/>
               <Marketing/>
               <SubAgent/>
                </div>
 </div>
 </section>
  )
}
