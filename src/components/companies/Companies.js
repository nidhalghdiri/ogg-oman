import React, {Component} from 'react';
import classes from './Companies.module.css';
import { Row, Col} from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';
// import Slider from "react-slick";
import {NavLink} from 'react-router-dom';
class Companies extends Component {
   
    componentDidMount(){
        Aos.init({
          duration : 1000
        })
    }
    render(){
        let companies = this.props.companies.map((company, index) => {
            return (
                <Col lg={3} md={3} sm={12} xs={12} key={index} className="mb-2">
                <div className={classes.Company} key={index} data-aos="zoom-in">
                  <div className={classes.CompanyImg}>
                  <NavLink to={company.url} exact>
                  <img src={company.img} alt={company.name}/>
                  </NavLink>  
                      {/* <img src={company.img} alt={company.name} onClick={() =>this.props.clicked(index)}/> */}
                      </div>
                </div>
            </Col>
            );
        })
        return(
            <section className={classes.Companies} id={this.props.id}>
           
                <div className={classes.Content}>
                     <Row>
                     {/* <Slider {...settings}> */}
                        {companies}
                        {/* </Slider> */}
                     </Row>
                </div>
            </section>
        );
    }
}

export default Companies;
