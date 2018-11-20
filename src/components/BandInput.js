import React, { Component } from 'react';

class BandInput extends Component {

  state = {
    bandName: '',
    id: 0
  }

  handleOnChange(event) {
    this.setState({
      bandName: event.target.value,
      id: this.state.id + 1
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addBand(this.state.bandName);
    this.setState({
      bandName: '',
      id: 0,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default BandInput;
