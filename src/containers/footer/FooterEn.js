import React from 'react';
import {Row, Col} from 'react-bootstrap';
import classes from './FooterEn.module.css';
import QRCode from '../../assets/ٍَQRCode.png';
// import phone from '../../assets/icons/phoneFooter.png';
// import fax from '../../assets/icons/faxFooter.png';
import what from '../../assets/icons/whatsapp.png';
import fb from '../../assets/icons/facebookIcon.png';
import insta from '../../assets/icons/instagramIcon.png';
import twit from '../../assets/icons/twitterIcon.png';
import yout from '../../assets/icons/youtubeIcon.png';
import email from '../../assets/icons/emailIcon.png';
const footerSection = () =>{
    // let classImg = [classes.FooterItem, classes.ImgFooter];
    return (
        <footer className={classes.Footer}>
            <div className={classes.SocialMedia}>
                    <div className={classes.Txt}>
                        <p>follow us | <span>@AlahliyaFood</span></p>
                    </div>
                    <div className={classes.Icons}>
                        <a href="https://wa.me/+96898948366" target="_blank" rel="noopener noreferrer">
                            <img src={what} alt="Whatsapp" style={{width: "10%"}} />
                        </a>
                        <a href="https://www.facebook.com/AlahliyaFood" target="_blank" rel="noopener noreferrer">
                            <img src={fb} alt="Facebook" />
                        </a>
                        <a href="https://www.instagram.com/alahliyafood/" target="_blank" rel="noopener noreferrer">
                            <img src={insta} alt="Instagram" />
                        </a>
                        <a href="https://twitter.com/AlahliyaFood" target="_blank" rel="noopener noreferrer">
                            <img src={twit} alt="Twitter" />
                        </a>
                        <a href="https://www.youtube.com/channel/UCe_LiohtCzmHlnUbrJMHB7g/" target="_blank" rel="noopener noreferrer">
                            <img src={yout} alt="Youtube" />
                        </a>
                    </div>
                    <div className={classes.Email}>
                        <p>
                            <img src={email} alt="email"  />
                            <span>info@nationalfoodye.com</span>
                        </p>
                    </div>
            </div>
            <Row>
                <Col  lg={{span: 2, order: 1}} md={{span:12, order: 1}} sm={{span:12, order: 1}} xs={12}>
                    <div className={classes.classImgFooter}>
                        <img src={QRCode} alt="Logo" />
                    </div>
                </Col>
                <Col  lg={{span: 2, order: 2}} md={{span: 4, order: 2}} sm={{span: 6, order: 2}} xs={{span: 12, order: 2}}>
                    <div className={classes.FooterItem}>
                    <div className={classes.FooterItemMain}>
                        <h4>
                            <a href="https://goo.gl/maps/ffrADuVvzCyM5DFf9" target="_blank" rel="noopener noreferrer">
                            Salalah Free Zone, 
Sultanate of Oman

                            </a>
                        </h4>
                        <div className={classes.FooterInfo}><span>Tel : 69 99 22 23 (968+) </span></div>
                        <div className={classes.FooterInfo}><span>Fax : 69 99 22 23 (968+) </span></div>
                        </div>
                    </div>
                </Col>
                <Col  lg={{span: 2, order: 3}} md={{span: 4, order: 3}} sm={{span: 6, order: 3}} xs={{span: 12, order: 3}}>
                    <div className={classes.FooterItem}>
                    <div className={classes.FooterItemMain}>
                        <h4>
                        <a href="https://goo.gl/maps/ffrADuVvzCyM5DFf9" target="_blank" rel="noopener noreferrer">
                        Al Shaqoq Commercial Center,
 Caltex Roundabout,
Aden,  
Yemen

                            </a>
                        </h4>
                        <div className={classes.FooterInfo}><span>Tel : 343422 / 343435 (2) (967+) </span></div>
                        <div className={classes.FooterInfo}><span>Fax : 343433 (2) (967+) </span></div>
                        </div>
                    </div>
                </Col>
                <Col  lg={{span: 2, order: 4}} md={{span: 4, order: 4}} sm={{span: 6, order: 4}} xs={{span: 12, order: 4}}>
                    <div className={classes.FooterItem}>
                    <div className={classes.FooterItemMain}>
                        <h4>
                        <a href="https://goo.gl/maps/ffrADuVvzCyM5DFf9" target="_blank" rel="noopener noreferrer">
                        Al Saylah, 
Sheikh Othman Branch,
Aden 

                            </a>
                        </h4>
                        <div className={classes.FooterInfo}><span>Tel : 398333 (2) (967+)</span></div>
                        <div className={classes.FooterInfo}><span>Fax : 390028 (2) (967+) </span></div>
                        </div>
                    </div>
                </Col>
                <Col  lg={{span: 2, order: 5}} md={{span: 4, order: 6}} sm={{span: 6, order: 5}} xs={{span: 12, order: 5}}>
                    <div className={classes.FooterItem}>
                        <div className={classes.FooterItemMain}>
                        <h4>
                        <a href="https://goo.gl/maps/ffrADuVvzCyM5DFf9" target="_blank" rel="noopener noreferrer">
                        Khalaf , Mukalla Branch
Hadramaout  

                            </a>
                        </h4>
                        <div className={classes.FooterInfo}><span>Tel : 322126 (5) (967+)</span></div>
                        <div className={classes.FooterInfo}><span>Fax : 322126 (5) (967+) </span></div>
                        </div>
                    </div>
                </Col>
                <Col  lg={{span: 2, order: 6}} md={{span: 4, order: 6}} sm={{span: 6, order: 5}} xs={{span: 12, order: 5}}>
                    <div className={classes.FooterItem}>
                        <div className={classes.FooterItemMain}>
                        <h4>
                        <a href="https://goo.gl/maps/ffrADuVvzCyM5DFf9" target="_blank" rel="noopener noreferrer">
                        Al Dhale'e Branch
                            </a>
                        </h4>
                        <div className={classes.FooterInfo}><span>Tel : 433301 (2) (967+)</span></div>
                        <div className={classes.FooterInfo}><span>Fax : 434180 (2) (967+) </span></div>
                        </div>
                    </div>
                </Col>
            </Row>
        </footer>
    );
}

export default footerSection;
