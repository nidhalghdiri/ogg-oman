import React, {Component} from 'react';
import CSSTransition from "react-transition-group/CSSTransition";
import  './Modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import Slider from "react-slick";

class Modal extends Component{
    state = {
    }
    render(){
        const animationTiming = {
            enter: 1000,
            exit: 1000
        };
        var settings = {
            dots: false,
            autoplay: true,
        autoplaySpeed: 2000,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
        //     nextArrow: <SampleNextArrow />,
        //   prevArrow: <SamplePrevArrow />
          };
         let slides = this.props.slides.map((img, index) => {
        return (
            <div key={index}>
        <img src={img.slide} alt={img.alt} style={{height: "600px", margin: "0 auto"}}/>
            </div>
        )});

      
    
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
           
            <div className="ModalHistory"  >
                <div className="ModalMain" >
                <div className="CloseBtn">
                <FontAwesomeIcon icon={faTimesCircle} size="lg" className="CloseSVG" onClick={this.props.hide} style={{color: "#222222"}}  />
                </div>
                    <div className="Main">
                    <div className="AboutLogo">
                        {/* <h1>{this.props.name}</h1> */}
                    </div>
                    <Slider {...settings}>

                            {slides}
         
         
                          </Slider>
                    </div>
                    
                    </div>
                
                    </div>
                   
           
            </CSSTransition>
        );
    }
} 
export default Modal;