import React, { Component } from 'react';
import logo from './assets/ml.svg';
import './app.css';
import Header from './partials/header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Modulation Labs</h1>
      </div>
    );
  }
}

export default App;
