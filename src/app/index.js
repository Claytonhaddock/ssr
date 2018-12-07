import React, { Component, PropTypes } from 'react';

export default class App extends Component {
  render() {
    const { name } = this.props;

    return (
      <div>
        <h1>hello {name.name}</h1>
      </div>
    );
  }
}
