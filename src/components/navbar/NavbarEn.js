import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import CSSTransition from "react-transition-group/CSSTransition";
import { Link, animateScroll as scroll } from "react-scroll";
import './NavbarEn.css';
import { HashLink as Lnk } from 'react-router-hash-link';
import {Form, FormControl, Button} from 'react-bootstrap';
import SearchIcon from '../../assets/icons/searchIcon2.png';
import SearchItems from './SearchItems';
// import ToggleButton from '../UI/toggleButton/ToggleButton';
// import { trackWindowScroll } from 'react-lazy-load-image-component';
import sakhaaImg from '../../assets/brands/Sakhaa.png';
import wataniImg from '../../assets/brands/ALwatany.png';
import rakaImg from '../../assets/brands/Raka.png';
import alDaffaImg from '../../assets/brands/AlDaffa.png';
import aLGhassanImg from '../../assets/brands/ALGhassan.png';
import samahaImg from '../../assets/brands/Al-Samaha.png';
import alMounafessImg from '../../assets/brands/AlMounafess.png';
import whiteroseImg from '../../assets/brands/White-Rose.png';
const animationTiming = {
    enter: 300,
    exit: 300
};
class Navbar extends Component {
    state = {
        searchItems : [
            {name: 'سخاء', img: sakhaaImg, url: '/en/sakhaa' },
            {name: 'الوطني', img: wataniImg, url: 'ar/ahlia/6' },
            {name: 'راكا', img: rakaImg, url: '/en/raka' },
            {name: 'الدفة', img: alDaffaImg, url: '/en/ahlia/4' },
            {name: 'الغسان', img: aLGhassanImg, url: '/en/ahlia/5' },
            {name: 'السماحة', img: samahaImg, url: '/en/ahlia/7' },
            {name: 'المنافس', img: alMounafessImg, url: '/en/ahlia/3' },
            {name: 'الوردة البيضاء', img: whiteroseImg, url: '/en/ahlia/1' },
        ],
        searchItem : '',
        searchStart : false
        
    }
    componentDidUpdate(prevProps, prevState) {
        // if (prevProps.show) {
        //   console.log('pokemons state has changed.')
        // }
      }
    scrollToTop = () => {
        scroll.scrollToTop();
      };

    editSearchTerm = (e) => {
        // console.log("edit search");
        this.setState({
            searchItem : e.target.value,
            searchStart: true    
        });
    }
    dynamicSearch = () => {
        // console.log("dynamic search");
        if(this.state.searchItem !== ''){
            return this.state.searchItems.filter(item => item.name.toLowerCase().includes(this.state.searchItem.toLowerCase()));
        }else{
            return [];
        }
        
    }
    render(){
        // const lang = this.props.lang;
        // const navbarItem = {
        //     home : {ar : 'الرئيسية', en: 'Home'}
        // };
        // console.log("Lang = ", navbarItem.home[lang]);
        let liens = (
            <ul> 
                <li><NavLink to="/en" exact style={{color: this.props.color}}>Home</NavLink></li>
                <li><Link
            activeClass="active"
            to="aboutSection"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            style={{
                color: this.props.color
            }}
            onClick={this.props.selected}
          >
            About us
          </Link></li>
                <li>
                       
                         <NavLink to="/en/rice" exact  style={{color: this.props.color}} >Products</NavLink>
                         
                         </li>
                         <li><Link
            activeClass="active"
            to="companiesSection"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            style={{
                color: this.props.color
            }}
            onClick={this.props.selected}
          >Companies 
          </Link></li>
          <li><Link
            activeClass="active"
            to="agenciesSection"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            style={{ 
                color: this.props.color
            }}
            onClick={this.props.selected}
          >Partners  
          </Link></li>
          <li>
          <NavLink to="/en/news" exact  style={{color: this.props.color}} >New</NavLink>
          </li>
          <li><NavLink to="/en/contact" exact style={{color: this.props.color}}>Contact us</NavLink></li>
                {/* <li><NavLink to="/" exact style={{color: this.props.color}}>جديدنا </NavLink></li> */}
                <li>
                <Form inline className="SearchNav">
      <FormControl type="text" placeholder="Search" value={this.state.searchItem} onChange={this.editSearchTerm} className="mr-sm-2 SearchInput" />
            <div>
            <SearchItems items={this.dynamicSearch()} />
            </div>
      <Button variant="outline-success" className="SearchBtn">
          <img src={SearchIcon} alt="search icon" />
      </Button>
    </Form>
                </li>
            </ul>
        );

                if(this.props.lien){
                    liens = (
                        <ul >
                            <li><NavLink to="/en" exact style={{color: this.props.color}}>Home</NavLink></li>
                        <li><Lnk to="/en#aboutSection" style={{color: this.props.color}}>About us</Lnk></li>
             
                    <li><NavLink to="/en/rice" exact  style={{color: this.props.color}} >Products</NavLink></li>
                        
              <li><Lnk to="/en#companiesSection" style={{color: this.props.color}}>Companies </Lnk></li>
              
              <li><Lnk to="/en#agenciesSection" style={{color: this.props.color}}>Partners </Lnk></li>

              <li><Lnk to="/en/news" style={{color: this.props.color}}>New </Lnk></li>
              <li><Lnk to="/en/contact" style={{color: this.props.color}}>Contact us</Lnk></li>
             
                    {/* <li><NavLink to="/" exact style={{color: this.props.color}}>خدماتنا </NavLink></li>
                    <li><NavLink to="/" exact style={{color: this.props.color}}>جديدنا </NavLink></li> */}
                    </ul>
                    )
                }
                
        return (
            <CSSTransition 
            mountOnEnter 
            unmountOnExit 
            in={this.props.show} 
            timeout={animationTiming}
            classNames={{
                enter: '',
                enterActive: 'NavOpen',
                exit: '',
                exitActive: 'NavClosed'
            }}>
                
            <nav className="Nav" >
                
                
                    {liens}
                
    
            </nav>
            </CSSTransition>
        );
    }
} 

export default Navbar;