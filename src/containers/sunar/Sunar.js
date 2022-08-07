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
import './Sunar.css';
import { Row, Col} from 'react-bootstrap';

import brand from '../../assets/agencies/sunar.png';
import SunarImg from '../../assets/agencies/sunarImg.png';
// import country from '../../assets/lalCountry.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { HashLink  } from 'react-router-hash-link';
class LalQilla extends Component {
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
           <div className="BrandMain">
               <Row>
                   <Col lg={6}>
                       <div className="BrandContent">
                            <div className="BrandLogo">
                                <img src={brand} alt="Logo" />
                            </div>
                            <div className="BrandText">
                            <p>
مجموعة Sunar ، التي تزداد قيمتها في الصناعة القائمة على الزراعة وقطاع الأغذية في تركيا ، تصدر بعلامتها التجارية الخاصة إلى أكثر من 100 دولة في 5 قارات مع ما يقرب من نصف قرن من الخبرة ، و 900 موظف ، ومجموعة واسعة من المنتجات. تهدف Sunar Grup إلى أن تكون واحدة من أكبر المجموعات الصناعية القائمة على الزراعة في أوروبا والشرق الأوسط وشمال إفريقيا بفضل قدرتها العالية وتراكمها الواسع للمعرفة والخبرة.
                                </p>
                                <p>
                                تم وضع الأساس لمجموعة Sunar Grup في أوائل السبعينيات من خلال الاستثمارات الشجاعة والرشيدة التي قام بها مؤسسها Hacı Nuri Çomu في مجال القطن والأرز. حتى لو لم يكن مصنع القطن والأرز الذي تم العثور عليه في عام 1974 موجودًا حتى اليوم بسبب المشاكل التي واجهتها زراعة القطن في جوكوروفا ، فإن أقدم شركة تابعة للمجموعة تأسست Sunar Özlem في عثمانية في عام 1976 كمصنع دقيق. شركات Sunar Yem التي أضيفت إلى منظمة Sunar Özlem في عام 1997 ، Sunar Mısır التي تأسست في أضنة عام 1985 ، NÇS و Elita Gıda اللتان تم تأسيسهما في عام 2006 ، وشركة Sunar Pazarlama التي تأسست عام 2010 ، Sunar NP ، التي تأسست عام 2014 ، انضمت إلى تنظيم المجموعة.
                                </p>
                            </div>
                       </div>
                   </Col>
                   <Col lg={6}>
                       <div className="BrandImg">
                           <img src={SunarImg} alt="Multu" />
                       </div>
                   </Col>

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


export default LalQilla;