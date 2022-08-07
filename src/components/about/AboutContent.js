import React, {Component} from 'react';
import Aux from '../../hoc/Auxliary';
import {Row, Col} from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';
import classes from './AboutContent.module.css';
import {NavLink} from 'react-router-dom';
class AboutContent extends Component {
  
    componentDidMount(){
        Aos.init({
          duration : 1000
        })
    }
  
    render(){
        let readMore = this.props.lang === "ar" ? "إقرأ المزيد" : "Read More";
        let items = this.props.items.map((item, index) => {
            return (
                <Col lg={4} key={index}>
                    <div key={index} className={classes.AboutItem} data-aos="fade-right">
                        <div className={classes.AboutImg}>
                            <img src={item.icon} alt="about Img" />
                        </div>
                <h1>{item.name}</h1>
            <p> {item.sousContent}</p>
            <NavLink to={item.url} exact>{readMore}</NavLink>  
    {/* <button onClick={() =>this.props.clicked(index)}>إقرأ المزيد </button> */}
            </div>
                </Col>
            );
        })
        return  (
           <Aux>
               
            <section className={classes.About} id={this.props.id} >
            <Row>
            {items}
            </Row>
            
            </section>
            </Aux>   
        );
        
    }
} 
export default AboutContent;
