import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import './Agencies.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Earth from './Earth';
import countries from '../../assets/agencies/countries.png';
class Agencies extends Component{
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
                            <h1>نختار أفضل المنتجات</h1>
                      
                            </div>
                            <div className="AgenciesContentPara">
                                <p>
                                نقوم بزيارة المعارض العالمية لانتقاء افضل و أجود المنتجاتة
                                التي تلبي حاجيات و أذواق المستهلك . 
                                يتم يتم استرادها و تخزينها وفق المعايير العالمية .
                                </p>
                            </div>
                            <div className="AgenciesContentBtn">
                                <span onClick={this.props.open}>إقرا المزيد</span>
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

export default Agencies;