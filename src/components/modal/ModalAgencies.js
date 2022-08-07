import React, {Component} from 'react';
// import {Row, Col} from 'react-bootstrap';
import CSSTransition from "react-transition-group/CSSTransition";
import  './Modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import Earth from '../agencies/Earth';

class ModalAgencies extends Component{
   


    render(){
        const animationTiming = {
            enter: 1000,
            exit: 1000
        };
        let icons = this.props.agencies.map((item, index) => {
            if(item.name === "zeeba"){
                return (
                    <li key={index}>
                         <img src={item.img} alt="Agency" style={{height: "4rem", width: "3rem"}} />
                    </li>
                );
            }else if(item.name === "lal"){
                return (
                    <li key={index}>
                         <img src={item.img} alt="Agency" style={{width: "5rem"}} />
                    </li>
                );
            }else{
                return (
                    <li key={index}>
                         <img src={item.img} alt="Agency" />
                    </li>
                );
            }
        })
        let mod = (
            <div className="Modal">
            <div className="ModalMain" style={{textAlign: "left"}}>
   
              <div className="CloseBtn">
              <FontAwesomeIcon icon={faTimesCircle} size="lg" className="CloseSVG" onClick={this.props.hide} style={{color: "#222222"}}  />
              </div>
                <div class="Main">
                {/* <div className="AboutLogo">
                    <img src={this.props.item.icon} alt="AboutLogo" />
                </div> */}
                <div className="Content" style={{textAlign: "left"}}>
                
                <div className="Agencies">
                <Earth agencies={this.props.agencies}/>
                </div>
                <div className="Title">
                <h1>نختار أفضل المنتجات</h1>
                </div>
                <p style={{textAlign: "center"}}>
                نقوم بزيارة المعارض العالمية لانتقاء افضل و أجود المنتجاتة
  التي تلبي حاجيات و أذواق المستهلك . 
يتم يتم استرادها و تخزينها وفق المعايير العالمية .
                </p>
                <div className="Icons">
                    <ul>
                        {icons}
                    </ul>
                </div>
                </div>
                </div>
                </div>
                </div>
        );
  
    
        return (
            <CSSTransition 
                    mountOnEnter 
                    unmountOnExit 
                    in={this.props.show} 
                    timeout={animationTiming}
                    classNames={{
                        enter: '',
                        enterActive: 'ModalOpen',
                        exit: '',
                        exitActive: 'ModalClosed'
                    }}>
           
                {mod}
                   
           
            </CSSTransition>
        );
    }
} 
export default ModalAgencies;