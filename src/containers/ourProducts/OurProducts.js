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
import './OurProducts.css';
import { Row, Col} from 'react-bootstrap';
// import icon from '../../assets/icons/ourHistory.png';
import ourProductsImg from '../../assets/ourProductsImg.png';
import img1 from '../../assets/productsImg1.png';
import img2 from '../../assets/productsImg2.png';
import img3 from '../../assets/productsImg3.png';
import img4 from '../../assets/productsImg4.png';
import icon1 from '../../assets/icons/paragIcon1.png';
import icon2 from '../../assets/icons/paragIcon2.png';
import slideRice1 from '../../assets/slides/profile/rice/slideRice1.png';
import slideRice2 from '../../assets/slides/profile/rice/slideRice2.png';
import slideRice3 from '../../assets/slides/profile/rice/slideRice3.png';
import slideRice4 from '../../assets/slides/profile/rice/slideRice4.png';
import slideRice5 from '../../assets/slides/profile/rice/slideRice5.png';
import slideRice6 from '../../assets/slides/profile/rice/slideRice6.png';
import slideRice7 from '../../assets/slides/profile/rice/slideRice7.png';
import slideRice8 from '../../assets/slides/profile/rice/slideRice8.png';

import slidePasta1 from '../../assets/slides/profile/pasta/slidePasta1.png';
import slidePasta2 from '../../assets/slides/profile/pasta/slidePasta2.png';

import slideOil1 from '../../assets/slides/profile/oil/slideOil1.png';
import slideOil2 from '../../assets/slides/profile/oil/slideOil2.png';
import slideOil3 from '../../assets/slides/profile/oil/slideOil3.png';
import slideOil4 from '../../assets/slides/profile/oil/slideOil4.png';

import slideSweet1 from '../../assets/slides/profile/sweet/slideSweet1.png';
import slideSweet2 from '../../assets/slides/profile/sweet/slideSweet2.png';
import slideSweet3 from '../../assets/slides/profile/sweet/slideSweet3.png';
import slideSweet4 from '../../assets/slides/profile/sweet/slideSweet4.png';
import slideSweet5 from '../../assets/slides/profile/sweet/slideSweet5.png';
import slideSweet6 from '../../assets/slides/profile/sweet/slideSweet6.png';
import slideSweet7 from '../../assets/slides/profile/sweet/slideSweet7.png';



// import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
class OurProducts extends Component {
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

            {slide: slideRice1, alt: 'slide1'},
            {slide: slideRice2, alt: 'slide2'},
            {slide: slideRice3, alt: 'slide3'},
            {slide: slideRice4, alt: 'slide4'},
            {slide: slideRice5, alt: 'slide5'},
          
          ],
        items: {
            item1: [
            ],
            item2: [
            ],
            item3: [
                {slide: slideSweet1, alt: 'slideSweet1'},
                {slide: slideSweet2, alt: 'slideSweet2'},
                {slide: slideSweet3, alt: 'slideSweet3'},
                {slide: slideSweet4, alt: 'slideSweet4'},
                {slide: slideSweet5, alt: 'slideSweet5'},
                {slide: slideSweet6, alt: 'slideSweet6'},
                {slide: slideSweet7, alt: 'slideSweet7'},
            ],
            item4: [
                {slide: slideOil1, alt: 'slideOil1'},
                {slide: slideOil2, alt: 'slideOil2'},
                {slide: slideOil3, alt: 'slideOil3'},
                {slide: slideOil4, alt: 'slideOil4'},
            ],
            item5: [
                {slide: slidePasta1, alt: 'slidePasta1'},
                {slide: slidePasta2, alt: 'slidePasta2'}
            ],
            item6: [
                {slide: slideRice1, alt: 'slideRice1'},
                {slide: slideRice2, alt: 'slideRice2'},
                {slide: slideRice3, alt: 'slideRice3'},
                {slide: slideRice4, alt: 'slideRice4'},
                {slide: slideRice5, alt: 'slideRice5'},
                {slide: slideRice6, alt: 'slideRice6'},
                {slide: slideRice7, alt: 'slideRice7'},
                {slide: slideRice8, alt: 'slideRice8'},
            ],

        },
        itemSelected : 'item1',
        itemSelectedName : 'الخدمات الاجتماعية',
     
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
                <Backdrop clicked={this.hideBackdropHandler} show={this.state.modalSlides}  showNav={this.state.toggle} />
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
             <main className="OurProducts"  >
             <NavLink to="/ar/about/profile" exact className="ml-4" >
                  <FontAwesomeIcon icon={faArrowAltCircleLeft} size="lg" className="CloseSVG mb-4 ml-4" style={{color: "#FFFFFF"}} />
              </NavLink>
          <div className="OurProductsMain">
            <div className="OurProductsTitle" data-aos="zoom-in-down">
                <h2>نوع من
                    <br />
المنتجات</h2>
                <h1>200</h1>
            </div>
            <div className="ourProductsImg">
                <img src={ourProductsImg} alt="Products" data-aos="fade-up" data-aos-delay="300" />
            </div>
            <Row>
                <Col lg={6}>
                    <div className="ProductsText">
                        <div className="IconTop" data-aos="zoom-in" data-aos-delay="500">
                            <img src={icon1} alt="IconTop" />
                        </div>
                        <div className="IconBottom">
                            <img src={icon2} alt="IconBottom" data-aos="zoom-in" data-aos-delay="700"  />
                        </div>
                        <p data-aos="fade-in" data-aos-delay="1000">
                        نوفر مجموعة واسعة و متنوعة من مختلف المنتجات الغذائية
من الأرز عالي الجودة - و زيوت دوار الشمس و المكرونة
البسكويت و الشكولاتة و غيرها من المنتجات الغذائية.
                        </p>
                        {/* <p data-aos="fade-in" data-aos-delay="1100">
                            <b>الأرز: 12  </b>  نوع بمختلف الأحجام <span>(1 كيلو - 5 كيلو - 9 كيلو - 20 كيلوو 40 كيلو)</span>
                        </p>
                        <p data-aos="fade-in" data-aos-delay="1200">
                            <b>الزيت: 4</b> أنواع من زيت عباد الشمس الصحي
                        </p>
                        <p data-aos="fade-in" data-aos-delay="1300">
                            <b>المكرونة: 2</b> نوع من المكرونة السباجيتي و الهلالية
                        </p>
                        <p data-aos="fade-in" data-aos-delay="1400">
                            <b>الحلويات: أكثر من</b>  نوع من شكولاطة و بسكويت و ووفر..
                        </p> */}
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="ProductsImages">
                        <ul>
                            <li>
                                <img src={img1} alt="image1" data-aos="zoom-in" data-aos-delay="1100" onClick={() => this.openModalSlidesHandler('item3', 'الموظفين')} />
                            </li>
                            <li>
                                <img src={img2} alt="image2" data-aos="zoom-in" data-aos-delay="900" onClick={() => this.openModalSlidesHandler('item4', 'الموظفين')} />
                            </li>
                            <li>
                                <img src={img3} alt="image3" data-aos="zoom-in" data-aos-delay="700" onClick={() => this.openModalSlidesHandler('item5', 'الموظفين')} />
                            </li>
                            <li >
                                <img src={img4} alt="image4" data-aos="zoom-in" data-aos-delay="500" onClick={() => this.openModalSlidesHandler('item6', 'الموظفين')} />
                            </li>
                        </ul>
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


export default OurProducts;