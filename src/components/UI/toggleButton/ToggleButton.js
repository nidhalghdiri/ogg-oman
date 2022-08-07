import React, {Component} from 'react';
// import classes from './ToggleButton.module.css';
import './Humburger.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
class ToggleButton extends Component{
   
    componentDidMount(){
        Aos.init({
          duration : 1000
        })
    }
    render(){
    let myclass = "hamburger hamburger--squeeze";
    if(this.props.toggle){
        myclass = "hamburger hamburger--squeeze is-active";
    }
        return(
            // <div className={classes.Toggle} onClick={this.props.Clicked} data-aos="fade-up">
            //             <div className={classes.Bar}></div>
            //             <div className={classes.Bar}></div>
            //             <div className={classes.Bar}></div>
            //         </div>
            <div className={myclass}  onClick={this.props.Clicked}  >
  <div className="hamburger-box">
    <div className="hamburger-inner"></div>
  </div>
</div>
        );
    }
}

export default ToggleButton;