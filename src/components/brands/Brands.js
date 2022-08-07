import React, {Component} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import classes from './Brands.module.css';
import {NavLink} from 'react-router-dom';

class Brands extends Component{
    
    componentDidMount(){
      Aos.init({
        duration : 2000
      })
  }
  render(){
      var settings = {
        className: "center",
        centerPadding: "5px",
          centerMode: true,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 500,
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 5,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        
        };

        let brands = this.props.brands.map((brand, index) => {
          return (
            <div key={index}  >
              <NavLink to={{pathname:brand.url, previous:{name: "home"}}} exact>
              <img src={brand.img} alt={brand.name} 
              // onClick={() => this.props.clicked(brand.id)} 
              />
              </NavLink>
              </div>
          );
        })
      return (
          <section className={classes.Brands}>
             {/* <div className={classes.Title}>
                 <h1 data-aos="zoom-in">العلامات التجارية</h1>
             </div> */}
                  <div className={classes.Slid}>
                  <Slider {...settings}>
                  {brands}
         
         
      </Slider>
                  </div>
      
                       
                     
                  
              
          </section>
      );
  }
} 

export default Brands;