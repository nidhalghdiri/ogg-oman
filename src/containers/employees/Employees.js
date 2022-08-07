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
import Modal from '../../components/modal/Modal';
import './Employees.css';
import employeesImgs from '../../assets/employeesImgs.png';
import { Row, Col} from 'react-bootstrap';
// import icon from '../../assets/icons/ourHistory.png';
import employeesImg from '../../assets/employeesImg.png';
import icon1 from '../../assets/icons/paragIcon1.png';
import icon2 from '../../assets/icons/paragIcon2.png';
import slide from '../../assets/slides/profile/slideEmployees.jpg';

// import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
class Employees extends Component {
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
        slides: [

            {slide: slide, alt: 'slide'},
          
          ],
        items: {
        item1: [
            {slide: slide, alt: 'slide'},
        ],
    },
        itemSelected : 'item1',
        itemSelectedName : 'الموظفين',  
        selectedBrand: 0,
        sakhaaProduct: null,
        rakaSelected: false,
        modalAgencies: false,
     
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
            modalSlides : false,
            sakhaaProduct: null
        });
        
    }
    openModalSlidesHandler = (id, name) => {
        this.setState({
            modalSlides: true,
            itemSelected : id,
            itemSelectedName : name
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
                <Backdrop clicked={this.hideBackdropHandler} show={this.state.modalSlides} showNav={this.state.toggle} />
                <Modal show={this.state.modalSlides} name={this.state.itemSelectedName} slides={this.state.items[this.state.itemSelected]}  hide={this.hideBackdropHandler}  />
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
             <main className="Employees"  >
             <NavLink to="/ar/about/profile" exact className="ml-4" >
                  <FontAwesomeIcon icon={faArrowAltCircleLeft} size="lg" className="CloseSVG mb-4 ml-4" style={{color: "#FFFFFF"}} />
              </NavLink>
          <div className="EmployeesMain">
           <div className="EmployeesHeader">
            <div className="EmployeesImg">
                <img src={employeesImg} alt="employees" data-aos="fade-up" data-aos-delay="300" />
            </div>
           <div className="EmployeesTitle" data-aos="zoom-in-down">
                <h1>150</h1>
                <h2>موظف</h2>
            </div>
           </div>
            <Row>
                <Col lg={8}>
                    <div className="ProductsText">
                        <div className="IconTop" data-aos="zoom-in" data-aos-delay="500">
                            <img src={icon1} alt="IconTop" />
                        </div>
                        <div className="IconBottom" data-aos="zoom-in" data-aos-delay="700">
                            <img src={icon2} alt="IconBottom" />
                        </div>
                        <h3 data-aos="fade-down" data-aos-delay="800">فريق واحد ...مستقبل واعد..</h3>
                        <p data-aos="fade-in" data-aos-delay="900">
                        تمتلك الشركة مجموعة من الخبرات التي لا يشهد لها بالكفاءة فقط بل ايضا بالاخلاق العالية 
و حب العمل و الولاء للشركة والذين عملو بجد لبناء سمعة طيبة في سوق العمل ،، 
من جنسيات مختلفة ( اليمن - سلطنة عمان - الاردن - العراق - تونس
 الهند - باكستان وغيرها.. ) يتوزعون على إختصاصات متنوعة كل حسب شهاداته و كفائته .. 
 <br />
فريق نعتز بيه ونعلق عليه كل آملنا للرقي بالشركة ..
                        </p>
                        <div className="Listes">
                        <ul data-aos="fade-left" data-aos-delay="900">
                            <li>الإدارة</li>
                            <li>المستشارين</li>
                            <li>التخطيط و المتابعة </li>
                            <li>تقنية المعلومات</li>
                            <li>مندوبي المطاعم</li>
                        </ul>
                        <ul data-aos="fade-right" data-aos-delay="1000">
                            <li>المبيعات</li>
                            <li>الحسابات</li>
                            <li>التسويق</li>
                            <li>مرويجي السوبرات</li>
                        </ul>
                        <ul data-aos="fade-right" data-aos-delay="1000">
                            <li>اللوجستك</li>
                            <li>الموارد البشرية</li>
                            <li>المالية</li>
                            <li>النقل</li>
                        </ul>
                        </div>
                    </div>
                </Col>
                <Col lg={4}>
                <div className="TrucksImgs" data-aos="zoom-in" data-aos-delay="500">
                       <img src={employeesImgs} alt="imgs" onClick={() => this.openModalSlidesHandler('item1', 'الموظفين')} />
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


export default Employees;