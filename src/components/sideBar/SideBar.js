import React , {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './SideBar.css';
import search from '../../assets/icons/searchIcon.png';
import mail from '../../assets/icons/emailIcon.png';
import home from '../../assets/icons/homeIcon.png';
class SideBar extends Component {

    render(){
    
        let itemClass = ["Items"];
        if(this.props.open){
            itemClass.push("ItemsOpen");
            itemClass.splice(0,1);
        }
      
        let clas = itemClass.join(" ");
        
        return (
            <div className="SideBar">
                <ul className={clas}>
                <li className="Item" onClick={this.props.clicked}>
                        <img src={search} alt="icon1" />
                        <span>البحث</span>
                    </li>
                    <li className="Item">
                        <NavLink to="/ar/contact" exact ><img src={mail} alt="icon2" /><span>تواصل معنا</span></NavLink>
                        
                    </li>
                    <li className="Item">
                        <NavLink to="/ar" exact><img src={home} alt="icon3" />
                        <span>الرئيسية</span></NavLink>
                    </li>
                </ul>

            </div>
        );
    }
}

export default SideBar;