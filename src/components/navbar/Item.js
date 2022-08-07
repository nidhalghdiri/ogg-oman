import React, {Component} from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';
class Item extends Component {
    render(){
        return (
        <li>
            <NavLink to={this.props.item.url} exact >
            <img src={this.props.item.img} alt={this.props.item.name} />
            <span>{this.props.item.name}</span>
            </NavLink>
        </li>
        );
    }
}

export default Item;
