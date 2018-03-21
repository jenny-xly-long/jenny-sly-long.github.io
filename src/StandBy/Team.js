import React, { Component } from 'react';
import jenny from '../images/jenny.jpg';
import zhen from '../images/zhen.jpg';
import tristan from '../images/tristan.jpg';
import feras from '../images/feras.jpg';
import yves from '../images/yves.jpg';


class Team extends Component {
  render() {
    return (
      <div className="row">
      <div className="column">
       <div className="card">
       <img src={zhen} alt="Jenny," className="column"/>
        <div className="container">
        <h4>Zhen Lun CHEN</h4>
        <pp>Co-Founder</pp>
        <pp>Physiotherapy</pp>
        <pp>zhen.l.chen@mail.mcgill.ca</pp>
        <pp><button className="button">Contact</button></pp>
      </div>
      </div>
      </div>
      <div className="column">
       <div className="card">
       <img src={jenny} alt="Zhen," className="column"/>
        <div className="container">
        <h4>Jenny LONG</h4>
        <pp>Co-Founder</pp>
        <pp>Maths & Physics</pp>
        <pp>jenny.xly.long@gmail.com</pp>
        <pp><button className="button">Contact</button></pp>
      </div>
      </div>
      </div>
      <div className="column">
       <div className="card">
       <img src={feras} alt="tristan," className="column"/>
        <div className="container">
        <h4>Feras AL TAHA</h4>
        <pp>Co-Founder</pp>
        <pp>Electrical Engineering</pp>
        <pp>feras.altaha@mail.mcgill.ca</pp>
        <pp><button className="button">Contact</button></pp>
      </div>
      </div>
      </div>
      <div className="row">
      <div className="column2">
       <div className="card">
       <img src={tristan} alt="Jenny," className="column"/>
        <div className="container">
        <h4>Tristan SAUMURE TOUPIN</h4>
        <pp>Co-Founder</pp>
        <pp>Software Engineering</pp>
        <pp>tristantouppin@gmail.com</pp>
        <pp><button className="button">Contact</button></pp>
      </div>
      </div>
      </div>
      <div className="column2">
       <div className="card">
       <img src={yves} alt="yves," className="column"/>
        <div className="container">
        <h4>Yves BLAIN-MONTESANO</h4>
        <pp>Co-Founder</pp>
        <pp>Computer & Cognitive Science</pp>
        <pp>yves.blain-montesano@mail.mcgill.ca</pp>
        <pp><button className="button">Contact</button></pp>
      </div>
      </div>
      </div>
      </div>
</div>
    );
  }
}
export default Team;