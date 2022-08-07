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
import './Colian.css';
import { Row, Col} from 'react-bootstrap';
import brand from '../../assets/agencies/COLIAN.png';
import country from '../../assets/colianCountry.jpg';
import prod1 from '../../assets/colian/prod1.png';
import prod2 from '../../assets/colian/prod2.png';
import prod3 from '../../assets/colian/prod3.png';
import prod4 from '../../assets/colian/prod4.png';
import prod5 from '../../assets/colian/prod5.png';
import prod6 from '../../assets/colian/prod6.png';
import prod7 from '../../assets/colian/prod7.png';
import prod8 from '../../assets/colian/prod8.png';
import prod9 from '../../assets/colian/prod9.png';
import prod10 from '../../assets/colian/prod10.png';
import prod11 from '../../assets/colian/prod11.png';
import prod12 from '../../assets/colian/prod12.png';
import prod13 from '../../assets/colian/prod13.png';
import local from '../../assets/colian/colianLocal.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { HashLink  } from 'react-router-hash-link';
class Colian extends Component {
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
           <Row>
                <Col lg={7}>
                <div className="BrandDescription">
                <p>
                في Colian Group ، نعتقد أن موظفينا يمثلون أعظم قيمة وأهم أصول مؤسستنا. من خلال كفاءة والتزام واستقلال موظفينا يمكننا أن ننمو بسرعة ونحقق نجاحًا في السوق.

                </p>
                <p>
                نرغب في تعزيز جو عمل ودي ومفتوح للمهنيين الذين سيؤدون واجباتهم بشغف والتزام. نحن نستخدم العمليات ونتبع الإجراءات التي تساعدنا على تنظيم وتبسيط أساليب عملنا أثناء استخدام أفضل الممارسات. يمكننا أيضًا إنشاء وتنفيذ أفكارنا وحلولنا الخاصة ، ونتيجة لذلك يكون لها تأثير حقيقي على عمل مؤسستنا. نحن نؤمن بأنه لا يوجد شيء مستحيل وأن طريقة التفكير هذه تساعدنا على ضمان تطورنا المستمر وتشجيع التفكير الإبداعي.

                </p>
                <p>
                تساعدنا التحديات المهنية اليومية وحالات العمل المثيرة للاهتمام على تطوير خبرتنا وتزويدنا بفرص لاكتساب خبرة قيمة. لدينا ثقافة تنظيمية واضحة تنعكس في نموذج الكفاءة لدينا الذي يغطي جميع موظفي الشركة.

                </p>
                <p>
                بغض النظر عن الدور الذي نقوم به في مؤسستنا ، يجب أن يقوم موقفنا على المبادئ التالية:
                </p>
                
            </div>
                </Col>
                <Col lg={5}>
                <div className="ProductImg">
                        <img src={local} alt="Colian" />
                    </div>
                </Col>
            </Row>
            
            <div className="ProductsList">
                <ul>
                    <li>
                        <img src={prod1} alt={altImage} />
                    </li>
                    <li>
                        <img src={prod2} alt={altImage} />
                    </li>
                    <li>
                        <img src={prod3} alt={altImage} />
                    </li>
                    <li>
                        <img src={prod4} alt={altImage} />
                    </li>
                    <li>
                        <img src={prod5} alt={altImage} />
                    </li>
                    <li>
                        <img src={prod6} alt={altImage} />
                    </li>
                    <li>
                        <img src={prod7} alt={altImage} />
                    </li>
                    <li>
                        <img src={prod8} alt={altImage} />
                    </li>
                    <li>
                        <img src={prod9} alt={altImage} />
                    </li>
                    <li>
                        <img src={prod10} alt={altImage} />
                    </li>
                    <li>
                        <img src={prod11} alt={altImage} />
                    </li>
                    <li>
                        <img src={prod12} alt={altImage} />
                    </li>
                    <li>
                        <img src={prod13} alt={altImage} />
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


export default Colian;