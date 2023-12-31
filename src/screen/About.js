import React from 'react'
import { BreadCumb } from '../component/BreadCumb'
import { Content } from './Abouts/Content'


export const About = () => {
  return (
    <>
    <BreadCumb bgImage={"url('assets/img/banner/aboutupdated.jpg')"} routeLink={"about"} mainRoute={"Home"} 
    route={"About"} title={"About Us"}/>
    <Content/>
    </>
  )
}
