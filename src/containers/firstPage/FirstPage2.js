import React,{Component} from 'react';
import { NavLink} from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Row, Col} from 'react-bootstrap';
import classes from './FirstPage.module.css';
// import first from '../../assets/firstPage.gif';
import ar from '../../assets/icons/arIcon.png';
import en from '../../assets/icons/enIcon.png';
import vid from '../../assets/logoAnimation.mp4';
import BrandsFirstPage from '../../components/brands/BrandsFirstPage';
/* Brands Images */

import sakhaa from '../../assets/brands/Sakhaa.png';
import dafa from '../../assets/brands/AlDaffa.png';
import ghassen from '../../assets/brands/ALGhassan.png';
import samaha from '../../assets/brands/Al-Samaha.png';
import mounafes from '../../assets/brands/AlMounafess.png';
import raka from '../../assets/brands/Raka.png';
import whiteRose from '../../assets/brands/White-Rose.png';
import watani from '../../assets/brands/ALwatany.png';


/*  ahlia Products */

import dafaIcon from '../../assets/icons/products/icon1.png';
import ghassenIcon from '../../assets/icons/products/icon2.png';
import monafessIcon from '../../assets/icons/products/icon3.png';
import samahaIcon from '../../assets/icons/products/icon4.png';
import sakhaaIcon from '../../assets/icons/products/icon5.png';
import whiteIcon from '../../assets/icons/products/icon6.png';
class FirstPage2 extends Component {
    state = {
        brands: [
            {id:0, name: 'سخاء', img: sakhaa, icon: sakhaaIcon, url: "/ar/sakhaa"  },
            {id:1, name: 'الوردة البيضاء', img: whiteRose , icon: whiteIcon, url: "/ar/ahlia/1" },
            {id:2, name: 'الدفة ', img: dafa, icon: dafaIcon, url: "/ar/ahlia/4"   },
            {id:3, name: 'الغسان ', img: ghassen , icon : ghassenIcon, url: "/ar/ahlia/5" },
            {id:4, name: 'السماحة ', img: samaha , icon: samahaIcon, url: "/ar/ahlia/7" },
            // {id:5, name: 'الأنسام ', img: ansam , icon: null, video: sakhaaVideo, url: "/ar" },
            {id:6, name: 'المنافس ', img: mounafes , icon: monafessIcon, url: "/ar/ahlia/3" },
            {id:7, name: 'الرقة ', img: raka , icon: null, url: "/ar/raka" },
            {id:8, name: 'الوطني ', img: watani , icon: null, url: "/ar/ahlia/6" },
        ],
    }
    componentDidMount(){
        Aos.init({
          duration : 1000
        })
    }
    render(){
        return (
            <div className={classes.FirstPage2}>
                
                <div className={classes.VideoContainer}>
                <video
        autoPlay
        // loop
        muted
        // style={{
        //     position:"absolute",
        //     width: '60%',
        //     left: "20%",
        //     top: "0%",
        //     height: "100vh",
        //     objectFit: "fill",
        //     transform: "translate(-50%, -50%)",
        //     zIndex: "-1"
        // }}
        className={classes.VideoMain}
        >
            <source src={vid} type="video/mp4" />
        </video>
        <div className={classes.FirstPage_brands}>
        <BrandsFirstPage brands={this.state.brands} />
        </div>
                </div>
     <div className={classes.Langs}>
     <Row>
                        <Col lg={6} md={6} sm={6} xs={6}>
                        <div className={classes.Lang} data-aos="zoom-in"  >
                    
                        <NavLink to="/en" exact className={classes.linkLang}  >
                        <img src={en} alt="EN"  />
                            <span>EN</span>
                        </NavLink>
                    </div>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6}>
                        <div className={classes.Lang} data-aos="zoom-in" >
                        
                        <NavLink to="/ar" exact className={classes.linkLang} >
                            <img src={ar} alt="AR"   />
                            <span>العربية</span>
                        </NavLink>
                    </div>
                        </Col>
                    </Row>
     </div>
                 
              
                
                
            </div>
        
        );
    }
} 

export default FirstPage2;