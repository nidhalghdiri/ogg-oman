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
import './Ahlia.css';
import { Row, Col, Button} from 'react-bootstrap';
import imgGold from '../../assets/ahliaMove2.jpg';
import riceMonafes from '../../assets/products/riceMonafes.png';
import riceSakhaa from '../../assets/products/riceSakhaa.png';
import riceWhite from '../../assets/products/riceWhite.png';
import riceWatani from '../../assets/products/riceWatani.png';
import riceGhassen from '../../assets/products/riceGhassen.png';
import riceDafa from '../../assets/products/riceDafa.png';
import riceSamaha from '../../assets/products/riceSamaha.png';
import pdf from '../../assets/RiceCathalogue.pdf';
import pdfImg from '../../assets/pdf.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
class Ahlia extends Component {
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
             <NavLink to="/ar" exact className="ml-4" >
                  <FontAwesomeIcon icon={faTimesCircle} size="lg" className="CloseSVG mb-4 ml-4" style={{color: "#222222"}} />
              </NavLink>
           <div className="AhliaSlider">
           
           <Row>
                <Col lg={5}>
                    <div className="AhliaImg" data-aos="fade-right">
                        <img src={imgGold} alt={altImage} style={{width: "100%"}} />
                    </div>
                </Col>
                <Col lg={7}>
                    <div className="AhliaContent">
                        <h2 data-aos="fade-left">نبذه عن مؤسسة الاهلية للاغذية</h2>
                        {/* <h1>خــــبــــراء الأرز</h1>
                        <h2>نختار أفضل المنتجات</h2> */}
                        {/* <p>نقوم بزيارة المعارض العالمية لانتقاء افضل و أجود المنتجاتة التي تلبي حاجيات و أذواق المستهلك . يتم يتم استرادها و تخزينها وفق المعايير العالمية .</p> */}
                        {/* <p>.نوفر مجموعة من أنواع الأرز  تتماشى مع أذواق و إحتياجات  كل المستهليكين  . تزرع في اكبر مزارع الأرز في العالم و أحسنها ، كما يتم تعبئتها و تخزينها وفق المعايير العالمية لضمان الجودة  .حيث  يوجد لدينا ما يقارب عن 20 نوع من الأرز يختلف كل واحد عن الآخر بحسب نوعها و جودتها</p> */}
                        <p data-aos="fade-left">
                        تعتبر الاهلية للأغذية وخلال أكثر من إثنى عشر عاما من مسيرة النمو والتطور المستمر بتوفيق الله في شتى المجالات  لتمتلك إسما تجاريا رائدا وحصة سوقية مستدامة النمو في مجال تسويق وبيع الأرز في الجمهورية اليمنية وخصوصا في الأسواق التي تنتشر فيها وتمتلك الاهلية للأغذية إسما وعلامات تجارية موثوقه ويحبها العملاء مثل سخاء ,الوردة البيضاء ,السماحة,الدفة ,المنافس , الغسان والوطني والعديد من العلامات الاخرى وكذا العديد  والوكالات الحصرية لكبار الماركات العالمية مثل لال كيلا و زيبا وغيرها  بحيث تقوم الاهلية للاغذية بإستيراد وتسويق أفضل أنواع الارز في العالم من الهند وباكستان من خلال شركائنا والذين هم من أكبر المصدرين والمصنعين في مجال الارز ومجالات اخرى في تلك البلدان كما نتميز عن غيرنا من الشركات المنافسة بالعمل المؤسسي المنظم مستدام التطوير الذي يديرة وينفذه فريقها المثابر والمتمكن من تقديم خدمات ومنتجات تلبي احتياجات عملائنا وتنال اعجابهم مساهمين ببنا مجتمعنا وتقوية الاقتصاد الوطني والامن الغذائي. </p>
                       <a href={pdf} target="_blank" rel="noopener noreferrer">
                        <Button className="px-4" data-aos="fade-up" >
                        <span className="mr-2 Catalog">كتاوج الأرز</span>
                            <img src={pdfImg} alt="pdf Icon" />
                            
                           
                        </Button>
                        </a>
                    </div>
                </Col>
            </Row>
           </div>
           <div className="AhliaProducts">
           <Row>
                <Col lg={4} md={6} sm={6} xs={12}>
                    <div className="AhliaProduct" data-aos="zoom-in" data-aos-delay="100">
                    <NavLink to={{pathname:"/ar/ahlia/1", previous:{name: "ahlia"}}} exact>
                        <img src={riceWhite} alt={altImage} />
                        </NavLink>  
                        
                    </div>
                </Col>
                <Col lg={4} md={6} sm={6} xs={12}>
                    <div className="AhliaProduct" data-aos="zoom-in" data-aos-delay="300">
                    <NavLink to={{pathname:"/ar/ahlia/2", previous:{name: "ahlia"}}} exact>
                        <img src={riceSakhaa} alt={altImage} />
                        </NavLink>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={6} xs={12}>
                    <div className="AhliaProduct" data-aos="zoom-in" data-aos-delay="500">
                    <NavLink to={{pathname:"/ar/ahlia/3", previous:{name: "ahlia"}}} exact>
                        <img src={riceMonafes} alt={altImage} />
                        </NavLink>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={6} xs={12}>
                    <div className="AhliaProduct" data-aos="zoom-in" data-aos-delay="700">
                    <NavLink to={{pathname:"/ar/ahlia/4", previous:{name: "ahlia"}}} exact>
                        <img src={riceDafa} alt={altImage} />
                        </NavLink>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={6} xs={12}>
                    <div className="AhliaProduct" data-aos="zoom-in" data-aos-delay="800">
                    <NavLink to={{pathname:"/ar/ahlia/5", previous:{name: "ahlia"}}} exact>
                        <img src={riceGhassen} alt={altImage} />
                        </NavLink>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={6} xs={12}>
                    <div className="AhliaProduct" data-aos="zoom-in" data-aos-delay="900">
                    <NavLink to={{pathname:"/ar/ahlia/6", previous:{name: "ahlia"}}} exact>
                        <img src={riceWatani} alt={altImage} />
                        </NavLink>
                    </div>
                </Col>
                </Row>
           <Row>
                <Col lg={4} md={6} sm={6} xs={12}>
                    <div className="AhliaProduct" data-aos="zoom-in" data-aos-delay="1100">
                    <NavLink to={{pathname:"/ar/ahlia/7", previous:{name: "ahlia"}}} exact>
                        <img src={riceSamaha} alt={altImage} />
                        </NavLink>  
                        
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


export default Ahlia;