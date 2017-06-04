// @flow
import React, { Component } from 'react';
import logo from '../images/components/logo.svg';
import '../style/components/port.css';

class Port extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro">
          測試照片傳入，以及測試 SASS 編譯效果
        </p>
      </div>
    );
  }
}

export default Port;
