import React, { Component } from 'react';
import ReactDOM from 'react-dom'


export default class Map extends Component {

  state = {
    locations: [
      { name: "eRA at McGill", location: {lat: 45.504785, lng: -73.577151} }
    ]
  }

  componentDidUpdate() {
    this.loadMap(); 
  }

  loadMap() {
    if (this.props && this.props.google) { 
      const {google} = this.props; 
      const maps = google.maps; 

      const mapRef = this.refs.map; 
      const node = ReactDOM.findDOMNode(mapRef); 

      const mapConfig = Object.assign({}, {
        center: {lat: 45.504785, lng: -73.577151}, 
        zoom: 11, 
        mapTypeId: 'roadmap' 
      })

      this.map = new maps.Map(node, mapConfig); 


      this.state.locations.forEach( location => { 
        const marker = new google.maps.Marker({ 
          position: {lat: location.location.lat, lng: location.location.lng}, 
          map: this.map, 
          title: location.name 
        });
      })

    }
  }

  render() {
    const style = { 
      width: '45vw', 
      height: '75vh' 
    }

    return ( 
      <div ref="map" style={style}>
        loading map...
      </div>
    )
  }
}
export default Map;
//   apiKey: (AIzaSyBGn6jW4RlqE9FuP4M5xMyBPRP8VXKzwwg)