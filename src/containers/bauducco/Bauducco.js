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
import './Bauducco.css';
import { Row, Col} from 'react-bootstrap';
import brand from '../../assets/agencies/Bauducco.png';
import country from '../../assets/boudCountry.jpg';
import prod1 from '../../assets/bouducco/prod1.png';
import prod2 from '../../assets/bouducco/prod2.png';
import prod3 from '../../assets/bouducco/prod3.png';
import prod4 from '../../assets/bouducco/prod4.png';
import prod5 from '../../assets/bouducco/prod5.png';
import prod6 from '../../assets/bouducco/prod6.png';
import prod7 from '../../assets/bouducco/prod7.png';
import prod8 from '../../assets/bouducco/prod8.png';
import local from '../../assets/bouducco/BauduccoLocal.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { HashLink  } from 'react-router-hash-link';
class Bauducco extends Component {
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
             <div className="BackToHome" style={{paddingLeft : "3rem"}}>
             <HashLink to="/ar#agenciesSection">
                 <FontAwesomeIcon icon={faArrowAltCircleLeft} size="lg" className="CloseSVG" style={{color: "#222222"}}  />
                 </HashLink>
                </div>
           <div className="AhliaSlider">
           <Row>
                <Col lg={6}>
                    <div className="Country">
                    <img src={country} alt={altImage} />
                    </div>
                </Col>
                <Col lg={6}>
                <div className="AhliaImg">
                        <img src={brand} alt={altImage} />
                    </div>
                </Col>
            </Row>
           </div>
           <div className="AhliaProducts">
            <Row className="">
                <Col lg={7}>
                <div className="BrandDescription">
                <p>
                بدأ تاريخ Bauducco في عام 1948 عندما سافر Carlo Bauducco من إيطاليا إلى البرازيل وأحضر وصفة Panettone الأصلية لعائلته جنبًا إلى جنب مع قطعة ثمينة من العجين المخمر.

                </p>
                <p>
                بعد أربع سنوات ، وبمساعدة زوجته وابنه ، افتتح أول متجر حلويات لهم في حي إيطالي تقليدي في ساو باولو. ولد Bauducco Panettone رسميًا وأصبح عنصرًا أساسيًا في موائد العائلات البرازيلية. لطالما اتبع Bauducco Panettone الوصفة العائلية الأصلية من إيطاليا: أجود المكونات ، العجين الأصلي مع التخمير الطبيعي و 52 ساعة من التفاني لكل بانيتون.

                </p>
                <p>
                Bauducco هي جزء من أكبر مصنع للسلع المخبوزة في البرازيل وأكبر منتج للبانيتون في العالم ، باندوراتا. تشمل فئات السوق الرئيسية لباندوراتا Panettones والبسكويت والكوكيز والخبز المحمص والكعك والميني كيك والشوكولاتة. لطالما ارتبطت Pandurata بعلامات تجارية رائعة تقدم منتجات عالية الجودة. في عام 2001 استحوذت على مصنع Visconti في البرازيل و Io-Iô Crem. وقعت Pandurata في عام 2008 مشروعًا مشتركًا مع Hershey's وتولت أيضًا توزيع منتجات Ovaltine في البرازيل.

                </p>
                <p>
                حاليًا ، تمتلك Pandurata واحدة من أكثر المجمعات الصناعية تقدمًا في أمريكا اللاتينية ، بما في ذلك 12 خط إنتاج بسكويت الويفر وأكبر خط من الخبز المحمص في العالم. ما يقرب من خمسة آلاف موظف موزعين على خمسة مصانع. من خلال 12 شركة فرعية وسبعة مراكز توزيع في البرازيل ، تقوم باندوراتا بتوريد أكثر من 150 ألف نقطة بيع.
                </p>
                
            </div>
                </Col>
                <Col lg={5}>
                    <div className="ProductImg">
                        <img src={local} alt="Boducco" />
                    </div>
                </Col>
            </Row>
            <div className="ProductsList">
                <ul>
                    <li>
                        <img src={prod1} alt={altImage} style={{width: "80%"}} />
                    </li>
                    <li>
                        <img src={prod2} alt={altImage} style={{width: "80%"}} />
                    </li>
                    <li>
                        <img src={prod3} alt={altImage} style={{width: "80%"}} />
                    </li>
                    <li>
                        <img src={prod4} alt={altImage} style={{width: "80%"}} />
                    </li>
                    <li>
                        <img src={prod5} alt={altImage} style={{width: "80%"}} />
                    </li>
                    <li>
                        <img src={prod6} alt={altImage} style={{width: "80%"}} />
                    </li>
                    <li>
                        <img src={prod7} alt={altImage} style={{width: "80%"}} />
                    </li>
                    <li>
                        <img src={prod8} alt={altImage} style={{width: "80%"}} />
                    </li>
                </ul>
            </div>
           </div>
           <Footer />
         </main>
                </div>
            
      
            </Layout>
         
     </Aux>
      );
    }
}


export default Bauducco;