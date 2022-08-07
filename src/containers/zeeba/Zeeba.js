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
import './Zeeba.css';
import { Row, Col} from 'react-bootstrap';
import brand from '../../assets/agencies/zeeba.png';
import country from '../../assets/lalCountry.jpg';
import prod1 from '../../assets/zeeba/prod1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { HashLink  } from 'react-router-hash-link';
class Zeeba extends Component {
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
                        <img src={brand} alt={altImage} style={{width: "30%"}} />
                    </div>
                </Col>
            </Row>
           </div>
           <div className="AhliaProducts">
            <div className="BrandDescription">
                <p>
                بسمتي هي واحدة من أجود أنواع الأرز في جميع أنحاء العالم. تقع في سفوح جبال الهيمالايا ، ومن المعروف أنها موضحة جغرافيًا مما يجعلها فريدة من نوعها لمذاقها الخاص وخصائص الطهي. يحظى بإعجاب بفضل نسبه ورائحته من قبل خبراء الطعام في جميع أنحاء العالم ؛ تشتهر بسمتي بأنها "ملكة العطور".

                </p>
                <p>
                كلمة بسمتي تعني "العطرة" في اللغة الهندية. عند طهيها ، تقدم بسمتي حبيبات بيضاء ومنفصلة ورقيقة بشكل لا لبس فيه تمتد إلى أكثر من ضعف طولها الأصلي ، وتطلق رائحة فريدة من نوعها.

                </p>

                <p>
                على الرغم من كل نقاط القوة في الطهي ، إلا أن البسمتي محصول يصعب نموه. يمكن زراعته فقط في ظروف التربة عند سفوح جبال الهيمالايا ، حيث تتغذى بمياه الجبال العذبة. جودة محصول البسمتي تعتمد بشكل كبير على الطقس.

                </p>

                <p>
                شركة Supple Tek Industries الجندي. Ltd في قلب ولاية البنجاب ، وهي ولاية معروفة باسم Rice Bowl of Northern India هي مؤسسة مزدهرة توجت باسم "أكبر مصدر لأرز البسمتي" من قبل APEDA و FIEO منذ عام 2014 على التوالي.
 </p>
 <p>
 كشركة ندفع فيها قدرًا كبيرًا من الدقة للجودة ، فإن تركيزنا ومسؤوليتنا تجاه استدامة البيئة لا يتخلفان كثيرًا. إنه مسعانا للحفاظ على منهجيتنا وفية لجذورها.

 </p>
 <p>
 يُزرع الأرز البسمتي في الهند في ولايات J&K وهيماشال براديش والبنجاب وهاريانا ودلهي وأوتاراخاند وغرب أوتار براديش.

 </p>
 <p>
 يتم تصدير أرز بسمتي الهندي بشكل رئيسي في وجهات مثل الشرق الأوسط وأوروبا والولايات المتحدة إلخ.
 </p>
                
            </div>
            <div className="ProductsList">
                <ul>
                    <li style={{width: "30%"}}>
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


export default Zeeba;