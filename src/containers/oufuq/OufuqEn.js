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
import './OufuqEn.css';
// import { Row, Col} from 'react-bootstrap';
import oufuqLogo from '../../assets/companies/oufuq.png';
import oufuq1 from '../../assets/companies/aofuqBrands/brand1.png';
import oufuq2 from '../../assets/companies/aofuqBrands/brand2.png';
import oufuq3 from '../../assets/companies/aofuqBrands/brand3.png';
import oufuq4 from '../../assets/companies/aofuqBrands/brand4.png';
import oufuq5 from '../../assets/companies/aofuqBrands/brand5.png';
import oufuq6 from '../../assets/companies/aofuqBrands/brand6.png';
import oufuq7 from '../../assets/companies/aofuqBrands/brand7.png';
import oufuq8 from '../../assets/companies/aofuqBrands/brand8.png';
import oufuq9 from '../../assets/companies/aofuqBrands/brand9.png';
import oufuq10 from '../../assets/companies/aofuqBrands/brand10.png';
import oufuq11 from '../../assets/companies/aofuqBrands/brand11.png';
import oufuq12 from '../../assets/companies/aofuqBrands/brand12.png';
import oufuq13 from '../../assets/companies/aofuqBrands/brand13.png';
import oufuq14 from '../../assets/companies/aofuqBrands/brand14.png';
import oufuq15 from '../../assets/companies/aofuqBrands/brand15.png';
import oufuq16 from '../../assets/companies/aofuqBrands/brand16.png';
import oufuq17 from '../../assets/companies/aofuqBrands/brand17.png';
import img from '../../assets/companies/oufuqBack.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
class QufuqEn extends Component {
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
             <main className="OufuqContainer">
             <NavLink to="/en" exact className="ml-4" >
                  <FontAwesomeIcon icon={faTimesCircle} size="lg" className="CloseSVG mb-4 ml-4" style={{color: "#222222"}} />
              </NavLink>
            <div className="OufuqImage">
            <img src={img} alt={altImage} />
            <div className='OufuqContent'>
                <div className="OufuqLogo">
                    <img src={oufuqLogo} alt="Oufuq" />
                </div>
                <div className='OufuqPara'>
                    <h6>who are we?</h6>
                    <p>Al Oufuq Al Wadheh Company is a distribution and trading company based in the Sultanate of Oman.</p>
                    <p>We are the suppliers and distributors of a wide range of trusted brands in consumer goods.</p>
                </div>
                <div className='OufuqPara'>
                    <h6>Why our Company?</h6>
                    <p>We represent high quality products of all product categories.</p>
                    <p>We aiming to be the preferred partner for supplying and distributing trademarks commodities in Oman.</p>
                    <p>In this context, we strive to go beyond meeting needs to exceeding expectations.</p>
                    <p>What we seek is growth, not only our own growth, but also the growth of our suppliers.</p>
                </div>
                <div className='OufuqBrands'>
                    <ul>
                        <li><img src={oufuq1} alt='brand 1' /></li>
                        <li><img src={oufuq2} alt='brand 2' /></li>
                        <li><img src={oufuq3} alt='brand 3' /></li>
                        <li><img src={oufuq4} alt='brand 4' /></li>
                        <li><img src={oufuq5} alt='brand 5' /></li>
                        <li><img src={oufuq6} alt='brand 6' /></li>
                        <li><img src={oufuq7} alt='brand 7' /></li>
                        <li><img src={oufuq8} alt='brand 8' /></li>
                        <li><img src={oufuq9} alt='brand 9' /></li>
                    </ul>
                    <ul>
                        <li><img src={oufuq10} alt='brand 10' /></li>
                        <li><img src={oufuq11} alt='brand 11' /></li>
                        <li><img src={oufuq12} alt='brand 12' /></li>
                        <li><img src={oufuq13} alt='brand 13' /></li>
                        <li><img src={oufuq14} alt='brand 14' /></li>
                        <li><img src={oufuq15} alt='brand 15' /></li>
                        <li><img src={oufuq16} alt='brand 16' /></li>
                        <li><img src={oufuq17} alt='brand 17' /></li>
                    </ul>
                </div>
            </div>
            </div>
           
           <FooterEn />
         </main>
                </div>
            
      
            </Layout>
         
     </Aux>
      );
    }
}


export default QufuqEn;