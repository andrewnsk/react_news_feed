import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

class MySimpleComponent extends Component {
  render() {
    return (
      <div className="simple-component">

        <p className="lead">{ this.props.name }</p>
          <Button color="danger">Danger!</Button>
      </div>
    );
  }
}

MySimpleComponent.defaultProps = {
  name: 'Default test string for this app'
};


MySimpleComponent.propTypes = {
  name: PropTypes.string
};
export default MySimpleComponent;
