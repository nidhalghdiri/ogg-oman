import React , {Component} from 'react';
import Layout from '../layout/Layout';
import Aux from '../../hoc/Auxliary';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../footer/Footer';
import classes from '../HomeAr.module.css';
import logo from '../../assets/logo.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import SideBar from '../../components/sideBar/SideBar';
// import eyesIcon from '../../assets/icons/eyesIcon.png';
// import msgIcon from '../../assets/icons/msgIcon.png';
// import visionIcon from '../../assets/icons/visionIcon.png';
import feature1 from '../../assets/icons/feature1.png';
import feature2 from '../../assets/icons/featur2.png';
import feature3 from '../../assets/icons/featur3.png';
import feature4 from '../../assets/icons/featur4.png';
import feature5 from '../../assets/icons/featur5.png';
import img1 from '../../assets/icons/ourVisionImg1.png';
import img2 from '../../assets/icons/ourVisionImg2.png';
import img3 from '../../assets/icons/ourVisionImg3.png';
import {NavLink} from 'react-router-dom';
import ToggleButton from '../../components/UI/toggleButton/ToggleButton';
import Backdrop from '../../components/backdrop/Backdrop';
import './OurMessage.css';
import { Row, Col} from 'react-bootstrap';
// import icon from '../../assets/icons/ourMsg.png';

// import slide1 from '../../assets/slides/message/slide1.jpeg';
// import slide2 from '../../assets/slides/message/slide2.jpeg';
// import slide3 from '../../assets/slides/message/slide3.jpeg';
// import slide4 from '../../assets/slides/message/slide4.jpeg';
// import Slider from "react-slick";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
class OurMessage extends Component {
    state = {
        search: false,
        toggle: false,
        navDrop: false,
        widthPort: window.innerWidth,
        modal: false,
        modalCompany: false,
        modalProduct: false,
  
        modalSelected: 0,
        modalCompanySelected: 0,
    
        modalAgencySelected: 0,
        modalAgency: false,

        selectedBrand: 0,
        sakhaaProduct: null,
        rakaSelected: false,
        modalAgencies: false,
        // slides: [

        //     {slide: slide1, alt: 'slide1'},
        //     {slide: slide2, alt: 'slide2'},
        //     {slide: slide3, alt: 'slide3'},
        //     {slide: slide4, alt: 'slide4'}
          
        //   ]
    }

    next() {
        this.slider.slickNext();
      }
      previous() {
        this.slider.slickPrev();
      }

    updateDimensions = () => {
        this.setState({ widthPort: window.innerWidth});
      };
    componentDidMount(){
        window.scrollTo(0, 0);
        Aos.init({
          duration : 1000
        });
        window.addEventListener('resize', this.updateDimensions);
    }
  
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
      }
   
    searchOpen = () => {
        this.setState({
            search: !this.state.search
        })
    }
    toggleClicked = () => {
        this.setState({
            toggle: !this.state.toggle,
            navDrop: !this.state.navDrop
        })
    }
    navItemSelected= () => {
        this.setState({
            toggle: false,
            navDrop: false
        })
    }
    hideBackdropHandler = () =>{
        this.setState({
            toggle: false,
            modal : false,
            modalCompany : false,
            modalAgency: false,
            modalProduct: false,
            companyProduct: false,
            modalAgencies : false,
            sakhaaProduct: null
        });
        
    }
    openModalHandler = (id) => {
        this.setState({
            modal: true,
            modalSelected: id
        });
    }
    openModalAgenciesHandler = () => {
        this.setState({
            modalAgencies: true,
           
        });
    }
    openModalCompanyHandler = (id) => {
        this.setState({
            modalCompany: true,
            modalCompanySelected: id
        });
    }
    openModalAgencyHandler = (id) => {
        this.setState({
            modalAgency: true,
            modalAgencySelected: id
        });
    }
    openModalProductHandler = (id) => {
        this.setState({
            modal: false,
            modalAgency: false,
            modalCompany: false,
            modalProduct: true,
            selectedBrand: id
        })
    }
    openModalRiceHandler = (id) => {
        this.setState({
            modal: false,
            modalAgency: false,
            modalCompany: false,
            modalProduct: false,
            companyProduct: true,
            companyProductSelected: id
        })
    }
    onClickRoseHandler = () => {
        this.setState({
          sakhaaProduct: 0
        });
      }
      onClickPastaHandler = () => {
        this.setState({
            sakhaaProduct: 2,
          
        });
      }
      onClickPasta2Handler = () => {
        this.setState({
            sakhaaProduct: 1,
          
        });
      }
      onClickOilHandler = () => {
        this.setState({
            sakhaaProduct: 3,
          
        });
      }
      onBackToMain = () => {
        this.setState({
            selectedBrand: 0,
            sakhaaProduct: null,
            
          
        });
      }
      onBackToCompanies = () => {
        this.setState({
            modal: false,
            modalAgency: false,
            modalCompany: false,
            modalProduct: false,
            companyProduct: false,
            // companyProductSelected: 0,
            // modalCompany: true
          
        });
      }
    render(){
        // var settings = {
        //     dots: false,
        //     autoplay: true,
        // autoplaySpeed: 3000,
        //     infinite: true,
        //     speed: 1000,
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
          //   nextArrow: <SampleNextArrow />,
          // prevArrow: <SamplePrevArrow />
        //   };
    //    let altImage = "Our Message";
    //    let slides = this.state.slides.map((img, index) => {
    //     return (
    //         <div key={index}>
    //     <img src={img.slide} alt={img.alt}/>
    //         </div>
    //     );
    //    });
      return(
        <Aux>
            <Layout>
                <div className={classes.Home}>
                <Backdrop clicked={this.hideBackdropHandler} show={this.state.modal} show2={this.state.modalCompany} show3={this.state.modalAgency} show4={this.state.modalProduct} show5={this.state.companyProduct} showNav={this.state.toggle} />
        <SideBar open={this.state.search} clicked={this.searchOpen} />
             <section className={classes.Navbar}>
             <ToggleButton Clicked={this.toggleClicked} toggle={this.state.toggle} />
                 <div className={classes.Logo} data-aos="fade-down">
                   <NavLink to="/ar" exact><img src={logo} alt="Logo" /></NavLink>  
                 </div>
                
                 
            
                 
             </section>
             {/* <Navbar show={this.state.toggle} lien={false} /> */}
     {/* <h1>width: {this.state.widthPort}</h1> */}
             <Navbar show={this.state.widthPort > 768 ? true : this.state.toggle} lien={true} selected={this.navItemSelected} /> 
             <main className="OurMessage">
             <NavLink to="/ar" exact className="ml-4" >
                  <FontAwesomeIcon icon={faTimesCircle} size="lg" className="CloseSVG mb-4 ml-4" style={{color: "#222222"}} />
              </NavLink>
           <div className="OurMessageMain">

              <div className="VisionItems">
                  <Row className="mb-4">
                      <Col >
                      <div className="VisionItems_icon" lg={2} data-aos="fade-left" data-aos-delay="500">
                                <img src={img1} alt="image1"  />
                            </div>
                      </Col>
                      <Col lg={4}>
                      <div className="VisionItems_text" lg={2} data-aos="fade-right" data-aos-delay="500">
                                <h1>رؤيتنا</h1>
                                <p>
                                نسعى للريادة والإلهام محلياً وإقليمياً لنساعد في نماء ورفاه مجتمعاتنا.
                                    </p>
                            </div>
                      </Col>
                      <Col lg={6}></Col>
                  </Row>
                  <Row className="mb-4">
                      <Col lg={2}></Col>
                      <Col lg={2}>
                      <div className="VisionItems_icon" lg={2} data-aos="fade-left" data-aos-delay="800">
                                <img src={img2} alt="image1"  />
                            </div>
                      </Col>
                      <Col lg={6}>
                      <div className="VisionItems_text" data-aos="fade-right" data-aos-delay="800">
                      <h1>رسالتنا</h1>
                                <p>
                                يطور فريقنا معرفته وقدراته متبنيا عملاً مؤسسي ومنظم تسوده روح المشاركة والتكامل والالتزام التنظيمي من خلال البحث والتطوير والابتكار المستمر وتقديم منتجات وخدمات مميزة ترضي عملائنا ومجتمعاتنا وتساهم في في التنمية المستدامة.
                                </p>
                            </div>
                      </Col>
                      <Col lg={2}></Col>
                  </Row>
                  <Row className="mb-4">
                      <Col lg={2}></Col>
                      <Col lg={2}></Col>
                      <Col lg={2}>
                      <div className="VisionItems_icon" data-aos="fade-left" data-aos-delay="1000">
                                <img src={img3} alt="image1"  />
                            </div>
                      </Col>
                      <Col lg={4}>
                      <div className="VisionItems_text" data-aos="fade-right" data-aos-delay="1000">
                      <h1>قيمنا </h1>
                                <p>
                                    نعمل بقيمنا بتعاون وشفافية ترتكز على إنتمائنا القوي والمسؤول والمتمسك بمبادئ التسامح والمصداقية والمعاملة الحسنة وحب الخير للجميع.

                                </p>
                            </div>
                      </Col>
                      <Col lg={2}></Col>
                  </Row>
              </div>
              {/* <div className="VisionItems">
              
                  <ul>
                      <li>
                          <div className="VisionItem" >
                              <div className="Carre"></div>
                              <div className="Cercle3">
                                  <img src={eyesIcon} alt="icon" />
                                  <p>
                                  نسعى للريادة في تقديم منتجات وخدمات مميزة تساهم في بناء وسعادة المجتمع محليا وإقليميا
                                      </p>
                                 </div>
                              <span>الرؤية</span>
                          </div>
                      </li>
                      <li>
                          <div className="VisionItem" data-aos="fade-left" data-aos-delay="1000">
                              <div className="Carre"></div>
                              <div className="Cercle3">
                                  <img src={msgIcon} alt="icon" />
                                  <p>نهدف لتطويروتأهيل فريق عمل مميز يعمل وفق احدث الأنظمة التي ترتكز على التطوير والابتكار 
والتخطيط لتوفير منتجات وخدمات متميزة تلبي تطلعات عملائنا وتساهم في البناء والتنمية المستدامة لمجتمعاتنا 
                                    </p>
                                 </div>
                              <span>الرسالة</span>
                          </div>
                      </li>
                      <li>
                          <div className="VisionItem" data-aos="fade-left" data-aos-delay="1500">
                              <div className="Carre"></div>
                              <div className="Cercle3">
                                  <img src={visionIcon} alt="icon" />
                                  <p>نعمل بقيمنا من خلال شراكة ومسؤولية عالية وبشفافية تجعلنا قادرين على المنافسة</p>
                                 </div>
                              <span>قيمنا </span>
                          </div>
                      </li>
                  </ul>
              </div> */}
              <div className="features">
              <Row>
                  <Col lg={2}>
                      <div className="visionFeatur" data-aos="fade-up" data-aos-delay="1200" >
                        <div className="visionImage">
                            <img src={feature1} alt="image1" />
                        </div>
                        <div className="visionTitle">
                            <span>الجودة</span>
                            <span>والتميز</span>
                        </div>
                      </div>
                  </Col>
                  <Col lg={3}>
                      <div className="visionFeatur" data-aos="fade-up" data-aos-delay="1400" >
                        <div className="visionImage">
                            <img src={feature2} alt="image1" />
                        </div>
                        <div className="visionTitle" >
                            <span>النمو والتوسع</span>
                            <span> والاستثمارات الجديدة</span>
                        </div>
                      </div>
                  </Col>
                  <Col lg={2}>
                      <div className="visionFeatur" data-aos="fade-up" data-aos-delay="1600" >
                        <div className="visionImage">
                            <img src={feature3} alt="image1" />
                        </div>
                        <div className="visionTitle">
                            <span>الإدارة والتخطيط </span>
                            <span>الاستراتيجي</span>
                        </div>
                      </div>
                  </Col>
                  <Col lg={2}>
                      <div className="visionFeatur"  data-aos="fade-up" data-aos-delay="1800">
                        <div className="visionImage">
                            <img src={feature4} alt="image1" />
                        </div>
                        <div className="visionTitle">
                            <span>تطوير </span>
                            <span>الأسواق والمنتجات</span>
                        </div>
                      </div>
                  </Col>
                  <Col lg={3}>
                      <div className="visionFeatur" data-aos="fade-up" data-aos-delay="2000">
                        <div className="visionImage">
                            <img src={feature5} alt="image1" />
                        </div>
                        <div className="visionTitle">
                            <span>الشراكة والمساهمة</span>
                            <span> في بناء المجتمع</span>
                        </div>
                      </div>
                  </Col>
              </Row>
              </div>
{/*             
           <div className="Slides">
                        <Slider {...settings}>

                            {slides}
         
         
                          </Slider>
                        </div> */}
           {/* <Row>
           
                <Col lg={12}>
                    <div className="OurMessageContent">
                        
                        <h1>رسالتنا</h1>
                        <p>
                        نعمل لإرساء جودة لمنتجانا من خلال نخبة من الخبراء ذوي الكفاءة العالية، تجمعنا قيم وأهداف سامية، يحفزنا الإيمان والتحدي لتقديم تجربة فريدة لعملائنا تؤسس لشراكة طويلة الأمد لتلبية احتياج المستهلكين ومنافسة الشركات من خلال الإستمرار الدائم بتقديم المنتجات ذات الجودة العالية
                        </p>
                    </div>
                </Col> */}
                {/* <Col lg={4}>
                    <div className="OurMessageImg">
                        <img src={icon} alt={altImage} />
                    </div>
                </Col> */}
            {/* </Row> */}
           </div>
       
           <Footer />
         </main>
                </div>
            
      
            </Layout>
         
     </Aux>
      );
    }
}


export default OurMessage;