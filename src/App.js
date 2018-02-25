import React, { Component } from 'react';

import './App.css';
import LightHeader from './Components/LightHeader'
import DarkNavBar from './Components/DarkNavBar'
import List from './Components/ArticleList'

class App extends Component {
  render() {
    return (
      <div className="container">
          <LightHeader/>
          <DarkNavBar/>
          <List/>
      </div>
    );
  }
}

export default App;
