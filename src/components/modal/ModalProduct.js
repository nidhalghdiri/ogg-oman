import React, {Component} from 'react';
import CSSTransition from "react-transition-group/CSSTransition";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle,  } from '@fortawesome/free-regular-svg-icons';
import  './Modal.css';
import SakhaaMain from '../sakhaaContent/SakhaaMain';
import SakhaaProduct from '../sakhaaContent/SakhaaProduct';
import RakaProduct from '../modal/ModalRaka';
const animationTiming = {
    enter: 1500,
    exit: 1500
};

class ModalProduct extends Component {
  


  render(){
    let modal = (
      <div className="Modal" style={{width : '80vw', left: '10%'}} >
      <div className="ModalMain" style={{background: 'none'}}>
      <div className="CloseVideoBtn">
          <FontAwesomeIcon icon={faTimesCircle} size="lg" className="CloseVideoSVG"  onClick={this.props.hide}  />
          </div>
      <div class="Main" style={{ background: 'none', width: '100%'}}>
  
      <div className="Content">
  
      <div className="Video">
   <video
      autoPlay
      loop
      muted
      style={{
          
          width: '100%',
          
       
      }}
      >
          <source src={this.props.brand.video} type="video/mp4" />
      </video>
      </div>
          </div>
          </div>
  
          </div>
             
      </div>
    );
  
    if(this.props.brand.id === 0){
      modal = <SakhaaMain logo={this.props.brand.img}
                          oil={this.props.sakhaaOilClicked} 
                          rose={this.props.sakhaaClicked} 
                          pasta={this.props.pastaClicked}
                          hide={this.props.hide} 
                          showBack={this.props.showBack} showBack2={this.props.showBack2} showBack3={this.props.showBack3} showBack4={this.props.showBack4}
                          riceClicked={this.props.sakhaaClicked}
                          pastaClicked={this.props.pastaClicked}
                          pasta2Clicked={this.props.pasta2Clicked}
                          oilClicked={this.props.sakhaaOilClicked} />;
  
    }

    if(this.props.brand.id === 7){
      modal = <RakaProduct logo={this.props.brand.img}
                          
                          hide={this.props.hide} 
                           />;
  
    }
  
     if(this.props.sakhaaProduct !== null){
      modal = <SakhaaProduct logo={this.props.brand.img}

      hide={this.props.hide} 
      sakhaaProduct={this.props.sakhaaProduct}
      back={this.props.backMain}
      />;
     }
  
    





    
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
  


export default ModalProduct;