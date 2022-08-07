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
import AlDaffa from '../../assets/brands/Sakhaa.png';
import {Row, Col, Table} from 'react-bootstrap';
import './ProductAhlia.css';
import oilProduct from '../../assets/products/oilProduct.png';
import brandIcon from '../../assets/icons/brand.png';
import descriptionIcon from '../../assets/icons/description.png';
import weightIcon from '../../assets/icons/weight.png';
import lifeIcon from '../../assets/icons/life.png';
import bgProductTitle from '../../assets/icons/bgProductTitle5.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
// import Slider from "react-slick";
// import riceMonafes from '../../assets/products/riceMonafes.png';
// import riceSakhaa from '../../assets/products/riceSakhaa.png';
// import riceWhite from '../../assets/products/riceWhite.png';
// import riceWatani from '../../assets/products/riceWatani.png';
// import riceGhassen from '../../assets/products/riceGhassen.png';
// import riceDafa from '../../assets/products/riceDafa.png';
class ProductWafer2 extends Component {
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
        
            let altImg = "Oil Product";
            let backLink = this.props.location.previous.name;
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
             <NavLink to={{pathname:"/ar/sakhaa/oil", previous:{name: backLink}}} exact>
                 <FontAwesomeIcon icon={faArrowAltCircleLeft} size="lg" className="CloseSVG" style={{color: "#222222"}}  />
                 </NavLink>
                </div>
                <Row>
                    <Col lg={5}>
                        <div className="ProductImage">
                        <img src={oilProduct} alt={altImg} />
                        </div>
                    </Col>
                    <Col lg={7}>
                    <div className="ProductHeader">
                    <div className="ProductBrand">
                          <img src={AlDaffa} alt="dafa" />
                          </div>
                          <div className="ProductTitle" 
                          style={{backgroundImage: "url('"+ bgProductTitle +"')"}}>
                              <h1 style={{fontSize: "0.8rem"}}>زيت سخاء 1.8 لتر</h1>
                          </div>
                        <p>
                        زيت سخاء زيت دوار الشمس طبيعي وصحي لذيذ وغني بالفيتامينات محظر في أكبر مصانع الزيوت العالمية لضمان جودة عالية نثق بها لصحتنا وصحة عائلاتنا وأحبابنا.
                        </p>
                        </div>
                        <Row>
                        <Col lg={7}>
                    <div className="ProductCaract">
                    <Table responsive hover size="sm" >
                        <tbody>
                            <tr>
                            <td>
                                <img src={brandIcon} alt="brand" />
                            </td>
                            <td>
                                <span>زيت دوار الشمس</span>
                            </td>
                         
                            </tr>
                            <tr>
                            <td><img src={descriptionIcon} alt="description" /></td>
                            <td>
                                <span>زيت دوار الشمس</span>
                            </td>
                           
                            </tr>
                            <tr>
                            <td><img src={weightIcon} alt="Weight" /></td>
                            <td >
                                <div className="kgs">
                                    <div className="kg"><span>0.75L</span></div>
                                    <div className="kg"><span>1.8L</span></div>
                                    <div className="kg"><span>3L</span></div>
                                    <div className="kg"><span>5L</span></div>
                                </div>
                            </td>
                            
                            </tr>
                            <tr>
                            <td><img src={lifeIcon} alt="Life" /></td>
                            <td >
                                <span>
                                3 سنوات من تاريخ الانتاج
                                </span>
                        
                                </td>
                           
                            </tr>
                        </tbody>
                        </Table>
                    </div>
                    </Col>
                    <Col lg={5}>
                          <div className="ProductInfo">
                         
                          <div className="ProductContent">
                              <h4>امتيازات الصنف:</h4>
                              <ul>
                                  <li>زيت نقي طبيعي 100٪</li>
                                  <li>خالي من الدهون المتحولة</li>
                                  <li>صحي ذو جودة عالية</li>
                              </ul>
                          </div>
                          </div>
                    </Col>
                        </Row>
                    </Col>
                </Row>
                {/* <div className="ProductsList">
                <Slider {...settings}>
                    <div>
                   <NavLink to="/ar/ahlia/4" exact> <img src={riceDafa} alt={altImg} /></NavLink>
                    </div>
                    <div>
                   <NavLink to="/ar/ahlia/5" exact> <img src={riceGhassen} alt={altImg} /></NavLink>
                    </div>
                    <div>
                   <NavLink to="/ar/ahlia/3" exact> <img src={riceMonafes} alt={altImg} /></NavLink>
                    </div>
                    <div>
                   <NavLink to="/ar/ahlia/6" exact> <img src={riceWatani} alt={altImg} /></NavLink>
                    </div>
                    <div>
                   <NavLink to="/ar/ahlia/1" exact> <img src={riceWhite} alt={altImg} /></NavLink>
                    </div>
                    <div>
                   <NavLink to="/ar/ahlia/2" exact> <img src={riceSakhaa} alt={altImg} /></NavLink>
                    </div>
         
                </Slider>
                </div> */}
           <Footer />
         </main>
                </div>
            
      
            </Layout>
         
     </Aux>
      );
    }
}


export default ProductWafer2;