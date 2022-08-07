import React , {Component} from 'react';
import Layout from '../layout/Layout';
import Aux from '../../hoc/Auxliary';
import NavbarEn from '../../components/navbar/NavbarEn';
import FooterEn from '../footer/FooterEn';
import classes from '../Home.module.css';
import logo from '../../assets/logo.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import SideBar from '../../components/sideBar/SideBar';
import {NavLink} from 'react-router-dom';
import ToggleButton from '../../components/UI/toggleButton/ToggleButton';
import Backdrop from '../../components/backdrop/Backdrop';
import './AhliaEn.css';
import { Row, Col, Button} from 'react-bootstrap';
import imgGold from '../../assets/ahliaMove2.jpg';
import riceMonafes from '../../assets/products/riceMonafes.png';
import riceSakhaa from '../../assets/products/riceSakhaa.png';
import riceWhite from '../../assets/products/riceWhite.png';
import riceWatani from '../../assets/products/riceWatani.png';
import riceGhassen from '../../assets/products/riceGhassen.png';
import riceDafa from '../../assets/products/riceDafa.png';
import riceSamaha from '../../assets/products/riceSamaha.png';
import pdf from '../../assets/RiceCathalogue.pdf';
import pdfImg from '../../assets/pdf.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
class AhliaEn extends Component {
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
            modalCompany: false,
            modalProduct: false,
            companyProduct: false,
            // companyProductSelected: 0,
            // modalCompany: true
          
        });
      }
    render(){
        let altImage = "ahlia Image";
        const lang = "en";
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
             <main className="AhliaContainerEn">
             <NavLink to="/en" exact className="ml-4" >
                  <FontAwesomeIcon icon={faTimesCircle} size="lg" className="CloseSVG mb-4 ml-4" style={{color: "#222222"}} />
              </NavLink>
           <div className="AhliaSlider">
           
           <Row>
                <Col lg={7}>
                    <div className="AhliaContent">
                        <h2 data-aos="fade-left">About Al-Ahlia Food Company</h2>
                        <p data-aos="fade-left">
                        Al-Ahlia Food Company has a leading trademark and a sustainable market share due to more than twelve years of continuous growth and development, and by God's grace, in various fields such as the field of marketing and selling rice in the Republic of Yemen, especially in the markets in which it is spread.     
                        </p>
                        <p data-aos="fade-left">
                        Al-Ahlia Food Company has trusted brand names and trademarks, the customers like them such as Sakha, White Rose, Al Samaha , Al Dafa, Al Mounafes, Al Ghassan, Al Watani and many other brands as well as many exclusive agencies of major international brands such as Lal Qila, Zepa and others. So that Al Ahlia Food Company imports and markets the best rice in the world from India and Pakistan through its partners who are among the largest exporters and manufacturers in the field of rice and other fields in these countries. Also we are distinguished from other competing companies by our ever-evolving, organized and institutional work running and executing by a highly qualified, efficient and dedicated employees who are able to provide services and products that meet our customers' needs as well as to contribute to build our community, strengthen the national economy and enhancing food security.    
                        </p>
                       <a href={pdf} target="_blank" rel="noopener noreferrer">
                        <Button className="px-4" data-aos="fade-up" >
                            <img src={pdfImg} alt="pdf Icon" />
                        <span className="ml-2 Catalog">Catalogue</span>
                            
                           
                        </Button>
                        </a>
                    </div>
                </Col>
                <Col lg={5}>
                    <div className="AhliaImg" data-aos="fade-right">
                        <img src={imgGold} alt={altImage} style={{width: "100%"}} />
                    </div>
                </Col>
            </Row>
           </div>
           <div className="AhliaProducts">
           <Row>
                <Col lg={4} md={6} sm={6} xs={12}>
                    <div className="AhliaProduct" data-aos="zoom-in" data-aos-delay="100">
                    <NavLink to={{pathname:"/en/ahlia/1", previous:{name: "ahlia"}}} exact>
                        <img src={riceWhite} alt={altImage} />
                        </NavLink>  
                        
                    </div>
                </Col>
                <Col lg={4} md={6} sm={6} xs={12}>
                    <div className="AhliaProduct" data-aos="zoom-in" data-aos-delay="300">
                    <NavLink to={{pathname:"/en/ahlia/2", previous:{name: "ahlia"}}} exact>
                        <img src={riceSakhaa} alt={altImage} />
                        </NavLink>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={6} xs={12}>
                    <div className="AhliaProduct" data-aos="zoom-in" data-aos-delay="500">
                    <NavLink to={{pathname:"/en/ahlia/3", previous:{name: "ahlia"}}} exact>
                        <img src={riceMonafes} alt={altImage} />
                        </NavLink>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={6} xs={12}>
                    <div className="AhliaProduct" data-aos="zoom-in" data-aos-delay="700">
                    <NavLink to={{pathname:"/en/ahlia/4", previous:{name: "ahlia"}}} exact>
                        <img src={riceDafa} alt={altImage} />
                        </NavLink>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={6} xs={12}>
                    <div className="AhliaProduct" data-aos="zoom-in" data-aos-delay="800">
                    <NavLink to={{pathname:"/en/ahlia/5", previous:{name: "ahlia"}}} exact>
                        <img src={riceGhassen} alt={altImage} />
                        </NavLink>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={6} xs={12}>
                    <div className="AhliaProduct" data-aos="zoom-in" data-aos-delay="900">
                    <NavLink to={{pathname:"/en/ahlia/6", previous:{name: "ahlia"}}} exact>
                        <img src={riceWatani} alt={altImage} />
                        </NavLink>
                    </div>
                </Col>
                </Row>
           <Row>
                <Col lg={4} md={6} sm={6} xs={12}>
                    <div className="AhliaProduct" data-aos="zoom-in" data-aos-delay="1100">
                    <NavLink to={{pathname:"/en/ahlia/7", previous:{name: "ahlia"}}} exact>
                        <img src={riceSamaha} alt={altImage} />
                        </NavLink>  
                        
                    </div>
                </Col>
               
                </Row>
           </div>
           <FooterEn />
         </main>
                </div>
            
      
            </Layout>
         
     </Aux>
      );
    }
}


export default AhliaEn;