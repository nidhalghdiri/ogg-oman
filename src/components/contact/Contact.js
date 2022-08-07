import React , {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';
import classes from './Contact.module.css';
import contactImg from '../../assets/contactImg.png'
class ContactContent extends Component {
    componentDidMount(){
        Aos.init({
          duration : 1000
        })
    }
    render(){
        return(
            <section className={classes.Contact}>
            <div className={classes.ContactMain}>
            <Row>
            <Col lg={6} md={6} sm={12} xs={12} > 
            <div className={classes.ContactImg}>
                <img src={contactImg} alt="img" data-aos="zoom-in" />
            </div>
            </Col>
                <Col lg={6} md={6} sm={12} xs={12} > 
                    <div className={classes.ContactTitle}>
                        <h1 data-aos="fade-right">إتصل بنا</h1>
                    </div>
                    <form data-aos="fade-left" action="mailto:Info@nationalfoodye.com" method="POST" enctype="multipart/form-data">
                        <div className={classes.FormItem} >
                            <input type="text" name="name" placeholder="الإسم" />
                        </div>
                        
                        <div className={classes.FormItem} >
                            <input type="text"  name="email" placeholder="البريد الإكتروني" />
                        </div>
                        <div className={classes.FormItem} >
                            <textarea name="message" placeholder="... الرسالة"></textarea>
                        </div>
                        <div className={classes.Btn}>
                            <button>أرسل</button>
                        </div>
                    </form>
                 </Col>
            </Row>
            </div>
        </section>
        );

    }
}

export default ContactContent;
