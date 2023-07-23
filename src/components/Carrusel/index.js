// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from 'react-bootstrap/Container';
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
                <source srcSet="https://static.wixstatic.com/media/b58f61_918677a413e04cc5b7a071e48e19ca3d~mv2.jpg/v1/fill/w_2364,h_1960,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/b58f61_918677a413e04cc5b7a071e48e19ca3d~mv2.jpg" media="(min-width: 600px)"></source>
                <img src="https://static.wixstatic.com/media/b58f61_91fd7e503b354eaa8236bf61ddd17594~mv2.jpg/v1/fill/w_2364,h_1960,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/b58f61_91fd7e503b354eaa8236bf61ddd17594~mv2.jpg" alt="MDN"></img>
              </picture>  
              <div className="carrusel-card--info">
                  <h3 className="title">Fotografia de producto y naturaleza</h3>
                  <p className="date mb-4">Lugar y fecha</p>
                  <a className="button-primary" href="/">VER</a>
              </div>
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container className="p-0 h-100" fluid>
            <div className="carrusel-card h-100">
              <picture>
                <source srcSet="https://static.wixstatic.com/media/b58f61_a74736da3a0d484db6c193b9b083a842~mv2.jpg/v1/fill/w_2026,h_1680,al_c,q_90,enc_auto/b58f61_a74736da3a0d484db6c193b9b083a842~mv2.jpg" media="(min-width: 600px)"></source>
                <img src="https://static.wixstatic.com/media/b58f61_918677a413e04cc5b7a071e48e19ca3d~mv2.jpg/v1/fill/w_2364,h_1960,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/b58f61_918677a413e04cc5b7a071e48e19ca3d~mv2.jpg" alt="MDN"></img>
              </picture>
              <div className="carrusel-card--info">
                  <h3 className="title">Fotografia de producto</h3>
                  <p className="date mb-4">Lugar y fecha</p>
                  <a className="button-primary " href="/">VER</a>
              </div>
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container className="p-0 h-100" fluid>
            <div className="carrusel-card h-100">
              <picture>
                <source srcSet="https://static.wixstatic.com/media/b58f61_91fd7e503b354eaa8236bf61ddd17594~mv2.jpg/v1/fill/w_2364,h_1960,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/b58f61_91fd7e503b354eaa8236bf61ddd17594~mv2.jpg" media="(min-width: 600px)"></source>
                <img src="https://static.wixstatic.com/media/b58f61_918677a413e04cc5b7a071e48e19ca3d~mv2.jpg/v1/fill/w_2364,h_1960,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/b58f61_918677a413e04cc5b7a071e48e19ca3d~mv2.jpg" alt="MDN"></img>
              </picture>
              <div className="carrusel-card--info">
                  <h3 className="title">Retratos y prtafolio personal</h3>
                  <p className="date mb-4">julio 23, 2023</p>
                  <a className="button-primary " href="/">VER</a>
              </div>
            </div>
          </Container>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Carrusel
