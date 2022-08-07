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
import '../ahlia/AhliaEn.css';
import { Row, Col} from 'react-bootstrap';
import imgAlia from '../../assets/sakhaaLogo.png';
import pastaProducts from '../../assets/products/pastaProd.png';
import cook from '../../assets/cookPasta.png';
// import waferAlia from '../../assets/products/waferAlia.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowAltCircleLeft, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
class SakhaaPastaEn extends Component {
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
        const lang = "en";
        if(this.props.location.previous === undefined){
            this.props.location.previous = { name: "home"}; 
        }
        if(this.props.location.previous.name === 'sakhaa'){
            backLink = (<NavLink to="/en/sakhaa" exact>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} size="lg" className="CloseSVG" style={{color: "#222222"}}  />
                </NavLink>);
        }else if(this.props.location.previous.name === 'alia'){
            backLink = (<NavLink to="/en/alia" exact>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} size="lg" className="CloseSVG"  style={{color: "#222222"}} />
                </NavLink>);
        }else{
            backLink = (<NavLink to="/en" exact>
            <FontAwesomeIcon icon={faTimesCircle} size="lg" className="CloseSVG" style={{color: "#222222"}}  />
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
                   <NavLink to="/en" exact><img src={logo} alt="Logo" /></NavLink>  
                 </div>
                
                 
            
                 
             </section>
             <NavbarEn show={this.state.widthPort > 768 ? true : this.state.toggle} lien={false} lang={lang} selected={this.navItemSelected} />
             <main className="Product">
             <div className="BackVideoBtnRice">
                 {backLink}
                </div>
                <Row>
                    <Col lg={5}>
                    <div className="ProductBrand">
                          <img src={imgAlia} alt={altImage} />
                          </div>
                    <div className="ProductHeader">
                          <p>
                            <b>Sakha Pasta </b>
                            is produced from the finest types of durum wheat in the world and is processed in one of the largest and most famous pasta processing factories in the world. We offer it to you with love to become a major part of your meal .... pasta industry experts.
                             </p>
                        </div>
                        <div className="ProductHeader" style={{marginTop : "4rem"}}>
                            <img src={cook} alt="cook" style={{width: "30%", left : "85%", top: "-15%"}}/>
                        <p>
                            <b>Cooking Method</b><br/>
                            Put the pasta in a cooking pot, cover it with water, then put it on a medium heat to boil. In another cooking pot, add a little vegetable oil and onions, and fry the onions over a medium heat until their color changes to golden brown. Then add the chopped capsicum to the onions, and also add tomato paste, cumin, coriander, salt, curry, black pepper and mix them well. After that add the filtered pasta to the resulting mixture, stir well, and then put it on a serving plate ready to be eaten. 
                            </p>
                        </div>
                    </Col>
                    <Col lg={7}>
                        <div className="ProductImage">
                        <img src={pastaProducts} alt={altImage} />
                        </div>
                    </Col>
                </Row>
               
           <FooterEn />
         </main>
                </div>
            
      
            </Layout>
         
     </Aux>
      );
    }
}


export default SakhaaPastaEn;