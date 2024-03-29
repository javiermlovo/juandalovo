import { Row, Col, Container} from 'react-bootstrap';
import logo from '../../images/logo-juandalovo.webp';
import './Footer.scss';
import { FaPhoneAlt, FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer darkMode-applicable container-fluid pt-5 pb-3">
            <Container>
                <Row>
                    <Col xs={12} md={6} lg={4}>
                        <Row>
                            <Col xs={12} className="footer--logo">
                                <a href="/">
                                    <img src={logo} className='img-fluid' alt="logo"/>
                                </a>
                            </Col>
                            <Col xs={12} className="footer--social-media py-4">
                                <a href="https://www.facebook.com/juandavid.mesalovo" target="_blank" rel="noreferrer">
                                    <FaFacebook/>
                                </a>
                                <a href="https://www.instagram.com/juandalovo/" target="_blank" rel="noreferrer">
                                    <FaInstagram/>
                                </a>
                                <a href="https://wa.link/393450213090" target="_blank" rel="noreferrer">
                                    <FaWhatsapp/>
                                </a>
                                <a href="https://www.linkedin.com/in/juanlovo/" target="_blank" rel="noreferrer">
                                    <FaLinkedin/>
                                </a>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={6} lg={3} className="footer--nav mb-4">
                        <nav>
                            <ul>
                                <li><a href="/about" className="navigation__item">About</a></li>
                                <li><a href="/porfolio/portrait" className="navigation__item">Portrait</a></li>
                                <li><a href="/porfolio/product" className="navigation__item">Product</a></li>
                                <li><a href="/porfolio/architectural" className="navigation__item">Architectural</a></li>
                                <li><a href="/contact" className="navigation__item">Contact</a></li>
                            </ul>
                        </nav>
                    </Col>
                    <Col xs={12} lg={5}>
                        <Row className='justify-content-center text-center'>
                            <Col xs={12}>
                                <h3 className="title title--secondary mb-4">Contáctanos:</h3>
                            </Col>
                            <Col xs="auto mb-3">
                                <a href="https://wa.link/393450213090" className="button-secondary" target="_blank" rel="noreferrer">
                                    <FaWhatsapp className='me-2' />
                                    Whatsapp
                                </a>
                            </Col>
                            <Col xs="auto mb-3">
                                <a href="tel:+39 345 021 3090" className="button-secondary px-3">
                                    <FaPhoneAlt className='me-2'/>
                                    +39 345 021 3090
                                </a>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} className="footer-nav__copy d-flex justify-content-center pt-3">
                        <p className='m-0'> © Juan David Mesa Lovo 2023</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
export default Footer