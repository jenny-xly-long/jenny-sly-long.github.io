import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import About from './components/About';
import Product from './components/Product';
import Us from './components/Us';
import Contact from './components/Contact';
import Footer from './components/Footer';
import about from './images/about.png';

// import {GoogleApiWrapper} from 'google-maps-react';



class App extends Component {
  render() {
    return (
      <div className="App" id="app">
      <NavBar/>
      <HomePage/>
      <p className="heading" id="about">ABOUT eRA <br/>   <br/>   We harness the power of artificail intelligence and smart phones to provide clinicians and patients a more efficent and personalized tool.
</p>
      <About/>
      <img src={about} alt="image," className="about-column"/>  
      <h2 className="heading" id="product"><br/><br/><br/><br/>Our Product</h2>
      <Product/>
      {/* <h2 className="heading" id="research">Research</h2>
      <Research/> */}
      <h2 className="heading" id="team">Meet Our Team</h2>
      {/* <Team/> */}
      <Us/>
      <h2 className="heading" id="contact">Contact Us</h2>
      <Contact/>
      <Footer/>
      </div>
    );
  }
}
export default App;