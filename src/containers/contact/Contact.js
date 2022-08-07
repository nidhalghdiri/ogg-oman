import React , {Component} from 'react';
import Aux from '../../hoc/Auxliary';
import Layout from '../layout/Layout'; 
import {NavLink} from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import SideBar from '../../components/sideBar/SideBar';
import Header from '../../components/header/Header';
import logo from '../../assets/Logo1.png';
import Navbar from '../../components/navbar/Navbar';
import FooterSection from '../footer/Footer';
import classes from './Contact.module.css';
import ContactContent from '../../components/contact/Contact';
class Contact extends Component{
    state={
        search: false,
        toggle: false,
    }
    componentDidMount(){
        window.scrollTo(0, 0);
        Aos.init({
          duration : 1000
        })
    }
    searchOpen = () => {
        this.setState({
            search: !this.state.search
        })
    }
    toggleClicked = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }
render(){
    return(

        <Aux>
            <Layout>
            <div className={classes.Contact}>
            <Header search={this.state.search} />
            <main>
                
            <SideBar open={this.state.search} clicked={this.searchOpen} />
            <section className={classes.Navbar}>
                    <div className={classes.Logo} data-aos="fade-down">
                      <NavLink to="/ar" exact><img src={logo} alt="Logo" /></NavLink>  
                    </div>
                    <div className={classes.Toggle} onClick={this.toggleClicked} data-aos="fade-up">
                        <div className={classes.Bar}></div>
                        <div className={classes.Bar}></div>
                        <div className={classes.Bar}></div>
                    </div>
                    
                </section>
                <Navbar show={this.state.toggle} />
            
            <ContactContent />
        
            </main>
            <FooterSection />
            </div>
            </Layout>
        </Aux>
        
    );
}
} 
export default Contact;