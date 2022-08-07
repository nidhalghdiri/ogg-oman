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
import './AliaEn.css';
import { Row, Col} from 'react-bootstrap';
import imgAlia from '../../assets/aliaLogo.png';
import waferAlia from '../../assets/products/waferAlia.png';
import oilAlia from '../../assets/products/oilAlia.png';
// import pasta1Alia from '../../assets/products/pasta1Alia.png'
import pasta from '../../assets/products/pastaProducts.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
class Alia extends Component {
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
             
             <main className="AliaEnContainer">
           <div className="AhliaSlider">
           <NavLink to="/en" exact className="ml-4" >
                  <FontAwesomeIcon icon={faTimesCircle} size="lg" className="CloseSVG mb-4 ml-4" style={{color: "#222222"}} />
              </NavLink>
           <Row>
                
                <Col lg={9}>
                    <div className="AhliaContent">
                        <h2 data-aos="fade-right"  style={{textAlign:"left", direction:"ltr"}}>A wide variety of products you like</h2>

                        <p data-aos="fade-right"  style={{direction:"ltr"}}>
                        Al Alia Food Foundation is one of the fledging foundations in the markets of the Republic of Yemen as a member of the OGG, where it has attracted other's attention by achieving very good growth rates in sales and market share in the past few years. It is active in various fields of foodstuffs and confectionery, and has distinctive trade names such as Raka, Sakha oil, Sakha pasta and others. It is also the sole agent for many international brands in the Republic of Yemen for our partners such as Colian in Poland - Caramel in Bulgaria – Lacasa in Spain - Bauducco in Brazil. Al Alia Food works hard to build a distinctive working team with a modern institutional system to gain a market share. It provides products with a high quality and a competitive price through major international companies in order to offer high quality products to its customers and society and contribute to fostering and building of economic development of the society and food security.
                        </p>
                        
                    </div>
                </Col>
                <Col lg={3}>
                    <div className="AhliaImg">
                        <img src={imgAlia} alt={altImage} style={{width: "100%"}} data-aos="fade-right" />
                    </div>
                </Col>
            </Row>
           </div>
           <div className="AhliaProducts">
           <Row>
                <Col lg={3} md={6} sm={6} xs={12}>
                    <div className="AhliaProduct" data-aos="zoom-in" data-aos-delay="100">
                    <NavLink to={{pathname:"/en/raka", previous:{name: "alia"}}} exact>
                        <img src={waferAlia} alt={altImage} />
                        </NavLink>  
                        
                    </div>
                </Col>
                <Col lg={3} md={6} sm={6} xs={12}>
                    <div className="AhliaProduct" data-aos="zoom-in" data-aos-delay="300">
                    <NavLink to={{pathname:"/en/sakhaa/oil", previous:{name: "alia"}}} exact>
                        <img src={oilAlia} alt={altImage} />
                        </NavLink>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={6} xs={12}>
                    <div className="AhliaProduct" data-aos="zoom-in" data-aos-delay="500">
                    <NavLink to={{pathname:"/en/sakhaa/pasta", previous:{name: "alia"}}} exact >
                        <img src={pasta} alt={altImage} />
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


export default Alia;