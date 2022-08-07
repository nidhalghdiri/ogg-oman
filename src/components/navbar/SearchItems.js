import React, {Component} from 'react';
import './Navbar.css';
import Item from './Item';
class SearchItems extends Component {
    render(){
        return (
        <ul className="SearchItems">
            {this.props.items.map((item,index) => <Item  key={index} item={item} />)}
        </ul>
        );
    }
}

export default SearchItems;
