import React, { Component } from 'react';
// import * as fa from 'react-icons/lib/fa';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaEnvelope from 'react-icons/lib/fa/envelope';




  class Footer extends Component {
  render() {
    return (
      <div className="Footer">
      <a href="https://www.facebook.com/eRArehab/" rel="noopener noreferrer" target="_blank"><FaFacebook className="fa-facebook"/></a> &nbsp;
      <a href="mailto:erehabadvancement@gmail.com?Subject=Hello!" rel="noopener noreferrer" target="_blank"><FaEnvelope className="fa-envelope"/></a> &nbsp;
      <a href="https://twitter.com/erarehab" rel="noopener noreferrer" target="_blank"><FaTwitter className="fa-twitter"/></a> 

          <br/>
          <p> © 2018 eRA All Rights Reserved.</p>
      </div>
    );
  }
}
export default Footer;

