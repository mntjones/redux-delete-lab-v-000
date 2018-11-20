import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        <li>{this.props.name}</li>
        <button onClick={() => props.delete(props.band.id)}>DELETE</button>

      </div>
    );
  }
};

export default Band;
