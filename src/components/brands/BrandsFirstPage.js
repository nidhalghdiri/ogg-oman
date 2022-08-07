import React, {Component} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import classes from './Brands.module.css';
// import {NavLink} from 'react-router-dom';

class BrandsFirstPage extends Component{
    
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
          slidesToShow: 4,
          slidesToScroll: 4,
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
              <img src={brand.img} alt={brand.name}  style={{width: "40%", margin: "0 25%"}}
              // onClick={() => this.props.clicked(brand.id)} 
              />
              </div>
          );
        })
      return (
          <section className={classes.Brands} style={{width: "70%"}}>
             {/* <div className={classes.Title}>
                 <h1 data-aos="zoom-in">العلامات التجارية</h1>
             </div> */}
                  <div >
                  <Slider {...settings}>
                  {brands}
         
         
      </Slider>
                  </div>
      
                       
                     
                  
              
          </section>
      );
  }
} 

export default BrandsFirstPage;