import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// CSS
import './Photo.css';

class Photo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { post, i, comments } = this.props;
    return(      
            <div className="slide-objects">
              <Link to={`/view/${post.code}`}>
              <img src={post.display_src} alt={post.caption} />
              <p >{post.caption}</p>
              </Link>
                <button>&hearts;{post.likes}</button>
            </div>
          
    )
  }
}

export default Photo;