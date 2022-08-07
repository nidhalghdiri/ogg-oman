import React , {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import Layout from '../../../containers/layout/Layout';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Aux from '../../../hoc/Auxliary';
import Header from '../../header/Header';
import SideBar from '../../sideBar/SideBar';
import Navbar from '../../navbar/Navbar';
import classes from './Rice.module.css';
import logo from '../../../assets/logo.png';
import FooterSection from '../../../containers/footer/Footer';
import MyVideo from '../../video/Video';
import riceVideo from '../../../assets/videos/rice.mp4';
import pastaVideo from '../../../assets/videos/pasta.mp4';
import oilVideo from '../../../assets/videos/oil.mp4';
import waferVideo from '../../../assets/videos/raka.mp4';
import { Link} from "react-scroll";
class Rice extends Component {

    state = {
        search: false,
        toggle: false,
        scrolled: false,
        modal: false,
        modalItem: 
            {id: 0, name: 'أرز بكل الانواع لكل الاذواق ',
           
             content: `نوفر مجموعة من أنواع الأرز  تتماشى مع أذواق و إحتياجات  كل المستهليكين  . تزرع في اكبر مزارع الأرز في العالم و أحسنها ، كما يتم تعبئتها و تخزينها وفق المعايير العالمية لضمان الجودة  .حيث  يوجد لدينا ما يقارب عن 20 نوع من الأرز يختلف كل واحد عن الآخر بحسب نوعها و جودتها :
             - نوعية ذات ممتازة تشمل أرز الوردة البيضاء طويل الحبة 
             - أرز سخاء جولد : أرز ذو جودة ممتازة يناسب كثيرا المطاعم ، حيث يمكن طبخه بكميات كبيرة و على نار هادئة تضمن طبخة ممتازة و في وقت قصير`},
          
            
        
        
       
    }
    handleScroll = () => {
        if (window.scrollY === 0) {
            this.setState({
                scrolled: false
            });
        
        } else {

            this.setState({
                scrolled: true
            });
          
        }
    }
    componentDidMount(){
        Aos.init({
          duration : 1000
        });
        window.addEventListener('scroll', this.handleScroll);
    }
    searchOpen = () => {
        this.setState({
            search: !this.state.search
        })
    }
    toggleClicked = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }
    // hideBackdropHandler = () =>{
    //     this.setState({
    //         modal : false
    //     });
        
    // }
    // openModalHandler = () => {
    //     this.setState({
    //         modal: true,
    //     });
    // }

    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

 
    render(){
let navbarClassTab = [classes.Navbar];
if(this.state.scrolled){
    navbarClassTab.push(classes.StickyNavbar);
}
let navbarClass = navbarClassTab.join(' ');

let nav = (
    <div className={classes.Link}>
                    <ul>
                        <li>
                        <Link
                activeClass="active"
                to="rice"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >أرز</Link>
                            
                        </li>
                        <li><Link
                activeClass="active"
                to="pasta"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >مكرونة</Link>
                            
                        </li>
                        {/* <li>
                            
                        </li> */}
                        
                        <li>

                        <Link
                activeClass="active"
                to="oil"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >زيت</Link>
                            {/* <NavLink to="/ar/oil" exact>زيت</NavLink> */}
                        </li>
                        <li>

                        <Link
                activeClass="active"
                to="wafer"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >ويفر</Link>
                            {/* <NavLink to="/ar/oil" exact>زيت</NavLink> */}
                        </li>
                    </ul>
                </div>
);

if(this.state.toggle){
    nav = <Navbar show={this.state.toggle} lien={true} color="rgba(29, 25, 107, 0.8)" />;
}
        
        return(
            <Aux>
           <Layout>
           {/* <Backdrop clicked={this.hideBackdropHandler} show={this.state.modal} />
           <Modal show={this.state.modal} item={this.state.modalItem} /> */}
          <section className={classes.RiceSection} id="rice">
          <MyVideo url={riceVideo} />
           <div className={classes.Rice}>
            <Header search={this.state.search} />
            <main  >
            <SideBar open={this.state.search} clicked={this.searchOpen}  />
            <section className={navbarClass} style={{
                padding: this.state.scrolled? '0rem 2rem': '2rem'
            }}>
                <Row>
                    <Col lg={{span:2, order:1}} md={{span:2, order:1}} sm={{span:6, order:1}} xs={{span:6, order:1}}>
                    <div className={classes.Logo} data-aos="fade-down">
                <NavLink to="/ar" exact><img src={logo} alt="Logo" /></NavLink>  
                </div>
                    </Col>
                    <Col lg={{span:8, order:2}} md={{span:8, order:2}} sm={{span:0, order:3}} xs={{span:0, order:3}}>
                    {nav}
                        </Col>
                        <Col lg={{span:2, order:3}} md={{span:2, order:3}} sm={{span:6, order:2}} xs={{span:6, order:2}}>
                        <div className={classes.Toggle} onClick={this.toggleClicked} data-aos="fade-up">
                    <div className={classes.Bar}></div>
                    <div className={classes.Bar}></div>
                    <div className={classes.Bar}></div>
                </div>
                        </Col>
               </Row>
             
                 
            </section>
            
            
            
                <div className={classes.RiceContent} data-aos="fade-up">
              {/* <Row>
                  <Col lg={{span: 6, order: 1}} md={{span: 12, order: 1}} sm={{span: 12, order: 1}} xs={{span: 12, order: 1}} >
                  <div className={classes.RiceInfo}>
                        <h1>أكثر من 20 نوع من الأرز</h1>
                        <p>المؤسسة الأهلية لاستيراد المواد الغذائية, إحدى المؤسسات الرائدة في اليمن, 
                        </p>
                        <span onClick={this.openModalHandler}>إقرأ المزيد</span>
                       
                    </div>
                  </Col>
                  <Col lg={{span: 6, order: 2}} md={{span: 12, order: 2}} sm={{span: 12, order: 2}} xs={{span: 12, order: 2}} >
                  <div className={classes.Products}>
                    <img  src={rice1} alt="RiceProd" />
                    </div>
                      </Col>
                 
                    
                      
                    </Row> */}
              
                    {/* <img  src={rice} alt="RiceProduct"  /> */}
                    

                </div>
            </main>
            <FooterSection />
            </div>
            <div className={classes.Sections} id="pasta">
            <MyVideo url={pastaVideo} />
            <main>
           
            
            
            
            <div className={classes.RiceContent} data-aos="fade-up">
            {/* <Row>
                  <Col lg={{span: 6, order: 1}} md={{span: 12, order: 1}} sm={{span: 12, order: 1}} xs={{span: 12, order: 1}} >
                  
              <div className={classes.RiceInfo}>
                  <h1>أكثر من 20 نوع من الأرز</h1>
                  <p>المؤسسة الأهلية لاستيراد المواد الغذائية, إحدى المؤسسات الرائدة في اليمن, 
</p>
                  <a href="/">إقرأ المزيد</a>
                 
              </div>
           </Col>
           <Col lg={{span: 6, order: 2}} md={{span: 12, order: 2}} sm={{span: 12, order: 2}} xs={{span: 12, order: 2}} >
                  
              <div className={classes.Products}>
              <img  src={pastaProduct} alt="pastaProduct" />
              </div>
                </Col>
                </Row> */}

        
              {/* <img  src={rice} alt="RiceProduct"  /> */}
              

          </div>
            </main>
           
            </div>
            <div className={classes.Sections} id="oil">
            <MyVideo url={oilVideo} />
            <main>
           
            
            
            
            <div className={classes.RiceContent} data-aos="fade-up">
            {/* <Row>
                  <Col lg={{span: 6, order: 1}} md={{span: 12, order: 1}} sm={{span: 12, order: 1}} xs={{span: 12, order: 1}} >
                  
              <div className={classes.RiceInfo}>
                  <h1>أكثر من 20 نوع من الأرز</h1>
                  <p>المؤسسة الأهلية لاستيراد المواد الغذائية, إحدى المؤسسات الرائدة في اليمن, 
</p>
                  <a href="/">إقرأ المزيد</a>
                 
              </div>
              </Col>
              <Col lg={{span: 6, order: 2}} md={{span: 12, order: 2}} sm={{span: 12, order: 2}} xs={{span: 12, order: 2}} >
            
              <div className={classes.Products}>
              <img  src={oilProduct} alt="oilProduct" />
              </div>
              </Col>
              </Row> */}

        
              {/* <img  src={rice} alt="RiceProduct"  /> */}
              

          </div>
            </main>
           
            </div>
            <div className={classes.Sections} id="wafer">
            <MyVideo url={waferVideo} />
            <main>
           
            
            
            
            <div className={classes.RiceContent} data-aos="fade-up">
            {/* <Row>
                  <Col lg={{span: 6, order: 1}} md={{span: 12, order: 1}} sm={{span: 12, order: 1}} xs={{span: 12, order: 1}} >
                 
              <div className={classes.RiceInfo}>
                  <h1>أكثر من 20 نوع من الأرز</h1>
                  <p>المؤسسة الأهلية لاستيراد المواد الغذائية, إحدى المؤسسات الرائدة في اليمن, 
</p>
                  <a href="/">إقرأ المزيد</a>
                 
              </div>
              </Col>
              <Col lg={{span: 6, order: 2}} md={{span: 12, order: 2}} sm={{span: 12, order: 2}} xs={{span: 12, order: 2}} >
            
              <div className={classes.Products}>
              <img  src={waferProduct} alt="waferProduct" />
              </div>
              </Col>
              </Row> */}

        
              {/* <img  src={rice} alt="RiceProduct"  /> */}
              

          </div>
            </main>
           
            </div>
          </section>

           </Layout>
            
        </Aux>
        );
    }
}

export default Rice;