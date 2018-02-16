import React, { Component } from 'react';
import HomesObjects from './HomesObjects/HomesObjects'
var Carousel = require('nuka-carousel');
import Footer from '../../Shared/Footer/Footer'

import './Homes.css'

class Homes extends Component {
  constructor(props) {
    super(props)
  }

  render() {    
    return(
      <div className="homesslide">
        <h4>Homes</h4>
        <Carousel>
        {this.props.posts.map((post, i) => 
              <HomesObjects {...this.props} key={i} i={i} post={post}/>           
              )}
        </Carousel>
        <div className="footer-homes">
        <Footer/>
        </div>
      </div>
       )
     }
 }
export default Homes;