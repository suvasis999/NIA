import React from 'react'
import { BreadCumb } from '../component/BreadCumb'
import { Content } from './Faq/Content'

export const Faq = () => {
  return (
    <>
     <BreadCumb bgImage={"url('assets/img/banner/faq.jpeg')"} routeLink={"faq"} mainRoute={"Home"} 
    route={"Faq"} title={"FAQ"}/>
    <Content/>
    </>
  )
}
