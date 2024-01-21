import React ,{useEffect}from 'react';
import {ResSlider} from '../component/ResSlider';
import {Ourproduct} from '../component/Ourproduct';
import loadjs from 'loadjs';
import { Aboutus } from '../component/Aboutus';
import { WhyChoose } from '../component/WhyChoose';
import { Testimonial } from '../component/Testimonial';
import { HomeContact } from '../component/HomeContact';
import { NewsBlog } from '../component/NewsBlog';
import { HomeAddress } from '../component/HomeAddress';
import { useSelector } from "react-redux";

const Home = () => {
 
 
  useEffect(() => {
    loadjs('assets/js/main.js', () => {});

  },[]);
  return (
    <>
    <ResSlider/>
    <Ourproduct/>
    <Aboutus/>
    <WhyChoose/>
    <Testimonial/>
    <HomeContact/>
    <NewsBlog/>
    <HomeAddress/>
    </>
  )
}

export default Home