import React,{Component} from 'react';
import { NavLink} from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Row, Col} from 'react-bootstrap';
import classes from './FirstPage.module.css';
import first from '../../assets/firstPage.gif';
import ar from '../../assets/icons/arIcon.png';
import en from '../../assets/icons/enIcon.png';
class FirstPage extends Component {
    componentDidMount(){
        Aos.init({
          duration : 1000
        })
    }
    render(){
        return (
            <div className={classes.FirstPage}>
                
            <div className={classes.FirstPage_main}>
                
            <Row>
                        <Col lg={6} md={6} sm={12} xs={12}>
                        <div className={classes.LangMain}>
                    <Row>
                        <Col lg={6} md={6} sm={6} xs={6}>
                        <div className={classes.Lang} data-aos="zoom-in"  >
                    <img src={en} alt="EN"  />
                        <NavLink to="/en" exact  >EN</NavLink>
                    </div>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6}>
                        <div className={classes.Lang} data-aos="zoom-in" >
                        
                        <NavLink to="/ar" exact ><img src={ar} alt="AR"   />العربية</NavLink>
                    </div>
                        </Col>
                    </Row>
                    
                    
                </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                        <div className={classes.ImgMain}>
                    <img src={first} alt="firstPage" data-aos="zoom-in" />
                </div>
                        </Col>
                    </Row>
            </div>
               
                
                 
              
                
                
            </div>
        
        );
    }
} 

export default FirstPage;