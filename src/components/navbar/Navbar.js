import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import CSSTransition from "react-transition-group/CSSTransition";
import { Link, animateScroll as scroll } from "react-scroll";
import './Navbar.css';
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
            {name: 'سخاء', img: sakhaaImg, url: '/ar/sakhaa' },
            {name: 'الوطني', img: wataniImg, url: 'ar/ahlia/6' },
            {name: 'راكا', img: rakaImg, url: '/ar/raka' },
            {name: 'الدفة', img: alDaffaImg, url: '/ar/ahlia/4' },
            {name: 'الغسان', img: aLGhassanImg, url: '/ar/ahlia/5' },
            {name: 'السماحة', img: samahaImg, url: '/ar/ahlia/7' },
            {name: 'المنافس', img: alMounafessImg, url: '/ar/ahlia/3' },
            {name: 'الوردة البيضاء', img: whiteroseImg, url: '/ar/ahlia/1' },
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
                <li><NavLink to="/ar" exact style={{color: this.props.color}}>الرئيسية</NavLink></li>
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
            من نحن 
          </Link></li>
                <li>
                       
                         <NavLink to="/ar/rice" exact  style={{color: this.props.color}} >منتجاتنا</NavLink>
                         
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
          >شركاتنا 
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
          >شركاؤنا 
          </Link></li>
          <li>
          <NavLink to="/ar/news" exact  style={{color: this.props.color}} >جديدنا</NavLink>
          </li>
          <li><NavLink to="/ar/contact" exact style={{color: this.props.color}}>اتصل بنا</NavLink></li>
                {/* <li><NavLink to="/" exact style={{color: this.props.color}}>جديدنا </NavLink></li> */}
                <li>
                <Form inline className="SearchNav">
      <FormControl type="text" placeholder="البحث" value={this.state.searchItem} onChange={this.editSearchTerm} className="mr-sm-2 SearchInput" />
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
                            <li><NavLink to="/ar" exact style={{color: this.props.color}}>الرئيسية</NavLink></li>
                        <li><Lnk to="/ar#aboutSection" style={{color: this.props.color}}> من نحن </Lnk></li>
             
                    <li><NavLink to="/ar/rice" exact  style={{color: this.props.color}} >منتجاتنا</NavLink></li>
                        
              <li><Lnk to="/ar#companiesSection" style={{color: this.props.color}}>شركاتنا </Lnk></li>
              
              <li><Lnk to="/ar#agenciesSection" style={{color: this.props.color}}>شركاؤنا </Lnk></li>

              <li><Lnk to="/ar/news" style={{color: this.props.color}}>جديدنا </Lnk></li>
              <li><Lnk to="/ar/contact" style={{color: this.props.color}}>اتصل بنا </Lnk></li>
             
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
                
            <nav className="NavAr" >
                
                
                    {liens}
                
    
            </nav>
            </CSSTransition>
        );
    }
} 

export default Navbar;