import React, {Component} from 'react';
import earth from '../../assets/agencies/GLOBE.png';
import './Agencies.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {NavLink} from 'react-router-dom';
class Earth extends Component{
    componentDidMount(){
        Aos.init({
          duration : 1000
        })
    }
    render(){

        let agencies = this.props.agencies.map((agency, index) =>{
            return (
                <div className={agency.class} key={index}>
                     <NavLink to={agency.url} exact>
                       <div><img src={agency.img} alt={agency.name} 
                    //    onClick={() =>this.props.clicked(index)} 
                       /></div> 
                       </NavLink>

                    </div>
            );
        })
        return(
            <div className="Earth">
            <img src={earth} alt="earth"  />
            {agencies}
        </div>
        );
    }
} 

export default Earth;