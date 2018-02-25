import React, { Component } from 'react';

import './App.css';
import LightHeader from './Components/LightHeader'
import DarkNavBar from './Components/DarkNavBar'
import List from './Components/ArticleList'
import Form from './Components/Form'

class App extends Component {
  render() {
    return (
      <div className="container">
          <LightHeader/>
          <DarkNavBar/>
          <div className="row">
              <div className="col-md-8 blog-main">
                  <List/>
              </div>

              <aside className="col-md-4 blog-sidebar">
                  <div className="p-3 mb-3 bg-light rounded">
                      <Form/>
                  </div>
              </aside>
          </div>
      </div>
    );
  }
}

export default App;
