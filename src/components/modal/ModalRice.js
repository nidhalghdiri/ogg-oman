import React, {Component} from 'react';
import CSSTransition from "react-transition-group/CSSTransition";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
import  './Modal.css';

const animationTiming = {
    enter: 1500,
    exit: 1500
};

class ModalRice extends Component {
  


  render(){
    let alt = 'Photo';
    let modal = (
      <div className="Modal"  >
      <div className="ModalMain"  >
      <div className="BackVideoBtnRice">
                <FontAwesomeIcon icon={faArrowAltCircleLeft} size="lg" className="CloseSVG" onClick={this.props.back}  />
                </div>
      <div className="CloseVideoBtnRice">
          <FontAwesomeIcon icon={faTimesCircle} size="lg" className="CloseSVG" style={{color: "#242424"}}  onClick={this.props.hide}  />
          </div>
      <div class="Main2" >
  
      <div className="Content">
  
     
    {/* <h1>{this.props.rice.name}</h1> */}
    <img src={this.props.rice.content} alt={alt} className="ImgProduct" />
   
          </div>
          </div>
  
          </div>
             
      </div>
    );
  
  
    





    
    return  (
      <CSSTransition 
              mountOnEnter 
              unmountOnExit 
              in={this.props.show} 
              timeout={animationTiming}
              classNames={{
                  enter: '',
                  enterActive: 'ModalProdOpen',
                  exit: '',
                  exitActive: 'ModalProdClosed'
              }}>
     
              {modal}
  

      
          
        
      </CSSTransition>
  );
  }
} 
  


export default ModalRice;