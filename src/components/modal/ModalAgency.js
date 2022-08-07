import React from 'react';
import CSSTransition from "react-transition-group/CSSTransition";
import  './Modal.css';
// import imgFooter from '../../assets/modalFooter.png';
const animationTiming = {
    enter: 1000,
    exit: 1000
};
const modalAgency = (props) => (
    <CSSTransition 
            mountOnEnter 
            unmountOnExit 
            in={props.show} 
            timeout={animationTiming}
            classNames={{
                enter: '',
                enterActive: 'ModalOpen',
                exit: '',
                exitActive: 'ModalClosed'
            }}>
    <div className="Modal">
        <div className="ModalMain" style={{background: 'none'}}>
        <div class="Main" style={{background: 'none'}}>
        {/* <div className="Title">
        <h1>{props.item.name}</h1>
        </div> */}
        <div className="Content">
        <div className="Img">
        <img src={props.item.img} alt={props.item.name} style={{width: '50%'}}/>
        </div>
        <p style={{color: '#FFFFFF'}}>
                      
                      نقوم بزيارة المعارض العالمية لانتقاء افضل و أجود المنتجاتة
التي تلبي حاجيات و أذواق المستهلك . </p>
                        
<p style={{color: '#FFFFFF'}}>
يتم يتم استرادها و تخزينها وفق المعايير العالمية	نقوم بزيارة المعارض العالمية لانتقاء افضل و أجود المنتجاتة
التي تلبي حاجيات و أذواق المستهلك . </p> 
<p style={{color: '#FFFFFF'}}>
يتم يتم استرادها و تخزينها وفق المعايير العالمية  
                          </p>
        </div>
        </div>
        {/* <div className="ModalFooter">
            <img src={imgFooter} alt="imgFooter" />
        </div> */}
        </div>
           
    </div>
    </CSSTransition>
);
export default modalAgency;