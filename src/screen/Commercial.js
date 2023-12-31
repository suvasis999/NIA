import React from 'react'
import { BreadCumb } from '../component/BreadCumb'
import { Content } from './Product/Content'

export const Commercial = () => {
  return (
    <>
    <BreadCumb bgImage={"url('assets/img/banner/private.jpeg')"} routeLink={"product"} mainRoute={"Home"} 
    route={"product"} title={"Our Product"}/>
    <Content/>
    </>
  )
}
