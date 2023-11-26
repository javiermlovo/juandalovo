import './App.scss';
import Header from './components/Header';
import Rutas from './components/routes';

//
import AOS from 'aos';
import 'aos/dist/aos.css';
import Whatsapp from './components/whatsapp';
import Footer from './components/Footer';
AOS.init();


function App() {
  return (
    <>
      <Header></Header>
      <Rutas></Rutas>
      <Whatsapp></Whatsapp>
      <Footer></Footer>
    </>
  );
}

export default App;
