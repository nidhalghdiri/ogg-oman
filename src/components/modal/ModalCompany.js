import React from 'react';
// import {Row, Col} from 'react-bootstrap';
import CSSTransition from "react-transition-group/CSSTransition";
// import ahliaImg from '../../assets/companies/ahliaImg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

import  './Modal.css';
// import oufuqBack from '../../assets/companies/oufuqBack.png';
// import imgFooter from '../../assets/modalFooter.png';
import ahliaGold from '../../assets/ahliaGold.png';
// import ahliaProducts from '../../assets/ahliaProducts.png';
import alia from '../../assets/companies/alia.png';
import aliaProducts from '../../assets/aliaProducts.png';

const animationTiming = {
    enter: 1000,
    exit: 1000
};
const modalCompany = (props) => {
    
    let rices = props.item.products.map((rice, index) => {
        let icon = null;
        if(rice.icon !== null){
            icon = (
                <li key={index}>
                        <img src={rice.icon} alt="Product" onClick={() => props.riceClicked(index)} />
                    </li>
            );
        }
        return icon;
    });
    let modal = (
        <div className="Modal" >
            <div className="ModalMain" style={{backgroundImage: 'none'}}>
            <div className="CloseBtn">
          <FontAwesomeIcon icon={faTimesCircle} size="lg" className="CloseSVG" color="white" onClick={props.clicked}  />
          </div>
            <div class="Main2" style={{ width: '100%', }}>
                <div className="Logo">
                    <img src={ahliaGold} alt="Ahlia Gold" />
                </div>
                <div className="Title">
                    <h2>خــــبــــراء الأرز</h2>
                </div>
            <div className="Content" >
            <div className="Title">
                    <h2>نختار أفضل المنتجات</h2>
                </div>
            <div className="ContentPara" >
        <p className="ModalPara"> 
        نقوم بزيارة المعارض العالمية لانتقاء افضل و أجود المنتجاتة
  التي تلبي حاجيات و أذواق المستهلك . 
يتم يتم استرادها و تخزينها وفق المعايير العالمية .
        </p>
            </div>
           
            </div>
            <div className="Products">
                <ul>
                  {rices}
                </ul>
            </div>
            </div>
           
        
            </div>
               
        </div>
    );
    if(props.item.id === 1){
        modal = (
            <div className="Modal" >
            <div className="ModalMain" style={{backgroundImage: 'none'}}>
            <div className="CloseBtn">
          <FontAwesomeIcon icon={faTimesCircle} size="lg" className="CloseSVG" color="white" onClick={props.clicked}  />
          </div>
            <div class="Main2" style={{ width: '100%', }}>
                <div className="Logo">
                    <img src={alia} alt="Alia" />
                </div>
                {/* <div className="Title">
                    <h2>خــــبــــراء الأرز</h2>
                </div> */}
            <div className="Content" >
            <div className="Title">
                    <h2>نختار أفضل المنتجات</h2>
                </div>
            <div className="ContentPara" >
        <p className="ModalPara"> 
        نقوم بزيارة المعارض العالمية لانتقاء افضل و أجود المنتجاتة
  التي تلبي حاجيات و أذواق المستهلك . 
يتم يتم استرادها و تخزينها وفق المعايير العالمية .
        </p>
            </div>
           
            </div>
            <div className="Products" style={{display: 'flex', justifyContent: "center", alignItems: "center"}}>
                <img src={aliaProducts} alt="Products" />
            </div>
            </div>
           
        
            </div>
               
        </div>
        );
    }
    // if(props.item.id === 0){
    //     let oufuqBrands = props.logos.map((brand,index) => {
    //         return(
    //             <Col lg={3} className="d-flex justify-content-center align-items-center">
    //         <img src={brand} alt="brand" key={index} />
    //             </Col>
    //         ); 
    //     })
    //     modal = (
    //         <div className="Modal" >
    //             <div className="ModalMain" style={{backgroundImage: 'url(' + oufuqBack +')'}}>
    //             <div className="CloseBtn">
    //       <FontAwesomeIcon icon={faTimesCircle} size="lg" className="CloseSVG" onClick={props.clicked}  />
    //       </div>
    //             <div class="Main2" style={{ width: '100%', background: 'none'}}>
                
    //             <div className="Content" style={{padding: '0rem 2rem'}}>
    //                 <div className="CompanyLogo">
    //                     <img src={props.item.img} alt="img" />
    //                 </div>
    //             <div className="Title" style={{margin: '0'}}>
    //                 <h1 style={{color: '#963627'}}>من نحن؟</h1>
    //             </div>
    //             <div className="ContentPara" style={{width: '90%', margin: '0 auto'}}>
    //         <p className="ModalPara" >
    //             شركة الأفق الوادي هي شركة توزيع وتجارة مقرها في سلطنة عمان. نحن موردون وموزعون لمجموعة واسعة من العلامات التجارية الموثوقة في السلع الاستهلاكية .

    //                               </p>
    //             </div>
    //             <div className="Title">
    //                 <h1 style={{color: '#963627'}}>لماذا نحن؟</h1>
    //             </div>
    //             <div className="ContentPara" style={{width: '90%', margin: '0 auto'}}>
    //         <p className="ModalPara" >نحن نمثل منتجات عالية الجودة في جميع فئات المنتجات . نهدف إلى أن نكون الشريك المفضل لتوريد وتوزيع العلامات التجارية والسلع في عمان. في هذا السياق ، نسعى جاهدين لتجاوز تلبية الاحتياجات إلى تجاوز التوقعات. نحن نسعى إلى النمو ، ليس كما في نمونا فقط ، ولكن في النمو مع موردينا وعملائنا وموظفينا وشركائنا.
    //                               </p>
    //             </div>
               
    //             </div>
    //             </div>
    //             <div className="OufuqBrands">
    //                 <Row>
                        
    //                 {oufuqBrands}
                        
    //                 </Row>
                   
    //             </div>
            
    //             </div>
                   
    //         </div>
    //     );
    // }
    return(
        <CSSTransition 
                mountOnEnter 
                unmountOnExit 
                in={props.show} 
                timeout={animationTiming}
                classNames={{
                    enter: '',
                    enterActive: 'ModalOpen',
                    exit: '',
                    exitActive: 'ModalClosed'
                }}>
        {modal}
        </CSSTransition>
    );
}
export default modalCompany;