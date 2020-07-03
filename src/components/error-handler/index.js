import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    return hasError ? <></> : children;
  }
}

ErrorHandler.propTypes = {
  children: PropTypes.any,
};

export default ErrorHandler;
