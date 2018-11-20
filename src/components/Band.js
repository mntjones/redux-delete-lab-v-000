import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        <li>{props.name}</li>
      </div>
    );
  }
};

export default Band;
