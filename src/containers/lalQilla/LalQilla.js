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
import './LalQilla.css';
import { Row, Col} from 'react-bootstrap';
import brand from '../../assets/agencies/LALQUILA.png';
import country from '../../assets/lalCountry.jpg';
import prod1 from '../../assets/lal/prod1.png';
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
            <div className="BrandDescription">
                <p>
                LAL QILLA الأرز البسمتي كونه مزيج غني والتي لا تنسى من التقاليد والمنتجات الغريبة يحسن روح الهند وفريدة من نوعها لا يصدق. نأتي أرقى من الأرز البسمتي إلى الحنك العالمي من خلال جلب الفرحة الغامرة على وجوه الملايين من المستهلكين في جميع أنحاء العالم.
                </p>
                <p>
                نوعية مركزة من الدرجة الأولى والإيمان لا يموت، وقد اقتحم LAL QILLA إلى آفاق جديدة وظهرت كعامل الرائدة في السوق بلا منازع. ASCW هي واحدة من أكبر شركات تصنيع الأرز من الهند بكل المقاييس. المدعومة من قبل فريق من الرؤى والمهنيين الملتزمين وقد رسخت الشركة لنفسها مكانة وهو كل مجموعة للحصول على مشاريع جديدة جميع أنحاء العالم.
                </p>

                <p>
                عمار سينغ Chawal لاء هي الشركة الرائدة في مجال ISO 22000، HACCP APEDA وشهادة في الهند من بريست وأفضل نوعية للأرز البسمتي في منطقتنا مختلف الماركات.

                </p>

                <p>
                ويزرع الأرز Basmari الأكثر استمتع في العالم في سفوح جبال الهيمالايا. التربة والمناخ لحساب المنطقة لرائحة فريدة من نوعها، الطعم والملمس من الأرز البسمتي. كلمة البسمتي تأتي من اللغة الهندية، وهذا يعني "ملكة العطر". البسمتي له نكهة غرامة العطرية مع الحبوب طويلة ونحيلة. ويمكن أن يعزى لها معطرة، نكهة nutlike والرائحة إلى حقيقة أن الحبوب والذين تتراوح أعمارهم بين، لتقليل نسبة الرطوبة فيها. عند طهيها، تتضخم فقط بالطول، مما يؤدي إلى الحبوب مرهف الطويلة التي هي جافة، منفصلة ورقيق.
                 </p>
                
            </div>
            <div className="ProductsList">
                <ul>
                    <li>
                        <img src={prod1} alt={altImage} />
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


export default LalQilla;