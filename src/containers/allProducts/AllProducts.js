import React , {Component} from 'react';
import classes from './AllProducts.module.css';
import {Row, Col} from 'react-bootstrap';
// images
import img1 from '../../assets/allProductsItem1.png';
// import img2 from '../../assets/allProductsItem2.png';
class AllProducts extends Component {
    render(){
        const altImage = "Image";
        return(
            <div className={classes.AllProducts}>
                <Row>
                    <Col lg={8}>
                        <div className={classes.ProductImage}>
                            <Row>
                                <Col lg={8}>
                                    <div className={classes.ProductImg}>
                                        <img src={img1} alt={altImage} />
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={classes.ProductText}>
                                        <h1>مكرونة سخاء الهلالية</h1>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={4}>
                    <div className={classes.ProductInfo}>
                            Product Info
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AllProducts;
 