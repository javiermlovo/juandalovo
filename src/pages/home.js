import Carrusel from '../components/Carrusel';
// import {Button} from 'react-bootstrap';
// import logo from '../images/logo-juandalovo.webp';
// import React, { useState } from 'react';
import AboutModule from '../components/AboutModule';
import PorfolioHome from '../components/PorfolioHome';

export default function Home(){
    // const [count, setCount] = useState(0);
    return(
    <main className="App">
        <Carrusel></Carrusel>
        {/* <section className="App-header container-fluid darkMode-applicable">
            <div className="container">
            <img src={logo} data-aos="fade-up" className="App-logo mb-3" alt="logo" />
            <p>
                CORPORATIVE - ADVERTISING - INTERIOR DESIGN - PORTRAIT
            </p>
            <p>
                This project is a portfolio of a professional photographer and publisher
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                More info click here
            </a>
            <div>
                <p>You clicked {count} times</p>
                <Button onClick={() => setCount(count + 1)} variant="success">Click me</Button>
            </div>
            </div>
        </section> */}
        <AboutModule/>
        <PorfolioHome></PorfolioHome>
    </main>
    )
}