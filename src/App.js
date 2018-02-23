import React, { Component } from 'react';

import './App.css';
import LightHeader from './Components/LightHeader'
import MySimpleComponent from './Components/MySimpleComponent'
import DarkNavBar from './Components/DarkNavBar'

class App extends Component {
  render() {
    return (
      <div className="container">
        <LightHeader/>
        <DarkNavBar/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

          <MySimpleComponent />
      </div>
    );
  }
}

export default App;
