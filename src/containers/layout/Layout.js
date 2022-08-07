import React from 'react';
// import ScrollUpButton from "react-scroll-up-button";
// import  from "react-scroll-up-button";
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";
import './Layout.css';
import whatsapp from  '../../assets/icons/whatsappIcon.png';
const layout = (props) => (
    <div>
 {props.children}
 <ScrollUpButton style={{backgroundColor: '#213e86',
borderRadius: '50%', fill : "rgb(255, 255, 255)"}}  />
<div className="Whatsapp">
    <a href="https://wa.me/+96898948366" target="_blank" rel="noopener noreferrer"><img src={whatsapp} alt="whatsapp Icon" /></a>
</div>
    </div>
   
    
    );


export default layout;