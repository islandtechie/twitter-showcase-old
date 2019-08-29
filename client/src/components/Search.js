import React, { Component } from 'react'

class Search extends Component {
  state = {
    text: ''
  }

  onChange = e => {
    this.setState({ text: e.target.value});
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.setSearchText(this.state.text);
    this.setState({ text : ''});
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input 
          type="text" 
          id={this.props.inputID} 
          placeholder={this.props.placeHolder}  
          onChange={this.onChange}
          value={this.state.text}
        />

        <input type="submit" name="" id="" hidden/>
      </form> 
    )
  }
}

export default Search;
