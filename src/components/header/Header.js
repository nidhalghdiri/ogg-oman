import React, {Component} from 'react';
// import {Row, Col} from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';
import classes from './Header.module.css';
import Search from '../sideBar/search/Search';
// import lang from '../../assets/icons/globalIcon.png';
// import fb from '../../assets/icons/facebookIcon.png';
// import insta from '../../assets/icons/instagramIcon.png';
// import twit from '../../assets/icons/twitterIcon.png';
// import yout from '../../assets/icons/youtubeIcon.png';
// import email from '../../assets/icons/mail.png';
// import phone from '../../assets/icons/phone.png';
// import tinda from '../../assets/headerBg.png';
class Header extends Component {
    componentDidMount(){
        Aos.init({
          duration : 1000
        })
    }
    render(){
        return(
            <header className={classes.Header}>
            <Search show={this.props.search} /> 
           
                   {/* <div className={classes.TopBar}>
                       <Row>
                           <Col lg={4} md={3} sm={12} xs={12} className={classes.SocialCol}>
                           
                                   <div className={classes.SocialMedia} data-aos="zoom-in">
                
                                   <a href="https://www.facebook.com/AlahliyaFood" target="_blank" rel="noopener noreferrer"><img src={fb} alt="facebook" /></a>
                                   <a href="https://www.instagram.com/alahliyafood/" target="_blank" rel="noopener noreferrer"><img src={insta} alt="Instagram" /></a>
                                   <a href="https://twitter.com/AlahliyaFood" target="_blank" rel="noopener noreferrer"><img src={twit} alt="twitter" /></a>
                                   <a href="https://www.youtube.com/channel/UCe_LiohtCzmHlnUbrJMHB7g/" target="_blank" rel="noopener noreferrer"><img src={yout} alt="Youtube" /></a>

                               </div>
                            
                           </Col>
                           <Col lg={8} md={9} sm={12} xs={12} className={classes.ContactCol} >
                               <Row>
                                   <Col lg={6} md={6} sm={6}>
                                   <div className={classes.Contact} data-aos="zoom-in">
                                   <img src={email} alt="email" />
                                    <span>info@nationalfoodye.com</span>
                               </div>
                                   </Col>
                                   <Col lg={6} md={6} sm={6}>
                                   <div className={classes.Contact} data-aos="zoom-in">
                                   <img src={phone} alt="phone" />
                                   <span>(+968) 23 22 99 69</span>
                                   <span>(+967) 02 34 34 22</span>
                               </div>
                                   </Col>
                               </Row>
                           </Col>
                       </Row>

                   </div> */}
      
               </header>
        );
    }
}

export default Header;