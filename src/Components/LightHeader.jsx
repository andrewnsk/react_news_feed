import React from 'react';
import logo from '../logo.svg';
import { connect } from "react-redux";


const mapStateToProps = state => {
    return { header: state.header };
};

class ConnectedLightHeader extends React.Component {
  constructor(props) {
    super(props);

    this.logIn = this.logIn.bind(this);
    this.state = {
      isLoggedIn: false
    };
  }
  logIn() {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    });
  }

  render() {
      const isLoggedIn = this.state.isLoggedIn;
    return (
    <header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1">

          </div>
          <div className="col-4 text-center">
            <a className="blog-header-logo text-dark" href="#"><img src={logo} className="App-logo" alt="logo" />{this.props.header.title}</a>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <a className="text-muted" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-3">
                  <circle cx="10.5" cy="10.5" r="7.5"></circle>
                  <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
              </svg>
            </a>
            <a className="btn btn-sm btn-outline-secondary" onClick={this.logIn}>{isLoggedIn ? 'Log out' : 'Log in'}</a>
          </div>
        </div>
      </header>
    );
  }
}


const LightHeader = connect(mapStateToProps)(ConnectedLightHeader);
export default LightHeader;