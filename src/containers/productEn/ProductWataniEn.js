import React , {Component} from 'react';
import Layout from '../layout/Layout';
import Aux from '../../hoc/Auxliary';
import NavbarEn from '../../components/navbar/NavbarEn';
import FooterEn from '../footer/Footer';
import classes from '../Home.module.css';
import logo from '../../assets/logo.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import SideBar from '../../components/sideBar/SideBar';
import {NavLink} from 'react-router-dom';
import ToggleButton from '../../components/UI/toggleButton/ToggleButton';
import Backdrop from '../../components/backdrop/Backdrop';
import alwatany from '../../assets/brands/ALwatany.png';
import {Row, Col} from 'react-bootstrap';
import './ProductAhliaEn.css';
import wataniProduct from '../../assets/products/wataniProduct.png';
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
class WataniProductEn extends Component {
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
        let altImg = "Al Watani Product";
        const lang = "en";
        if(this.props.location.previous === undefined){
            this.props.location.previous = { name: "home" }; 
        }
        let backLink =null;
        if(this.props.location.previous.name === 'home'){
            backLink = (<NavLink to="/en" exact>
                <FontAwesomeIcon icon={faTimesCircle} size="lg" className="CloseSVG" style={{color: "#222222"}}  />
                </NavLink>);
        }else if(this.props.location.previous.name === 'ahlia'){
            backLink = (<NavLink to="/en/ahlia" exact>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} size="lg" className="CloseSVG"  style={{color: "#222222"}} />
                </NavLink>);
        }else{
            console.log("Old Previous : ", this.props.location.previous);
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
                   <NavLink to="/en" exact><img src={logo} alt="Logo" /></NavLink>  
                 </div>
                
                 
            
                 
             </section>
             <NavbarEn show={this.state.widthPort > 768 ? true : this.state.toggle} lien={false} lang={lang} selected={this.navItemSelected} /> 
             
             <main className="Product">
             <div className="BackVideoBtnRice">
             {backLink}
                </div>
                <Row>
                    <Col lg={5}>
                    <div className="ProductBrand">
                          <img src={alwatany} alt="alwatany" />
                          </div>
                    <div className="ProductHeader">
                        <p>
                            <b>Al Watani Rice </b>
                            It is the rice intended for restaurants, parties and occasions due to its extra length, ease of cooking as well as its very special price; it's appetizing till the last grain.
                            </p>
                        </div>
                        <div className="ProductHeader" style={{marginTop : "4rem"}}>
                            <img src={cook} alt="cook" />
                        <p>
                            <b> Cooking Method</b><br/>
                            Soak the rice in moderately hot water close to warm for 30 minutes, then put the cooking pot filled with mineral water on a high heat until bubbles appear that indicate boiling, then remove the rice from the soaked water carefully and after that put it in boiling water for 8 to 10 minutes only, and then it's ready to be served.
                            </p>
                        </div>
                        <div className="ProductTemp">
                            <img src={temp} alt="Temp" />
                            <p>Heat-tolerant, not to exceed 10 minutes on high heat.</p>
                        </div>
                        
                    </Col>
                    <Col lg={7}>
                        <div className="ProductImage">
                        <img src={wataniProduct} alt={altImg} />
                        </div>
                    </Col>
                </Row>
                <div className="ProductsList">
                <Slider {...settings}>
                <div>
                   <NavLink to={{pathname:"/en/ahlia/4", previous:{name: "/en/ahlia/6", previous: this.props.location.previous.name}}} exact> <img src={riceDafa} alt={altImg} /></NavLink>
                    </div>
                    <div>
                   <NavLink to={{pathname:"/en/ahlia/5", previous:{name: "/en/ahlia/6", previous: this.props.location.previous.name}}} exact> <img src={riceGhassen} alt={altImg} /></NavLink>
                    </div>
                    <div>
                   <NavLink to={{pathname:"/en/ahlia/3", previous:{name: "/en/ahlia/6", previous: this.props.location.previous.name}}} exact> <img src={riceMonafes} alt={altImg} /></NavLink>
                    </div>
                    <div>
                   <NavLink to={{pathname:"/en/ahlia/6", previous:{name: "/en/ahlia/6", previous: this.props.location.previous.name}}} exact> <img src={riceWatani} alt={altImg} /></NavLink>
                    </div>
                    <div>
                   <NavLink to={{pathname:"/en/ahlia/1", previous:{name: "/en/ahlia/6", previous: this.props.location.previous.name}}} exact> <img src={riceWhite} alt={altImg} /></NavLink>
                    </div>
                    <div>
                   <NavLink to={{pathname:"/en/ahlia/2", previous:{name: "/en/ahlia/6", previous: this.props.location.previous.name}}}exact> <img src={riceSakhaa} alt={altImg} /></NavLink>
                    </div>
         
                </Slider>
                </div>
           <FooterEn />
         </main>
                </div>
            
      
            </Layout>
         
     </Aux>
      );
    }
}


export default WataniProductEn;