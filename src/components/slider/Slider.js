import React, {Component} from 'react';
import classes from './Slider.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
// import slide from '../../assets/slides/slide.png';
import slide1 from '../../assets/slides/slide1.jpg';
import slide2 from '../../assets/slides/slide2.jpg';
import slide3 from '../../assets/slides/slide3.jpg';
import slide4 from '../../assets/slides/slide4.jpg';
import slide5 from '../../assets/slides/slide5.jpg';
import slide6 from '../../assets/slides/slide6.jpg';
import slide7 from '../../assets/slides/slide7.jpg';
import slide8 from '../../assets/slides/slide8.jpg';
import slide9 from '../../assets/slides/slide9.jpg';
import slide10 from '../../assets/slides/slide10.jpg';
import slide11 from '../../assets/slides/slide11.jpg';
import slide12 from '../../assets/slides/slide12.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './slick.css';
// import { faCh } from '@fortawesome/free-regular-svg-icons';

class MySlider extends Component{
  constructor(props) {
    super(props);
    this.state = {
      slides: [

        {slide: slide1, alt: 'slide1'},
        {slide: slide2, alt: 'slide2'},
        {slide: slide3, alt: 'slide3'},
        {slide: slide4, alt: 'slide4'},
        {slide: slide5, alt: 'slide5'},
        {slide: slide6, alt: 'slide6'},
        {slide: slide7, alt: 'slide7'},
        {slide: slide8, alt: 'slide8'},
        {slide: slide9, alt: 'slide9'},
        {slide: slide10, alt: 'slide10'},
        {slide: slide11, alt: 'slide11'},
        {slide: slide12, alt: 'slide12'},
        
      
      ]
    }

    
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
 

  render(){
    var settings = {
      dots: true,
      autoplay: true,
  autoplaySpeed: 4000,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    //   nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
    };
    
      let slidesContent = this.state.slides.map((slide, index) => {
        return (
          <div key={index}>
            <LazyLoadImage
      alt={slide.alt}

      src={slide.slide} // use normal <img> attributes as props
      effect="blur"
      visibleByDefault={true}
       />
                
              </div>
        );
      })
    return (
      <div className={classes.Slider}>
                  
                  <Slider  ref={c => (this.slider = c)} {...settings}>
                {slidesContent}
              </Slider>
              <div style={{ textAlign: "center" }}>
          
          <FontAwesomeIcon icon={faChevronLeft} className={classes.BtnPrev} onClick={this.previous}  />
          <FontAwesomeIcon icon={faChevronRight} className={classes.BtnNext} onClick={this.next}  />
        
        </div>
                  </div>
  );
  }
}


export default MySlider;