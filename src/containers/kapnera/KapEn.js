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
import './Kap.css';
import { Row, Col} from 'react-bootstrap';
import brand from '../../assets/agencies/kapnena.png';
import country from '../../assets/kapCountry.jpg';
import prod1 from '../../assets/kap/prod1.png';
import prod2 from '../../assets/kap/prod2.png';
import prod3 from '../../assets/kap/prod3.png';
import prod4 from '../../assets/kap/prod4.png';
import prod5 from '../../assets/kap/prod5.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { HashLink  } from 'react-router-hash-link';
class Kap extends Component {
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
             {/* <Navbar show={this.state.toggle} lien={false} /> */}
     {/* <h1>width: {this.state.widthPort}</h1> */}
     <NavbarEn show={this.state.widthPort > 768 ? true : this.state.toggle} lien={false} lang={lang} selected={this.navItemSelected} /> 
             <main className="AhliaContainer">
             <div className="BackToHome" style={{paddingLeft : "3rem"}}>
             <HashLink to="/en#agenciesSection">
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
                نحن شركة Karmela 2000 المحدودة تأسست عام 1998 في مدينة فيليكو تورنوفو في بلغاريا. تنتج شركتنا منتجات الشوكولاتة والسكر. تشمل مجموعة منتجاتنا - الوافل والبسكويت والكعك والحلويات. بعض العلامات التجارية المعروفة لدينا هي فاميلي ، بيج تشوكو فاميلي ، إكسترا كيك ، إكسترا براوني ، كرميلا ، سويت ليور ، كرميلا رويال ، فورزا ، ريذم.
                </p>
                <p>
                كرميلا هي واحدة من الشركات البلغارية سريعة النمو في هذا القطاع. نحن فخورون بكوننا شريكًا موثوقًا به لعملائنا وموردينا وموظفينا ومستهلكينا.
                </p>
                <p>
                في السنوات القليلة الماضية ، نزيد باستمرار حصصنا في السوق ونقوي مكانتنا في الأسواق البلغارية والدولية. استنادًا إلى بحث تسويقي مستقل ، نحن رواد السوق في السوق البلغاري في مبيعات الميني الوافل ، ونتخذ موقعًا ثلاثي الأبعاد في جميع فئات الفطائر ، والمركز الرابع بين جميع الشركات في قطاعنا.
                </p>
                <p>
                من خلال مجموعة المنتجات المتوازنة والتصميم الممتاز والجودة الجيدة لمنتجاتنا ، نحاول أن نثبت كل يوم أن Karmela هي شركة مسؤولة تركز على المستهلكين. نحن نمتلك مصنعًا حديثًا وحصلنا على شهادات ISO 9001: 2000 و HACCP و IFS. يعد الشعار الموجود على علاماتنا التجارية ضمانًا بأن منتجاتنا غير ضارة للاستهلاك وأنها تلبي جميع المتطلبات القياسية للحصول على جودة جيدة.
                </p>
                <p>
                لدينا علاقات تجارية طويلة الأمد مع أكثر من 45 شركة تجارية وشريك موثوق به للعديد من سلاسل التجارة في جميع أنحاء بلغاريا.
                </p>
                <p>
                لدينا علاقات جيدة للغاية ونبيع منتجاتنا بنجاح في 17 دولة في أوروبا وآسيا وأفريقيا.
                </p>
                <p>
                نحن فخورون بأنه بناءً على العمل الجاد لفريقنا واستثمارات كبيرة في الإنتاج ، تمكنا من بناء شركة ناجحة وأصبحنا لاعبًا في سوق تنافسي للغاية وخيار مفضل للكثيرين ممن يحبون ويستمتعون بإغراء حلويات كرميلا .
                </p>
            </div>
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
                </ul>
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


export default Kap;