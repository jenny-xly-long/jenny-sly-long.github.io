import React, { Component } from 'react';
import logo from '../images/whitelogo.png';

class NavBar extends Component {

  render() {
      // var header = ".NavBar";
    
      // window.scroll(); {    
      //     var scroll = window.scrollTop();
      //     if (scroll >= 50) {
      //         header.addClass("scroll");
      //     } else {
      //         header.removeClass("scroll");
      //     }
      // };
    
    
    return ( 
      <div>
        <ul className="NavBar">
          {/* <li className="nav-item"><a href="#app" className="nav-linkk"><img src={logo} className="logo" alt=""/></a></li> */}
          <li className="nav-item nav-last"><a href="#contact" className="nav-link">Contact</a></li>
          <li className="nav-item"><a href="#team" className="nav-link">Team</a></li>
          <li className="nav-item"><a href="#app" className="nav-linkk"><img src={logo} className="logo" alt=""/></a></li>
          {/* <li className="nav-item"><a href="#research" className="nav-link">Research</a></li> */}
          <li className="nav-item"><a href="#product" className="nav-link">Product</a></li>
          <li className="nav-item"><a href="#about" className="nav-link">About </a></li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
