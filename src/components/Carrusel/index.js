// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from 'react-bootstrap/Container';
import imgPortrait from "../../images/dj-forest-3.jpg";
import imgProduct from "../../images/rustiko2.jpg";
import imgCorporative from "../../images/aji-2.jpg";
import imgArchitectural from "../../images/santalaia.jpeg";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Carrusel.scss';

// import required modules
import { EffectFade,Pagination,Navigation,Autoplay } from 'swiper/modules';

function Carrusel() {
  return (
    <section className="carrusel container-fluid p-0">
      <Swiper 
      className="container-fluid p-0"
      pagination={true}
      effect={'fade'}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[EffectFade,Autoplay, Pagination, Navigation]}>
        <SwiperSlide>
          <Container className="p-0 h-100" fluid>
            <div className="carrusel-card h-100">
              <picture>
                <source srcSet={imgPortrait} media="(min-width: 600px)"></source>
                <img src={imgPortrait} alt="MDN"></img>
              </picture>  
              <div className="carrusel-card--info">
                  <h3 className="title">Retratos y portafolio personal</h3>
                  <p className="date mb-4">Lugar y fecha</p>
                  <a className="button-primary" href="/porfolio/portrait">VER</a>
              </div>
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container className="p-0 h-100" fluid>
            <div className="carrusel-card h-100">
              <picture>
                <source srcSet={imgProduct} media="(min-width: 600px)"></source>
                <img src={imgProduct} alt="MDN"></img>
              </picture>
              <div className="carrusel-card--info">
                  <h3 className="title">Fotografía de producto y naturaleza</h3>
                  <p className="date mb-4">Lugar y fecha</p>
                  <a className="button-primary " href="/porfolio/product">VER</a>
              </div>
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container className="p-0 h-100" fluid>
            <div className="carrusel-card h-100">
              <picture>
                <source srcSet={imgCorporative} media="(min-width: 600px)"></source>
                <img src={imgCorporative} alt="MDN"></img>
              </picture>
              <div className="carrusel-card--info">
                  <h3 className="title">Fotografía corporativa</h3>
                  <p className="date mb-4">julio 23, 2023</p>
                  <a className="button-primary " href="/porfolio/corporative">VER</a>
              </div>
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container className="p-0 h-100" fluid>
            <div className="carrusel-card h-100">
              <picture>
                <source srcSet={imgArchitectural} media="(min-width: 600px)"></source>
                <img src={imgArchitectural} alt="MDN"></img>
              </picture>
              <div className="carrusel-card--info">
                  <h3 className="title">Fotografía de arquitectura</h3>
                  <p className="date mb-4">julio 23, 2023</p>
                  <a className="button-primary " href="/porfolio/architectural">VER</a>
              </div>
            </div>
          </Container>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Carrusel
