import { Row, Col, Container} from 'react-bootstrap';
import imgPortrait from "../../images/dj-forest-3.jpg";
import imgProduct from "../../images/rustiko2.jpg";
import imgCorporative from "../../images/aji-2.jpg";
import imgArchitectural from "../../images/santalaia.jpeg";
import './PorfolioHome.scss';

function PorfolioHome() {
    return (
        <section className="PorfolioHome container-fluid darkMode-applicable py-4 py-md-5">
            <Container>
                <Row>
                    <Col xs={12}>
                        <h3 className="title mb-4">Porfolio</h3>
                    </Col>
                    <Col xs={12} md={6} xl={4} data-aos="fade-right" className='py-3'>
                        <div className="PorfolioHome-card h-100">
                            <picture>
                                <source srcSet={imgPortrait} media="(min-width: 600px)"></source>
                                <img src={imgPortrait} className="PorfolioHome-card--img" alt="MDN"></img>
                            </picture>  
                            <a className="PorfolioHome-card--info" href="/porfolio/portrait"> 
                                <h3 className="title title--secondary">Retratos</h3>
                            </a>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={8} data-aos="fade-left" className='py-3'>
                        <div className="PorfolioHome-card h-100">
                            <picture>
                                <source srcSet={imgProduct} media="(min-width: 600px)"></source>
                                <img src={imgProduct} className="PorfolioHome-card--img" alt="MDN"></img>
                            </picture>
                            <a className="PorfolioHome-card--info"  href="/porfolio/product">
                                <h3 className="title title--secondary">Producto</h3>
                            </a>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={8} data-aos="fade-right" className='py-3'>
                        <div className="PorfolioHome-card h-100">
                            <picture>
                                <source srcSet={imgCorporative} media="(min-width: 600px)"></source>
                                <img src={imgCorporative} className="PorfolioHome-card--img" alt="MDN"></img>
                            </picture>
                            <a className="PorfolioHome-card--info" href="/porfolio/corporative">
                                <h3 className="title title--secondary">Corporativa</h3>
                            </a>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={4} data-aos="fade-left" className='py-3'>
                        <div className="PorfolioHome-card h-100">
                            <picture>
                                <source srcSet={imgArchitectural} media="(min-width: 600px)"></source>
                                <img src={imgArchitectural} className="PorfolioHome-card--img" alt="MDN"></img>
                            </picture>
                            <a className="PorfolioHome-card--info" href="/porfolio/architectural"> 
                                <h3 className="title title--secondary">Arquitectura</h3>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        );
    }
export default PorfolioHome