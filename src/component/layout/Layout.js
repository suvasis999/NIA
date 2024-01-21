import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { useSelector,useDispatch } from "react-redux";
import { addItem } from '../../redux/Action/CartAction';

export default function Layout (props) {
 
  const dispatch = useDispatch();
  const incrData=useSelector(state=>state.cart.numOfItems);
console.log(incrData);
  const incre=()=>{
   
    dispatch(addItem());
  }
  return (
    <div className="main-wrapper">
    <Header clicktoIncre={()=>incre()}/>
    {props.children}
    <Footer/>
   
    </div>
  )
}
