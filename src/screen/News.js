import React from 'react'
import { BreadCumb } from '../component/BreadCumb'
import { Content } from './News/Content'

export const News = () => {
  return (
   <>
     <BreadCumb bgImage={"url('assets/img/banner/newsevents.jpg')"} routeLink={"news"} mainRoute={"Home"} 
    route={"News"} title={"News & Blog"}/>
    <Content/>
   </>
  )
}
