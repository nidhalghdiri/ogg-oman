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
import './Sakhaa.css';
import { Row, Col} from 'react-bootstrap';
import imgAlia from '../../assets/sakhaaLogo.png';
// import waferAlia from '../../assets/products/waferAlia.png';
import oilAlia from '../../assets/products/oilAlia.png';
// import pasta1Alia from '../../assets/products/pasta1Alia.png';
// import pasta2Alia from '../../assets/products/pasta2Alia.png';
import rice from '../../assets/products/riceSakhaa.png';
import pasta from '../../assets/products/pastaProducts.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimesCircle } from '@fortawesome/free-regular-svg-icons';
class Sakhaa extends Component {
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
             <main className="AhliaContainer">
           <div className="AhliaSlider">
           <NavLink to="/ar" exact>
                <FontAwesomeIcon icon={faTimesCircle} size="lg" className="CloseSVG" style={{color: "#222222"}}  />
                </NavLink>
           <Row>
                
                <Col lg={9} className="d-flex justify-content-center align-items-end">
                    <div className="AhliaContent">
                        <h2>الاختيار الأفضـل و الصحي</h2>
                        {/* <h2>نختار أفضل المنتجات</h2> */}
                        {/* <p>نقوم بزيارة المعارض العالمية لانتقاء افضل و أجود المنتجاتة التي تلبي حاجيات و أذواق المستهلك . يتم يتم استرادها و تخزينها وفق المعايير العالمية .</p> */}
                        <p>
                        تتميز علامة سخاء عن بقية العلامات بجودتها العالية حيث تشمل الارز ر و المكرونة و الزيت بكل احجامها و هي علامة نفخر بها و نقوم من خلالها بتوفر أجود أنواع المواد الغذائية ذات الإستعمال اليومي.
                        </p>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className="SakhaaImg">
                        <img src={imgAlia} alt={altImage} />
                    </div>
                </Col>
            </Row>
           </div>
           <div className="AhliaProducts">
           <Row>
                <Col lg={3} md={6} sm={6} xs={12}>
                    <div className="AhliaProduct">
                    <NavLink to={{pathname:"/ar/ahlia/2", previous:{name: 'sakhaa'}}} exact>
                        <img src={rice} alt={altImage} />
                        </NavLink>  
                        
                    </div>
                </Col>
                <Col lg={3} md={6} sm={6} xs={12}>
                    <div className="AhliaProduct">
                    <NavLink to={{pathname:"/ar/sakhaa/oil", previous:{name:'sakhaa'}}} exact>
                        <img src={oilAlia} alt={altImage} />
                        </NavLink>
                    </div>
                </Col>
             
                <Col lg={3} md={6} sm={6} xs={12}>
                    <div className="AhliaProduct">
                    <NavLink to={{pathname:"/ar/sakhaa/pasta", previous:{name: 'sakhaa'}}} exact>
                        <img src={pasta} alt={altImage} />
                        </NavLink>
                    </div>
                </Col>
                {/* <Col lg={3} md={6} sm={6} xs={12}>
                    <div className="AhliaProduct">
                    <NavLink to="/ar/alia/4" exact>
                        <img src={pasta2Alia} alt={altImage} />
                        </NavLink>
                    </div>
                </Col> */}
              
                </Row>
           </div>
           <Footer />
         </main>
                </div>
            
      
            </Layout>
         
     </Aux>
      );
    }
}


export default Sakhaa;