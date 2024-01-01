import React,{useEffect, useState} from 'react'
import { BreadCumb } from '../component/BreadCumb'
import { Content } from './Abouts/Content'
import { useParams } from "react-router-dom";
import { CeoMessage } from './Abouts/CeoMessage';
import { TeamStructure } from './Abouts/TeamStructure';
import { Financial } from './Abouts/Financial';

export const About = () => {
  let { titleAbout } = useParams(); 
  const[titlename,setName]=useState(titleAbout);
  useEffect(() => {
    console.log(`/something/${titleAbout}`);
    setName(titleAbout);
},[titleAbout]);
  return (
    <>
    <BreadCumb bgImage={"url('/assets/img/banner/aboutupdated.jpg')"} routeLink={"about"} mainRoute={"Home"} 
    route={"About"} title={"About Us"}/>
    {titleAbout==='about'?
    <Content/>:
    titleAbout==='CEOmessage'?
    <CeoMessage/>:
    titleAbout==='team'?
    <TeamStructure/>:
    titleAbout==='financial'?
    <Financial/>:<></>}
  
    </>
  )
}
