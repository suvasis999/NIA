import React from 'react'
import { BreadCumb } from '../component/BreadCumb'
import { Content } from './Office/Content'

export const Office = () => {
  return (
<>
<BreadCumb bgImage={"url('assets/img/banner/office.jpeg')"} routeLink={"office"} mainRoute={"Home"} 
    route={"Office"} title={"Our Office"}/>
<Content/>
</>
  )
}
