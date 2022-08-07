import React from 'react';
import CSSTransition from "react-transition-group/CSSTransition";
import  './Search.css';
import searchIcon from '../../../assets/icons/searchIcon.png';
const animationTiming = {
    enter: 400,
    exit: 400
};
const search = (props) => {
    return(
        <CSSTransition 
        mountOnEnter 
        unmountOnExit 
        in={props.show} 
        timeout={animationTiming}
        classNames={{
            enter: '',
            enterActive: 'SearchOpen',
            exit: '',
            exitActive: 'SearchClosed'
        }}>
        <div className="Search">
            <input type="text" />
            <button className="btn"><img src={searchIcon} alt="search"  />Search</button>
        </div>
        </CSSTransition>
        
    );
}

export default search;