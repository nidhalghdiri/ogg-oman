import React from 'react';
import CSSTransition from "react-transition-group/CSSTransition";
import classes from './Backdrop.module.css';
const animationTiming = {
    enter: 300,
    exit:300
};
const backdrop = (props) => (
    <CSSTransition 
    mountOnEnter 
    unmountOnExit 
    in={props.show || props.showNav} 
    timeout={animationTiming}
    classNames={{
        enter: '',
        enterActive: 'BackdropOpen',
        exit: '',
        exitActive: 'BackdropClosed'
    }}>
    {props.product? (<div className={classes.Backdrop} onClick={props.clicked} style={{background: 'none'}}>
        <div className={classes.Main}>
          
        </div>
    </div>
    ): <div className={classes.Backdrop} onClick={props.clicked}>
        <div className={classes.Main}>
            {/* <div onClick={props.clicked}className={classes.Close}>
                    <div className={classes.Bar} style={{transform: 'rotate(45deg)'}}></div>
                    <div className={classes.Bar} style={{transform: 'rotate(-45deg)'}}></div>
            </div> */}
        </div>
    </div>}
    </CSSTransition>
);

export default backdrop;