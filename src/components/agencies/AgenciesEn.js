import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import './Agencies.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Earth from './Earth';
import countries from '../../assets/agencies/countries.png';
class AgenciesEn extends Component{
    componentDidMount(){
        Aos.init({
          duration : 1000
        })
    }
    render(){

    
        return(
            <section className="Agencies" id={this.props.id} style={{backgroundColor: "#17a8c1"}}>
                {/* <div className="Title">
                    <h1 data-aos="zoom-in">وكلائنا</h1>
                </div> */}
                <Row>
                    <Col lg={4}>
                       <div className="AgenciesContent">
                            <div className="AgenciesContentTitle">
                            <h1>We select the best products</h1>
                      
                            </div>
                            <div className="AgenciesContentPara">
                                <p>
                                We conduct visits to international exhibitions to select the best and finest products that meet the consumer needs and tastes. It is imported and stored according to international standards.
                                </p>
                            </div>
                            <div className="AgenciesContentBtn">
                                <span onClick={this.props.open}>Read more </span>
                            </div>
                       </div>
                    </Col>
                    <Col lg={8}>
                    <Earth agencies={this.props.agencies} clicked={this.props.clicked} />
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        
                    </Col>
                    <Col lg={8}>
                    <div className="AgenciesCountries">
                        <img src={countries} alt="Countries" />
                    </div>
                    </Col>
                </Row>
                
               
            </section>
        );
    }
} 

export default AgenciesEn;