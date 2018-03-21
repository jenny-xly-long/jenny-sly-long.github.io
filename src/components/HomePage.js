import React, { Component } from 'react';
import name from '../images/name.png';
import FaAngleDoubleDown from 'react-icons/lib/fa/angle-double-down';


class HomePage extends Component {

  render() {
    return (
      <div className="HomePage">
    
        <h1 className="homepage-intro"><img src={name} className="name"/> 
        <br/> <ht> <strong>AI</strong> IN PHYSIOTHERAPY </ht>
        <br/>
        <h3> MONTREAL</h3>
        <br/>
        <br/>
        <br/>
        </h1>
        <FaAngleDoubleDown className="fa-twitter"/>
      </div>
    );
  }
}
export default HomePage;
