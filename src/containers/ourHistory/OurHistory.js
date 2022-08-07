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
import './OurHistory.css';
// import { Row, Col} from 'react-bootstrap';
// import icon from '../../assets/icons/ourHistory.png';


import slide1 from '../../assets/slides/history/slide1.jpeg';
import slide2 from '../../assets/slides/history/slide2.jpeg';
import slide3 from '../../assets/slides/history/slide3.jpeg';
import slide4 from '../../assets/slides/history/slide4.jpeg';
import slide5 from '../../assets/slides/history/slide5.jpeg';

import slide6 from '../../assets/slides/message/slide1.jpeg';
import slide7 from '../../assets/slides/message/slide2.jpeg';
import slide8 from '../../assets/slides/message/slide3.jpeg';
import slide9 from '../../assets/slides/message/slide4.jpeg';
// import historyImg from '../../assets/historyImg.png';
import historyImg from '../../assets/historic.png';

// import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
class OurHistory extends Component {
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
        modalAgencies: false,
     
        slides: [

            {slide: slide1, alt: 'slide1'},
            {slide: slide2, alt: 'slide2'},
            {slide: slide3, alt: 'slide3'},
            {slide: slide4, alt: 'slide4'},
            {slide: slide5, alt: 'slide5'},
            {slide: slide6, alt: 'slide6'},
            {slide: slide7, alt: 'slide7'},
            {slide: slide8, alt: 'slide8'},
            {slide: slide9, alt: 'slide9'}
            
          ]
    }
    next() {
        this.slider.slickNext();
      }
      previous() {
        this.slider.slickPrev();
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
             <main className="OurMessage" >
             <NavLink to="/ar" exact className="ml-4" >
                  <FontAwesomeIcon icon={faTimesCircle} size="lg" className="CloseSVG mb-4 ml-4" style={{color: "#222222"}} />
              </NavLink>
           <div className="OurMessageMain" style={{display : "flex", justifyContent : "center", alignItems : "center"}}>
           
           {/* <Row>
           <Col lg={6}>
                <div className="OurMessageImg">
                        <img data-aos="zoom-in" src={historyImg} alt="History" />
                    </div>
                </Col>
                <Col lg={6} style={{direction : "rtl"}}>
                <div className="OurMessageContent" >
                        <div className="HistoryTitle">
                        <h1 data-aos="fade-left">تاريخنا منذ ١٩٨٨</h1>
                        </div>
                    
                    <p data-aos="fade-up">
                    مجموعة العالمية الشاملة قصة نجاح بدأت قبل أكثر من إثنان وثلاثون  عاما في عام 1988م ببقالة صغير للبيع بالتجزئة وفي عام 1990م بدأت للبيع بالجمله بشكل محدود وفي العام 1999 تم إفتتاح المركز الرئيسي في مدينة الضالع - اليمن للبيع بالجمله للمنتجات الغذائية والبسكوت والشكلاته وغيرها من المنتجات المتنوعه وذلك كتجارة محلية ثم إفتتحت مخازن في العاصمة عدن في نفس الفترة وبدأت في الاستيراد لإصناف محدودة وفي عام 2009 إنضمة الاهلية للأغذية للمجموعة  ونحتت إسم مميز في السوق وتوجهت للبيع بعلامات تجارية خاصة بها وكذلك وكالات وأسماء عالميه مرموقه وفي عام 2015 بدأت الاستثمار في سلطنة عمان ودول أخرى وتم إنشاء مقر المركز الرئيسي للمجموعة في المنطقة الحرة بصلالة لتصبح بتوفيق الله سبحانة ثم بجهود أبنائها إحدى المجموعات المتميزة والتي تمارس نشاطها في سلطنة عمان والجمهورية اليمنية وتندرج تحت هذا الصرح الاقتصادي مجموعة من المؤسسات والشركات التجارية والصناعية التي تنشط في عدة مجالات وتحلق عاليا من خلال جناحيها الاول العمل المؤسسي المنظم وفق أهداف و خطط إستراتيجية محكمة يعدها ويديرها وينفذها فريق عمل متمكن ليمثلوا جناحها الثاني وهو العنصرالبشري ذو الجدارات والسمات الشخصية العالية الذي يعمل وفق قيم عظيمة فيثمر نتائج رائعه بجهود حثيثه وعمل مؤسسي منظم دائم التطوير فيحصد بها حصة سوقية طيبه ومستدامة النمو من خلال علاماتنا وأسمائنا التجارية اللامعه التي تقدم جودة وخدماة مميزة تنال رضى وإستحسان عملائنا وشركائنا الداخليين والخارجيين لنسهم في رقي وألفة مجتمعاتنا الخيرة والمباركة .
                    </p>
                </div>
                </Col>
                
            </Row> */}
            <img src={historyImg} alt="Historic" style={{width: "100%"}} />
           </div>
       
           <Footer />
         </main>
                </div>
            
      
            </Layout>
         
     </Aux>
      );
    }
}


export default OurHistory;