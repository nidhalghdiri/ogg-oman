import React, {Component} from 'react';
import classes from './SakhaaMain.module.css';
import {Row, Col} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import Backdrop from '../backdrop/Backdrop';
import sakhaaMainImg from '../../assets/sakhaaMain.jpg';
import rice from '../../assets/rice.png';
import pasta from '../../assets/pasta.png';
import pasta2 from '../../assets/pasta2.png';
import oil from '../../assets/oil.png';
class SakhaaMain extends Component {

    render(){
        return (

            <div className={classes.Modal}  >
              <Backdrop show={this.props.showBack} show2={this.props.showBack2} show3={this.props.showBack3} show4={this.props.showBack4} 
                        clicked={this.props.hide}
                        product={true} />
        <div className={classes.ModalMain} style={{backgroundImage: "url('"+ sakhaaMainImg +"')"}} >
          <div className={classes.CloseBtn}>
          <FontAwesomeIcon icon={faTimesCircle} size="lg" className={classes.CloseSVG} onClick={this.props.hide}  />
          </div>
        <div class={classes.Main} >
    
        <div className={classes.Content}>
          <div className={classes.Logo}>
            <img src={this.props.logo} alt="img"  />
          </div>
          <div className={classes.ParaSakhaaMain}>
            <p>
                توفر علامة سخاء مجموعة متنوعة من المنتجات تتماشى مع أذواق و إحتياجات كل المستهليكين مثل الأرز و الزيت و المكرونة بأنواعها . <br>
                </br>
                تزرع في أكبر مزارع الأرز في العالم و أحسنها , كما يتم تعبئتها و تخزينها وفق المعايير العالمية لضمان الجودة. 
            </p>
        </div>
          <div className={classes.SakhaaCategory}>
            <Row>
              <Col lg={3} md={3} sm={6} xs={6}>
                <div className={classes.SakhaaItem}>
                <img src={rice} alt="rice" onClick={this.props.riceClicked}/>
                </div>
              </Col>
              <Col lg={3} md={3} sm={6} xs={6}>
              <div className={classes.SakhaaItem}>
              <img src={pasta} alt="pasta" onClick={this.props.pastaClicked} />
              </div>
                
              </Col>
              <Col lg={3} md={3} sm={6} xs={6}>
              <div className={classes.SakhaaItem}>
              <img src={pasta2} alt="pasta2" onClick={this.props.pasta2Clicked} />
              </div>
              </Col>
              <Col lg={3} md={3} sm={6} xs={6}>
              <div className={classes.SakhaaItem}>
                <img src={oil} alt="oil" onClick={this.props.oilClicked} />
                </div>
              </Col>
            </Row>
           
          </div>
  
       
            </div>
            </div>
    
            </div>
               
        </div>
        );
    }
}

export default SakhaaMain;
