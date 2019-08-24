import React, { Component, Fragment } from 'react'

class Button extends Component {
  render() {
    return (
      <Fragment>
        <button type="button" id={this.props.inputID} onClick={this.onClick}>{this.props.buttonText}</button>
      </Fragment>
    )
  }
}

export default Button;
