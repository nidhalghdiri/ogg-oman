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
import './Mutlu.css';
import { Row, Col} from 'react-bootstrap';
import brand from '../../assets/agencies/mutlu.png';
import multuImg from '../../assets/agencies/multuImg.png';
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
                                أجل تقديم خدمة أفضل وبالتالي المساهمة في اقتصاد البلاد ، و زيادة فرص العمل ،  وقد بدأ استثمار متكامل سريع في عام 1992 على قطعة أرض تبلغ مساحتها 45.000 متر مربع في المنطقة الصناعية المنظمة الثانية في منطقة باسبينار.
                                </p>
                                <p>
                                شركتنا واصلت الاستثمار من خلال الحصول على 150،000 متر مربع إضافية من الأراضي في المنطقة الصناعية الخامسة المنظمة فى غازى عنتاب.
                                </p>
                                <p>
                                اعتبارًا من عام 2019 ، زادت مساحة مصانع المعكرونة لدينا لتبلغ مساحتها الإجمالية 21.000 مترًا مربعًا ومصنع السميد الذي نصل مساحته الإجمالية 16.000 مترًا مربعًا قيد الإنتاج. في منشآتنا الجديدة ، يمكن إجراء عمليات التحميل في الوقت المناسب وبطريقة أسرع من خلال مساحة التخزين و التي تبلغ مساحتها 13.000 متر مربع. وبذلك أصبحت أكبر شركة لتصنيع المعكرونة في العالم ليس فقط في تركيا من حيث  طحن 1.500 طن من القمح يوميًا وإنتاج 1200 طن من المعكرونة يوميا 
                                </p>
                                <p>
                وفي نهاية عام 2019 ، سيتم الوصول إلى 2000 طن من طحن القمح يوميا و 1300 طن إنتاج المعكرونة يوميا
                                </p>
                            </div>
                       </div>
                   </Col>
                   <Col lg={6}>
                       <div className="BrandImg">
                           <img src={multuImg} alt="Sunar" />
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