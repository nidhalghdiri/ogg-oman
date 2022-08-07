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
import './OurProfile.css';
import { Row, Col} from 'react-bootstrap';
// import icon from '../../assets/icons/howWeAre.png';
import slide1 from '../../assets/slides/profile/slide1.jpeg';
import slide2 from '../../assets/slides/profile/slide2.jpeg';
import slide3 from '../../assets/slides/profile/slide3.jpeg';
import slide4 from '../../assets/slides/profile/slide4.jpeg';
import slide5 from '../../assets/slides/profile/slide5.jpeg';
import slide6 from '../../assets/slides/profile/slide6.jpeg';
import slide7 from '../../assets/slides/profile/slide7.jpeg';
import slide8 from '../../assets/slides/profile/slide8.jpeg';
import slide9 from '../../assets/slides/profile/slide9.jpeg';
import slide10 from '../../assets/slides/profile/slide10.jpeg';
import slide11 from '../../assets/slides/profile/slide11.jpeg';
import slide12 from '../../assets/slides/profile/slide12.jpeg';
// import BG from '../../assets/profileBG.jpg';
// import item1 from '../../assets/profileIcons/item1.png';
import item2 from '../../assets/profileIcons/item2.png';
import item3 from '../../assets/profileIcons/item3.png';
import item4 from '../../assets/profileIcons/item4.png';
import item5 from '../../assets/profileIcons/item5.png';
import item6 from '../../assets/profileIcons/item6.png';
import img1 from '../../assets/profile/img1.png';
import img2 from '../../assets/profile/img2.png';
import img3 from '../../assets/profile/img3.png';
import img4 from '../../assets/profile/img4.png';
import img5 from '../../assets/profile/img5.png';
// import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
class OurProfile extends Component {
    state = {
        search: false,
        toggle: false,
        navDrop: false,
        widthPort: window.innerWidth,
        modal: false,
        modalCompany: false,
        modalProduct: false,
        modalSlides: false,
  
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
            {slide: slide9, alt: 'slide9'},
            {slide: slide10, alt: 'slide10'},
            {slide: slide11, alt: 'slide11'},
            {slide: slide12, alt: 'slide12'},
          
          ],
        items: {
            item1: [
                {slide: slide4, alt: 'slide4'}, 
            ],
            item2: [
                {slide: slide7, alt: 'slide7'},
                {slide: slide8, alt: 'slide8'},
                {slide: slide9, alt: 'slide9'},
                {slide: slide10, alt: 'slide10'},
                {slide: slide11, alt: 'slide11'},
            ],
            item3: [
                {slide: slide11, alt: 'slide12'},
            ],
            item4: [
                {slide: slide3, alt: 'slide3'},
                {slide: slide2, alt: 'slide2'},
            ],
            item5: [
                {slide: slide7, alt: 'slide7'},
                {slide: slide8, alt: 'slide8'},
                {slide: slide9, alt: 'slide9'},
                {slide: slide10, alt: 'slide10'},
                {slide: slide11, alt: 'slide11'},
            ],
            item6: [
                {slide: slide1, alt: 'slide1'},
                {slide: slide5, alt: 'slide5'},
                {slide: slide6, alt: 'slide6'},
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
        // var settings = {
        //     dots: false,
        //     autoplay: true,
        // autoplaySpeed: 3000,
        //     infinite: true,
        //     speed: 1000,
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
          //   nextArrow: <SampleNextArrow />,
          // prevArrow: <SamplePrevArrow />
        //   };
    //    let altImage = "Our Message";
    //    let slides = this.state.slides.map((img, index) => {
    //     return (
    //         <div key={index}>
    //     <img src={img.slide} alt={img.alt} style={{width: "60%", margin: "0 auto"}}/>
    //         </div>
    //     );
    //    });
    console.log(this.state.items['item1']);
    console.log(this.state.itemSelected);
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
             <main className="OurProfile" >
             <NavLink to="/ar" exact className="ml-4" >
                  <FontAwesomeIcon icon={faTimesCircle} size="lg" className="CloseSVG mb-4 ml-4" style={{color: "#FFFFFF"}} />
              </NavLink>
           <div className="OurProfileMain">
           <div className="Slides">
                        {/* <Slider {...settings}>

                            {slides}
         
         
                          </Slider> */}
                        </div>
           <Row>
                
                <Col lg={12} style={{direction : "rtl"}}>
                    <div className="OurProfileContent">
                        <h1 data-aos="zoom-in-down" >نبذة عنا</h1>
                        
                        <p data-aos="fade-up" data-aos-delay="500">
                        تندرج تحت إسم مجموعة العالمية الشاملة مجموعة من الشركات و المؤسسات في اليمن و سلطنة عمان  و تنطلق من مقرها المتميز في المنطقة الحرة بصلالة في سلطنة عمان و والذي يتميز بموقع جغرافي وتجاري محفز وجذاب يتوسط الأسواق الخليجية واليمنية والافريقية وباقي الأسواق العالمية بحيث تنشط في عدة مجالات تجارية وصناعية وتعليمية لتوفر لعملائها مجموعة واسعه من المنتجات والخدمات والعلامات التجارية الموثوقه التي تلبي تطلعات العملاء والمستهلكين في الاسواق المستهدفة وذلك من خلال فريق عمل كفؤ وفعال يقدم خدمات وأداء مؤسسي مميز ومنظم وحديث لضمان إستدامتها مرتكزة على التطوير المستمر والبحث والابتكار لتساهم في دعم المجتمع والاقتصاد الوطني وتعزيز الامن الغذائي وسعادة ورفاه المجتمع .
                        </p>
                    </div>
                    <div className="ProfileImages">
                        <ul>
                            <li className="Imgs" >
                                <NavLink className="Profile_Item_Link" exact to="/ar/products">
                                <img src={img1} alt="img1" data-aos="zoom-in" data-aos-delay="700" />
                                </NavLink>
                            </li>
                            <li className="Imgs" >
                                <NavLink className="Profile_Item_Link" exact to="/ar/origins">
                                <img src={img2} alt="img2" data-aos="zoom-in" data-aos-delay="900" />
                                </NavLink>
                            </li>
                            <li className="Imgs" >
                            <NavLink className="Profile_Item_Link" exact to="/ar/trucks">
                                <img src={img3} alt="img3" data-aos="zoom-in" data-aos-delay="1100"  />
                                </NavLink>
                            </li>
                            <li className="Imgs" >
                                <NavLink className="Profile_Item_Link" exact to="/ar/stores">
                                <img src={img4} alt="img4" data-aos="zoom-in" data-aos-delay="1300" />
                                </NavLink>
                            </li>
                            <li className="Imgs" >
                            <NavLink className="Profile_Item_Link" exact to="/ar/employees">
                                <img src={img5} alt="img5" data-aos="zoom-in" data-aos-delay="1500" />
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="ProfileImages">
                        <ul className="Profile_items">
                            <li className="Items">
                            <NavLink className="Profile_Item_Link" exact to="/ar/products">
                            <div className="Profile_Item" >
                                    <img src={item2} alt="Profile Icon" />
                                    <span >المنتجات</span>
                                </div>
                            </NavLink>
                                <ul>
                                    <li>تتعامل شركة  العالمية </li>
                                    <li>مع أكثر من</li>
                                    <li>20 سوبرماركت</li>
                                    <li>50 مطعم</li>
                                    <li>100 تجار جملة</li>
                                    <li>120 سوبرات</li>
                                </ul>
                            </li>
                            <li className="Items">
                            <NavLink className="Profile_Item_Link" exact to="/ar/origins">
                                <div className="Profile_Item" >
                                    <img src={item3} alt="Profile Icon" />
                                    <span >الأصول</span>
                                </div>
                                </NavLink>
                                <ul>
                                    <li>بالإضافة إلى مجال التجارة</li>
                                    <li>تشمل أنشطتنا </li>
                                    <li><b>- المجلات الاجتماعية : </b></li>
                                    <li>
                                        <NavLink exact to="/ar/charity" >
                                        جمعية سخاد الخيرية
                                        </NavLink>
                                        </li>
                                    <li><b>- المجلات التعليمية :</b></li>
                                    <li>مدرسة الاإبداع العلمي</li>
                                </ul>
                            </li>
                            <li className="Items">
                            <NavLink className="Profile_Item_Link" exact to="/ar/trucks">
                            <div className="Profile_Item" >
                                    <img src={item4} alt="Profile Icon" />
                                    <span >السيارات</span>
                                </div>
                                </NavLink>
                                <ul>
                                    <li>أكثر من 40 سيارت جديدة</li>
                                    <li>مخصصة لنقل و توفير </li>
                                    <li>مستحقات عملائنا</li>
                                    <li>الذين يتوزعون على كامل ولاية اليمن</li>
                                </ul>
                            </li>
                            <li className="Items">
                            <NavLink className="Profile_Item_Link" exact to="/ar/stores">
                            <div className="Profile_Item" >
                                    <img src={item5} alt="Profile Icon" />
                                    <span >المخازن</span>
                                </div>
                                </NavLink>
                                <ul>
                                    <li>تتوفر ادينا 20 مخازن</li>
                                    <li> بمساحة 8000 متر مربع</li>
                                    <li>تتوفر فيها</li>
                                    <li>كل شروط السلامة و الصحة</li>
                                </ul>
                            </li>
                            <li className="Items">
                            <NavLink className="Profile_Item_Link" exact to="/ar/employees">
                                <div className="Profile_Item" >
                                    <img src={item6} alt="Profile Icon" />
                                    <span >الموظفين</span>
                                </div>
                                </NavLink>
                                <ul>
                                    <li>أكثر من 150 موظف</li>
                                    <li> يتوزعون على 5 محافضات</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </Col>
                {/* <Col lg={4}>
                    <div className="OurProfileImg">
                        <img src={icon} alt={altImage} />
                    </div>
                </Col> */}
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


export default OurProfile;