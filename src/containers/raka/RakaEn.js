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
import '../ahlia/AhliaEn.css';
import { Row, Col} from 'react-bootstrap';
import imgAlia from '../../assets/rakaLogo.png';
import wafers from '../../assets/products/wafersProd.png';
import bulgaria from '../../assets/bulgaria.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowAltCircleLeft, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
class RakaEn extends Component {
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
        if(this.props.location.previous === undefined){
            this.props.location.previous = { name: "home"}; 
        }
        let backLink =null;
            if(this.props.location.previous.name === 'home'){
                backLink = (<NavLink to="/en" exact>
                    <FontAwesomeIcon icon={faTimesCircle} size="lg" className="CloseSVG" style={{color: "#222222"}}  />
                    </NavLink>);
            }else if(this.props.location.previous.name === 'alia'){
                backLink = (<NavLink to="/en/alia" exact>
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
                          <img src={imgAlia} alt={altImage} />
                          </div>
                    <div className="ProductHeader">
                          <p>
                            <b>Raka Wafer</b>
                            It is with chocolate, milk and vanilla, as well as Wafer covered with chocolate and peanuts. It is crunchy and delicious. A European quality we are proud to present it to you.
                                </p>
                        </div>
                    <div className="ProductHeader" style={{marginTop : "4rem", padding: "1rem 0"}}>
                          <div className="ProductCountry" style={{justifyContent: "flex-start"}}>
                              <img src={bulgaria} alt="bulgaria" style={{position : "unset"}} />
                              <span>Bulgarian product</span>
                          </div>
                          <div className="ProductCountry" style={{justifyContent: "flex-start"}}>
                              <span>Raka Chocolate 6 packets x 24 pieces' x 40 grams</span>
                          </div>
                          
                        </div>
                        
                    </Col>
                    <Col lg={7}>
                        <div className="ProductImage">
                        <img src={wafers} alt={altImage} />
                        </div>
                    </Col>
                </Row>
               
           <FooterEn />
         </main>
                </div>
            
      
            </Layout>
         
     </Aux>
      );
    }
}


export default RakaEn;