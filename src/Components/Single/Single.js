import React, { Component } from 'react';

class Single extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {match} = this.props;
    return(
      <div>
        <h3>Single 3D grid: {match.params.postId}</h3>
      </div>
    )
  }
}

export default Single;