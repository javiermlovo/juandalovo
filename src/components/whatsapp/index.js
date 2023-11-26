import whatsappImg from '../../images/whatsapp-logo.png';
import './Whatsapp.scss';

function Whatsapp() {
    return (
        <section className="whatsapp-btn">
            <div className="col-auto position-relative">
                <a 
                    href="https://wa.link/393450213090"  
                    target="_blank" 
                    rel="noopener noreferrer"
                ></a>
                <img src={whatsappImg} alt="Whatsapp Juandalovo"/>
            </div>
        </section>
        );
    }
export default Whatsapp