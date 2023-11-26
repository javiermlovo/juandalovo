import { Row, Col, Container} from 'react-bootstrap';
import profileImg from '../../images/profile.jpg';
import './About.scss';

function About() {
    return (
        <section className="about container-fluid darkMode-applicable py-4 py-md-5">
            <Container>
                <Row>
                    <Col xs={12} md={7} data-aos="fade-right" data-aos-duration="1200" className='ps-md-4 py-4 order-md-1'>
                        <Row className='h-100 align-items-center'>
                            <Col xs={12}>
                                <h3 className="title mb-4">About me</h3>
                                <p className="paragraph">
                                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={5}>
                        <img src={profileImg} data-aos="fade-right" className="about__logo py-4 order-md-0" alt="profile" />
                    </Col>
                </Row>
            </Container>
        </section>
        );
    }
export default About