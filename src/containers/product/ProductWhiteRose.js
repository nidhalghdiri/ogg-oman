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
import {NavLink} from 'react-router-dom';
import ToggleButton from '../../components/UI/toggleButton/ToggleButton';
import Backdrop from '../../components/backdrop/Backdrop';
import WhiteRose from '../../assets/brands/White-Rose.png';
import {Row, Col} from 'react-bootstrap';
import './ProductAhlia.css';
import whiteRiceProduct from '../../assets/products/whiteRiceProduct.png';
import temp from '../../assets/fire.png';
import cook from '../../assets/cook.png';
import Slider from "react-slick";
import riceMonafes from '../../assets/products/riceMonafes.png';
import riceSakhaa from '../../assets/products/riceSakhaa.png';
import riceWhite from '../../assets/products/riceWhite.png';
import riceWatani from '../../assets/products/riceWatani.png';
import riceGhassen from '../../assets/products/riceGhassen.png';
import riceDafa from '../../assets/products/riceDafa.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowAltCircleLeft, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
class ProductWhiteRose extends Component {
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
        modalAgencies: false
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
            // modalCompany: false,
            modalProduct: false,
            companyProduct: false,
            // companyProductSelected: 0,
            modalCompany: true
          
        });
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
            let altImg = "White Rice Product";
            let backLink =null;
            if(this.props.location.previous.name === 'home'){
                backLink = (<NavLink to="/ar" exact>
                    <FontAwesomeIcon icon={faTimesCircle} size="lg" className="CloseSVG" style={{color: "#222222"}}  />
                    </NavLink>);
            }else if(this.props.location.previous.name === 'ahlia'){
                backLink = (<NavLink to="/ar/ahlia" exact>
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} size="lg" className="CloseSVG"  style={{color: "#222222"}} />
                    </NavLink>);
            }else{
                backLink = (<NavLink to={{pathname:this.props.location.previous.name, previous:{name: this.props.location.previous.previous}}} exact>
                      <FontAwesomeIcon icon={faArrowAltCircleLeft} size="lg" className="CloseSVG"  style={{color: "#222222"}} />
                      </NavLink>);
              }
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
             <main className="Product">
             <div className="BackVideoBtnRice">
             {backLink}
                </div>
                <Row>
                    <Col lg={7}>
                        <div className="ProductImage">
                        <img src={whiteRiceProduct} alt={altImg}/>
                        </div>
                    </Col>
                    <Col lg={5}>
                          <div className="ProductBrand">
                          <img src={WhiteRose} alt="White Rose" />
                          </div>
                    <div className="ProductHeader">
                          {/* <div className="ProductTitle" 
                          style={{backgroundImage: "url('"+ bgProductTitle +"')"}}>
                              <h1>فاخر، معتق و لذيذ</h1>
                          </div> */}
                        <p>
                            <b>أرز الوردة البيضاء</b>
                            معتق لفترات طويله بعناية ومنقى تستطيع تمييزة من رائحتة ولذة الطعم المميزة و حباته الملساء واللؤلؤية الطويلة جدا ليناسب ربات المنازل ذوات الخبرة العالية في الطبخ فيفتخرن بتقديم طبق من الأرز البسمتي  ولا ألذ منه.
                         </p>
                        </div>
                        <div className="ProductHeader" style={{marginTop : "4rem"}}>
                            <img src={cook} alt="cook" />
                        <p>
                            <b>طريقة الطبخ</b><br/>
                            ينقع في ماء معتدل الحرارة اقرب الي الدافى 
لمدة 30 دقيقة ثم يوضع قدر الطبخ المملوى  بالماء المعدني على نار مرتفعة الي ان تعلوة الفقاعات التي تدل على الغليان ثم نقوم بتشيف الارز من الماء المنقع بشكل دقيق ثم يوضع في الماء المغلي لمدة من 8 الي 10 دقائق فقط ويكون بعدها جاهز للتقديم. </p>
                        </div>
                        <div className="ProductTemp">
                            <img src={temp} alt="Temp" />
                            <p>مقاوم للحرارة على ان لا تتجواز مدة 10 دقائق على نار مرتفعه.</p>
                        </div>
                        
                    </Col>
                </Row>
                <div className="ProductsList">
                <Slider {...settings}>
                <div>
                   <NavLink to={{pathname:"/ar/ahlia/4", previous:{name: "/ar/ahlia/1", previous: this.props.location.previous.name}}} exact> <img src={riceDafa} alt={altImg} /></NavLink>
                    </div>
                    <div>
                   <NavLink to={{pathname:"/ar/ahlia/5", previous:{name: "/ar/ahlia/1", previous: this.props.location.previous.name}}} exact> <img src={riceGhassen} alt={altImg} /></NavLink>
                    </div>
                    <div>
                   <NavLink to={{pathname:"/ar/ahlia/3", previous:{name: "/ar/ahlia/1", previous: this.props.location.previous.name}}} exact> <img src={riceMonafes} alt={altImg} /></NavLink>
                    </div>
                    <div>
                   <NavLink to={{pathname:"/ar/ahlia/6", previous:{name: "/ar/ahlia/1", previous: this.props.location.previous.name}}} exact> <img src={riceWatani} alt={altImg} /></NavLink>
                    </div>
                    <div>
                   <NavLink to={{pathname:"/ar/ahlia/1", previous:{name: "/ar/ahlia/1", previous: this.props.location.previous.name}}} exact> <img src={riceWhite} alt={altImg} /></NavLink>
                    </div>
                    <div>
                   <NavLink to={{pathname:"/ar/ahlia/2", previous:{name: "/ar/ahlia/1", previous: this.props.location.previous.name}}}exact> <img src={riceSakhaa} alt={altImg} /></NavLink>
                    </div>
         
                </Slider>
                </div>

           <Footer />
         </main>
                </div>
            
      
            </Layout>
         
     </Aux>
      );
    }
}


export default ProductWhiteRose;