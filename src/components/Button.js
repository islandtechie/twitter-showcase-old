import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';

class Button extends Component {
  state = {
    redirect: false
  }
  onClick = e => {
    this.setState({ redirect: true});
  }
  render() {
    if (this.state.redirect) return <Redirect to={'/random-search'} />;
    return (
      <Fragment>
        <button type="button" id={this.props.inputID} onClick={this.onClick}>{this.props.buttonText}</button>
      </Fragment>
    )
  }
}

export default Button;
