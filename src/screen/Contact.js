import React from 'react'
import { BreadCumb } from '../component/BreadCumb'
import { Content } from './Contact/Content'

export const Contact = () => {
  return (
   <>
    <BreadCumb bgImage={"url('assets/img/banner/contact.jpeg')"} routeLink={"contact"} mainRoute={"Home"} 
    route={"Contact"} title={"Contact"}/>
   <Content/>
   </>
  )
}
