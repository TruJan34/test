import React, { Component } from 'react';
import 'aframe';
import img from "./thumbnail.png";

// css
import './Obj.css';

class Obj extends Component {
  constructor(props) {
    super(props);
  } 
  render() {
    return(
      <div className="test-obj">
      <a-scene rotation="0 -130 0" >      
        <a-sky src={img} rotation="0 -130 0" className="test"/>
      </a-scene>    
      </div>
    )
  }
}

export default Obj;