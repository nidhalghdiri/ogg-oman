import React , {Component} from 'react';
import Layout from './layout/Layout';
import {NavLink} from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import classes from './Home.module.css';
import Aux from '../hoc/Auxliary';
import SideBar from '../components/sideBar/SideBar';
import Header from '../components/header/Header';
import logo from '../assets/logo.png';
import NavbarEn from '../components/navbar/NavbarEn';
import Slider from '../components/slider/Slider';

import AboutContent from '../components/about/AboutContent';
import Brands from '../components/brands/Brands';
import Backdrop from '../components/backdrop/Backdrop';
import FooterSection from './footer/FooterEn';
import Companies from '../components/companies/Companies';

import ahlia from '../assets/companies/ahlia.png';
import alia from '../assets/companies/alia.png';
import oufuq from '../assets/companies/oufuq.png';
import icon1 from '../assets/icons/paraIcon1.svg';
import icon2 from '../assets/icons/paraIcon2.svg';
import icon3 from '../assets/icons/paraIcon3.svg';
import ModalCompany from '../components/modal/ModalCompany';

import kap from '../assets/agencies/kapnena.png';
import col from '../assets/agencies/COLIAN.png';
import casa from '../assets/agencies/LACASA.png';
import bau from '../assets/agencies/Bauducco.png';
import lal from '../assets/agencies/LALQUILA.png';
import zeeba from '../assets/agencies/zeeba.png';
import mutlu from '../assets/agencies/mutlu.png';
import Sunar from '../assets/agencies/sunar.png';
import ModalAgency from '../components/modal/ModalAgency';
import ModalRice from '../components/modal/ModalRice';


/* Brands Images */

import sakhaa from '../assets/brands/Sakhaa.png';
import dafa from '../assets/brands/AlDaffa.png';
import ghassen from '../assets/brands/ALGhassan.png';
import samaha from '../assets/brands/Al-Samaha.png';
import mounafes from '../assets/brands/AlMounafess.png';
import raka from '../assets/brands/Raka.png';
import whiteRose from '../assets/brands/White-Rose.png';
import watani from '../assets/brands/ALwatany.png';


/*  ahlia Products */

import dafaIcon from '../assets/icons/products/icon1.png';
import ghassenIcon from '../assets/icons/products/icon2.png';
import monafessIcon from '../assets/icons/products/icon3.png';
import samahaIcon from '../assets/icons/products/icon4.png';
import sakhaaIcon from '../assets/icons/products/icon5.png';
import whiteIcon from '../assets/icons/products/icon6.png';

/*  oufuq Products */

import brand1 from '../assets/companies/aofuqBrands/brand1.png';
import brand2 from '../assets/companies/aofuqBrands/brand2.png';
import brand3 from '../assets/companies/aofuqBrands/brand3.png';
import brand4 from '../assets/companies/aofuqBrands/brand4.png';
import brand5 from '../assets/companies/aofuqBrands/brand5.png';
import brand6 from '../assets/companies/aofuqBrands/brand6.png';
import brand7 from '../assets/companies/aofuqBrands/brand7.png';
import brand8 from '../assets/companies/aofuqBrands/brand8.png';
import brand9 from '../assets/companies/aofuqBrands/brand9.png';
import brand10 from '../assets/companies/aofuqBrands/brand10.png';
import brand11 from '../assets/companies/aofuqBrands/brand11.png';
import brand12 from '../assets/companies/aofuqBrands/brand12.png';
import brand13 from '../assets/companies/aofuqBrands/brand13.png';
import brand14 from '../assets/companies/aofuqBrands/brand14.png';
import brand15 from '../assets/companies/aofuqBrands/brand15.png';
import brand16 from '../assets/companies/aofuqBrands/brand16.png';
import brand17 from '../assets/companies/aofuqBrands/brand17.png';


import ToggleButton from '../components/UI/toggleButton/ToggleButton';
import aboutImg1 from '../assets/icons/ourMsg.png';
import aboutImg2 from '../assets/icons/ourHistory.png';
import aboutImg3 from '../assets/icons/howWeAre.png';


import riceMonafes from '../assets/products/riceMonafes.png';
import riceSakhaa from '../assets/products/riceSakhaa.png';
import riceWhite from '../assets/products/riceWhite.png';
import riceWatani from '../assets/products/riceWatani.png';
import riceGhassen from '../assets/products/riceGhassen.png';
import riceDafa from '../assets/products/riceDafa.png';

import riceMonafesContent from '../assets/products/riceMonafesContent.png';
import riceSakhaaContent from '../assets/products/riceSakhaaContent.png';
import riceWataniContent from '../assets/products/riceWataniContent.png';
import riceGhassenContent from '../assets/products/riceGhassenContent.png';
import riceDafaaContent from '../assets/products/riceDafaaContent.png';


import ModalAgencies from '../components/modal/ModalAgencies';
import AgenciesEn from '../components/agencies/AgenciesEn';
class Home extends Component {
    state = {
        search: false,
        toggle: false,
        navDrop: false,
        widthPort: window.innerWidth,
        modal: false,
        modalCompany: false,
        modalProduct: false,
        modalItems: [
            {id: 0, name: 'About us',
            icon : aboutImg3 ,
            url: "/en/about/profile",
            sousContent: 'The Overall Global Group is a large company; it is active in several fields...' ,
             content: "المؤسسة العالمية الشاملة  لاستيراد المواد الغذائية, إحدى المؤسسات الرائدة في اليمن, بدات نشاطها كمؤسسة تجارية عائلية منذ 30 عاماً.واستطاعت بتوفيق من المولى عز وجل وبجهود أبنائها في خلق موقع استراتيجي متميز في أذهان المتعاملين معها خلال التطوير المستمر لكوادرها البشرية ومنتجاتها واستغلال مواردها بكفاءة وفاعلية ونمو متواصل. وتتميز منتجاتها بالجودة, وهدماتها بالكفاءة العالية, حيث يتركز نشاطها التجاري محليا وإقليميا في بعض دول الخليح والمملكة المتحدة والهند وتايلاند وباكستان والبرازيل وماليزيا واندونيسيا ومصر وسيريلانكا وغيرها من دول العالم."},
             {id: 1, name: 'Experience for More Than 30 Years',
             icon: aboutImg2,
             url: "/en/about/history",
              sousContent: 'The Overall Global Group (OGG) is a success story that it started more than thirty-two years ago...' , content: ` العالمية الشاملة شركة كبير تنشط في مجالات عدة لعلى أهمها  المواد الغذائية ، حيث تظم الشركة مجموعة شركات و مؤسسات ذات صبغة تجارية و إجتماعية تتفوزع على مناطق من اليمن و سلطنة عمان لعلى أهمه  مؤسسة العالمية الشاملة  لاستيراد المواد الغذائية, شركة العليا  و الأفق الواضح و جمعية سخاء الخيرية.
             كل هذه الشركات و المؤسسات بتوفيق من المولى عز وجل وبجهود أبنائها تعتبر من المؤسسات الرائدة في اليمن. 
             تمكنا من خلق موقع استراتيجي متميز في أذهان المتعاملين معها خلال التطوير المستمر للكوادر البشرية والمنتجات واستغلال مواردها بكفاءة وفاعلية ونمو متواصل.
             تتميز منتجاتنا بالجودة, وهدماتها بالكفاءة العالية, حيث يتركز نشاطها التجاري محليا وإقليميا في بعض دول الخليح والمملكة المتحدة والهند وتايلاند وباكستان والبرازيل وماليزيا واندونيسيا ومصر وسيريلانكا وغيرها من دول العالم.
             `},
             {id: 2, name: ' Our Vision',
             icon: aboutImg1,
             url: "/en/about/message",
              sousContent: 'We work to establish the quality of our products through a selection of highly qualified experts...' , content: "We work to establish the quality of our products through a selection of highly qualified experts. We seek leadership and inspiration, locally and regionally, to help in the growth and well-being of our societies."}
            
        
        ],
        modalSelected: 0,
        modalCompanySelected: 0,
        companies : [
            {id: 0, name: 'الأفق', img: oufuq, iconName: 'icon3', icon: icon3, url : "/en/oufuq", brands: [
                brand1,brand2,brand3,brand4,brand5,brand6,brand7,brand8,brand9,brand10,brand11,brand12,brand13,
                brand14,brand15,brand16,brand17,
                
            ],
            products : [
                {id: 0, name: "Monafes" , icon : riceMonafes, content: riceMonafesContent},
                {id: 1, name: "Sakhaa" , icon : riceSakhaa, content: riceSakhaaContent},
                {id: 2, name: "White Rose" , icon : riceWhite, content: riceMonafesContent},
                {id: 3, name: "Watani" , icon : riceWatani, content: riceWataniContent},
                {id: 4, name: "Ghassen" , icon : riceGhassen, content: riceGhassenContent},
                {id: 5, name: "Dafaa" , icon : riceDafa, content: riceDafaaContent},

            ]  },
            {id: 1, name: 'العليا', img: alia, iconName: 'icon2', icon: icon2 , url : "/en/alia",
            products : [
                {id: 0, name: "Monafes" , icon : riceMonafes, content: riceMonafesContent},
                {id: 1, name: "Sakhaa" , icon : riceSakhaa, content: riceSakhaaContent},
                {id: 2, name: "White Rose" , icon : riceWhite, content: riceMonafesContent},
                {id: 3, name: "Watani" , icon : riceWatani, content: riceWataniContent},
                {id: 4, name: "Ghassen" , icon : riceGhassen, content: riceGhassenContent},
                {id: 5, name: "Dafaa" , icon : riceDafa, content: riceDafaaContent},

            ] },
            {id: 2, name: 'الأهلية', img: ahlia, iconName: 'icon1', icon: icon1, url : "/en/ahlia", 
                products : [
                    {id: 0, name: "Monafes" , icon : riceMonafes, content: riceMonafesContent},
                    {id: 1, name: "Sakhaa" , icon : riceSakhaa, content: riceSakhaaContent},
                    {id: 2, name: "White Rose" , icon : riceWhite, content: riceMonafesContent},
                    {id: 3, name: "Watani" , icon : riceWatani, content: riceWataniContent},
                    {id: 4, name: "Ghassen" , icon : riceGhassen, content: riceGhassenContent},
                    {id: 5, name: "Dafaa" , icon : riceDafa, content: riceDafaaContent},

                ]  },
            {id: 3, name: 'العالمية الشاملة للتجارة العامة', img: logo, iconName: 'icon1', icon: icon1, url : "/en", 
                products : [
                    {id: 0, name: "Monafes" , icon : riceMonafes, content: riceMonafesContent},
                    {id: 1, name: "Sakhaa" , icon : riceSakhaa, content: riceSakhaaContent},
                    {id: 2, name: "White Rose" , icon : riceWhite, content: riceMonafesContent},
                    {id: 3, name: "Watani" , icon : riceWatani, content: riceWataniContent},
                    {id: 4, name: "Ghassen" , icon : riceGhassen, content: riceGhassenContent},
                    {id: 5, name: "Dafaa" , icon : riceDafa, content: riceDafaaContent},

                ]  },
        ],
        companyProduct : false,
        companyProductSelected : 0,
        agencies : [
            {id: 0, name:"kap", img: kap, class: "Cap", url : "/en/kapnera"},
            {id: 1, name:"col", img:col, class: "Col", url : "/ar/colian"},
            {id: 2, name:"casa", img:casa, class: "Casa", url : "/ar/lacasa"},
            {id: 3, name:"bau", img:bau, class: "Bau", url : "/ar/bauducco"},
            {id: 4, name:"lal", img:lal, class: "Lal", url : "/ar/lalqilla"},
            {id: 5, name:"zeeba", img:zeeba, class: "Zeeba", url : "/ar/zeeba"},
            {id: 6, name:"mutlu", img:mutlu, class: "Mutlu", url : "/ar/mutlu"},
            {id: 7, name:"sunar", img:Sunar, class: "Sunar", url : "/ar/sunar"},

        ],
        modalAgencySelected: 0,
        modalAgency: false,

        brands: [
            {id:0, name: 'سخاء', img: sakhaa, icon: sakhaaIcon, url: "/en/sakhaa"  },
            {id:1, name: 'الوردة البيضاء', img: whiteRose , icon: whiteIcon, url: "/en/ahlia/1" },
            {id:2, name: 'الدفة ', img: dafa, icon: dafaIcon, url: "/en/ahlia/4"   },
            {id:3, name: 'الغسان ', img: ghassen , icon : ghassenIcon, url: "/en/ahlia/5" },
            {id:4, name: 'السماحة ', img: samaha , icon: samahaIcon, url: "/en/ahlia/7" },
            // {id:5, name: 'الأنسام ', img: ansam , icon: null, video: sakhaaVideo, url: "/ar" },
            {id:6, name: 'المنافس ', img: mounafes , icon: monafessIcon, url: "/en/ahlia/3" },
            {id:7, name: 'الرقة ', img: raka , icon: null, url: "/en/raka" },
            {id:8, name: 'الوطني ', img: watani , icon: null, url: "/en/ahlia/6" },
        ],
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
            // modalCompany: false,
            modalProduct: false,
            companyProduct: false,
            // companyProductSelected: 0,
            modalCompany: true
          
        });
      }
    render () {
        const lang = "en";
        return(
            <Aux>
               <Layout>
               <Backdrop clicked={this.hideBackdropHandler} show={this.state.modal} show2={this.state.modalCompany} show3={this.state.modalAgency} show4={this.state.modalProduct} show5={this.state.companyProduct} showNav={this.state.toggle} />
               {/* <Modal show={this.state.modal} item={this.state.modalItems[this.state.modalSelected]} brands={this.state.brands} hide={this.hideBackdropHandler} back={this.onBackToMain} /> */}
               <ModalAgencies show={this.state.modalAgencies} 
               agencies={this.state.agencies} 
                 hide={this.hideBackdropHandler}
                  />
               
               <ModalCompany 
               riceClicked={this.openModalRiceHandler} 
               roseClicked={this.onClickRoseHandler} brands={this.state.brands} clicked={this.hideBackdropHandler} show={this.state.modalCompany} item={this.state.companies[this.state.modalCompanySelected]} clickedItem={this.openModalProductHandler} logos={this.state.companies[this.state.modalCompanySelected].brands} />
               <ModalAgency show={this.state.modalAgency} item={this.state.agencies[this.state.modalAgencySelected]} />
                <ModalRice 
                
                             show={this.state.companyProduct} 
                             
                             company={this.state.companies[this.state.modalCompanySelected]}
                             rice ={this.state.companies[this.state.modalCompanySelected].products[this.state.companyProductSelected]}
                             hide={this.hideBackdropHandler}
                             showBack={this.state.modal} showBack2={this.state.modalCompany} showBack3={this.state.modalAgency} showBack4={this.state.modalProduct} 
                             sakhaaProduct={this.state.sakhaaProduct}
                               backMain={this.onBackToCompanies} />
                
                <div className={classes.Home}>
                <Header search={this.state.search} />
                <main>
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
                
                <Slider />
                <AboutContent lang={lang}  clicked={this.openModalHandler} items={this.state.modalItems} id="aboutSection" />
                <Companies clicked={this.openModalCompanyHandler} companies={this.state.companies} id="companiesSection"/>
                <Brands brands={this.state.brands} clicked={this.openModalProductHandler} />
               {/* <Contact /> */}

               <AgenciesEn open={this.openModalAgenciesHandler}  clicked={this.openModalAgencyHandler} agencies={this.state.agencies} id="agenciesSection" />
                </main>
                <FooterSection />
                
                </div>
               </Layout>
                
            </Aux>
        );
    }
}

export default Home;