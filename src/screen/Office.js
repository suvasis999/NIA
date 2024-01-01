import React,{useEffect, useState} from 'react'
import { BreadCumb } from '../component/BreadCumb'
import { Content } from './Office/Content'
import { useParams } from "react-router-dom";
import { GccLocation } from './Office/GccLocation';
import { WorldWideWeb } from './Office/WorldWideWeb';
import { OurBranch } from './Office/OurBranch';



export const Office = () => {
  let { titleOffice } = useParams(); 
  const[titlename,setName]=useState(titleOffice);
  useEffect(() => {
    console.log(`/something/${titleOffice}`);
    setName(titleOffice);
},[titleOffice]);
  return (
<>
<BreadCumb bgImage={"url('/assets/img/banner/office.jpeg')"} routeLink={"office"} mainRoute={"Home"} 
    route={"Office"} title={"Our Office"}/>

{titleOffice==='OurOffice'?
    <Content/>:
    titleOffice==='GccLocation'?
    <GccLocation/>:
    titleOffice==='WorldWideLocation'?
    <WorldWideWeb/>:
    titleOffice==='Branches'?
    <OurBranch/>:<></>}
</>
  )
}
