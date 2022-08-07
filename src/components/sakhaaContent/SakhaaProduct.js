import React, {Component} from 'react';
import classes from './SakhaaMain.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle, faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
import Backdrop from '../backdrop/Backdrop';
import sakhaaRiceImg from '../../assets/sakhaaRice.jpg';
import sakhaaPastaImg from '../../assets/sakhaaPasta.jpg';
import sakhaaPasta2Img from '../../assets/sakhaaPasta2.jpg';
import sakhaaOilImg from '../../assets/sakhaaOil.jpg';

class SakhaaProduct extends Component {

    render(){
        let productModal = (
            <div className={classes.ModalMain} style={{backgroundImage: "url('"+ sakhaaRiceImg +"')"}} >
                <div className={classes.BackBtn}>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} size="lg" className={classes.CloseSVG} onClick={this.props.back}  />
                </div>
      <div className={classes.CloseBtn}>
      <FontAwesomeIcon icon={faTimesCircle} size="lg" className={classes.CloseSVG} onClick={this.props.hide}  />
      </div>
    <div class={classes.Main} >

    <div className={classes.Content}>
     
        <div className={classes.ParaMain}>
            <p>
                توفر علامة سخاء مجموعة متنوعة من المنتجات تتماشى مع أذواق و إحتياجات كل المستهليكين مثل الأرز و الزيت و المكرونة بأنواعها . <br>
                </br>
                تزرع في أكبر مزارع الأرز في العالم و أحسنها , كما يتم تعبئتها و تخزينها وفق المعايير العالمية لضمان الجودة. 
            </p>
        </div>
        </div>
        </div>

        </div>
        );;

        if(this.props.sakhaaProduct === 1){
            productModal = (
                <div className={classes.ModalMain} style={{backgroundImage: "url('"+ sakhaaPastaImg +"')"}} >
                    <div className={classes.BackBtn}>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} size="lg" className={classes.CloseSVG} onClick={this.props.back}  />
                </div>
          <div className={classes.CloseBtn}>
          <FontAwesomeIcon icon={faTimesCircle} size="lg" className={classes.CloseSVG} onClick={this.props.hide}  />
          </div>
        <div class={classes.Main} >
    
        <div className={classes.Content}>
         
        <div className={classes.ParaMain}>
            <p>
                توفر علامة سخاء مجموعة متنوعة من المنتجات تتماشى مع أذواق و إحتياجات كل المستهليكين مثل الأرز و الزيت و المكرونة بأنواعها . <br>
                </br>
                تزرع في أكبر مزارع الأرز في العالم و أحسنها , كما يتم تعبئتها و تخزينها وفق المعايير العالمية لضمان الجودة. 
            </p>
        </div>
  
       
            </div>
            </div>
    
            </div>
            );
        }
        if(this.props.sakhaaProduct === 2){
            productModal = (
                <div className={classes.ModalMain} style={{backgroundImage: "url('"+ sakhaaPasta2Img +"')"}} >
                    <div className={classes.BackBtn}>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} size="lg" className={classes.CloseSVG} onClick={this.props.back}  />
                </div>
          <div className={classes.CloseBtn}>
          <FontAwesomeIcon icon={faTimesCircle} size="lg" className={classes.CloseSVG} onClick={this.props.hide}  />
          </div>
        <div class={classes.Main} >
    
        <div className={classes.Content}>
         
        <div className={classes.ParaMain}>
            <p>
                توفر علامة سخاء مجموعة متنوعة من المنتجات تتماشى مع أذواق و إحتياجات كل المستهليكين مثل الأرز و الزيت و المكرونة بأنواعها . <br>
                </br>
                تزرع في أكبر مزارع الأرز في العالم و أحسنها , كما يتم تعبئتها و تخزينها وفق المعايير العالمية لضمان الجودة. 
            </p>
        </div>
       
            </div>
            </div>
    
            </div>
            );
        }
        if(this.props.sakhaaProduct === 3){
            productModal = (
                <div className={classes.ModalMain} style={{backgroundImage: "url('"+ sakhaaOilImg +"')"}} >
                    <div className={classes.BackBtn}>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} size="lg" className={classes.CloseSVG} onClick={this.props.back}  />
                </div>
          <div className={classes.CloseBtn}>
          <FontAwesomeIcon icon={faTimesCircle} size="lg" className={classes.CloseSVG} onClick={this.props.hide}  />
          </div>
        <div class={classes.Main} >
    
        <div className={classes.Content}>
  
        <div className={classes.ParaMain}>
            <p>
                توفر علامة سخاء مجموعة متنوعة من المنتجات تتماشى مع أذواق و إحتياجات كل المستهليكين مثل الأرز و الزيت و المكرونة بأنواعها . <br>
                </br>
                تزرع في أكبر مزارع الأرز في العالم و أحسنها , كما يتم تعبئتها و تخزينها وفق المعايير العالمية لضمان الجودة. 
            </p>
        </div>
            </div>
            </div>
    
            </div>
            );
        }
        return (

            <div className={classes.Modal}  >
              <Backdrop show={this.props.showBack} show2={this.props.showBack2} show3={this.props.showBack3} show4={this.props.showBack4} 
                        clicked={this.props.hide}
                        product={true} />
        
               {productModal}
        </div>
        );
    }
}

export default SakhaaProduct;
