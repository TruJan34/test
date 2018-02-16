import React, { Component } from 'react';
import Photo from '../Photo/Photo'
var Carousel = require('nuka-carousel');
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import Footer from '../Shared/Footer/Footer'



// css
import './Grid.css'

class Grid extends Component {
  constructor(props) {
    super(props)
  }  

  render() {    
    return(
      <div className="main-slide">
      {/* Food */}
        <div className="food">
        <h1>3D Models</h1>
          <h4>Food</h4>      
          <Carousel>
            {this.props.posts.map((post, i) => 
              <Photo {...this.props} key={i} i={i} post={post}/>           
              )}
          </Carousel>
        </div>

        {/* Trees */}
        <div className="trees">
        <h4>Trees</h4>      
          <Carousel>
            {this.props.posts.map((post, i) => 
              <Photo {...this.props} key={i} i={i} post={post}/>           
              )}
          </Carousel>
          </div>
          <div className="pagination">
          <Pagination>
            <PaginationItem>
              <PaginationLink previous href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="/">
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="/homes">
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                4
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                5
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink next href="#" />
            </PaginationItem>
          </Pagination>
          {/* <Footer/> */}
          </div>
          <Footer/>          
      </div>
        
    )
  }
}

export default Grid;