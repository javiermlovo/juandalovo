import logo from './logo-juandalovo.webp';
import './App.scss';
import React, { useState } from 'react';
import Header from './components/Header';
import Carrusel from './components/Carrusel';
import Button from 'react-bootstrap/Button';


function App() {
  const [count, setCount] = useState(0);
  return (
    <>
    <Header></Header>
    <main className="App">
      <Carrusel></Carrusel>
      <section className="App-header container-fluid darkMode-applicable">
        <div className="container">
          <img src={logo} className="App-logo mb-3" alt="logo" />
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
      </section>
    </main>
    </>
  );
}

export default App;
