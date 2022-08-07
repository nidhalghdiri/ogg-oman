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
import '../ahlia/Ahlia.css';
import { Row, Col} from 'react-bootstrap';
import imgAlia from '../../assets/sakhaaLogo.png';
import pastaProducts from '../../assets/products/oilProduct.png';
import cook from '../../assets/cookOil.png';
// import waferAlia from '../../assets/products/waferAlia.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
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
        let backLink = null;
        if(this.props.location.previous === undefined){
            this.props.location.previous = { name: "home" }; 
        }
        if(this.props.location.previous.name === 'sakhaa'){
            backLink = (<NavLink to="/ar/sakhaa" exact>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} size="lg" className="CloseSVG" style={{color: "#222222"}}  />
                </NavLink>);
        }else if(this.props.location.previous.name === 'alia'){
            backLink = (<NavLink to="/ar/alia" exact>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} size="lg" className="CloseSVG"  style={{color: "#222222"}} />
                </NavLink>);
        }
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
             {backLink}
                </div>
                <Row>
                    <Col lg={7}>
                        <div className="ProductImage">
                        <img src={pastaProducts} alt={altImage} />
                        </div>
                    </Col>
                    <Col lg={5}>
                    <div className="ProductBrand">
                          <img src={imgAlia} alt={altImage} />
                          </div>
                    <div className="ProductHeader">
                          {/* <div className="ProductTitle" 
                          style={{backgroundImage: "url('"+ bgProductTitle +"')"}}>
                              <h1>آرز خبراء الطبخ</h1>
                          </div> */}
                          <p>
                            <b>زيت سخاء</b>
                            زيت دوار الشمس طبيعي وصحي لذيذ وغني بالفيتامينات محظر في  أكبر مصانع الزيوت العالمية لضمان جودة عالية نثق بها لصحتنا وصحة عائلاتنا وأحبابنا.
                            </p>
                        </div>
                        <div className="ProductHeader" style={{marginTop : "4rem"}}>
                            <img src={cook} alt="cook" style={{width: "30%", left : "-10%"}}/>
                        <p>
                            <b>طريقة الطبخ</b><br/>
                            
                            زيت عباد الشمس من سخاء هو زيت طهي خفيف يضفي نكهة لذيذة على تتبيلات السلطة والمايونيز. يستخدم أيضًا للقلي السريع، والسوتيه، والمعجنات. للمحافظة على صلاحية المنتج، يُحفظ في الثلاجة ويُستخدم في غضون 4 أشهر بعد الفتح.
                            </p>
                        </div>
                        {/* <div className="ProductTemp">
                            <img src={temp} alt="Temp" />
                            <p>مقاوم للحرارة على ان لا تتجواز مدة 10 دقائق على نار مرتفعه.</p>
                        </div> */}
                        
                    </Col>
                </Row>
               
           <Footer />
         </main>
                </div>
            
      
            </Layout>
         
     </Aux>
      );
    }
}


export default Sakhaa;