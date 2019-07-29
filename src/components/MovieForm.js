import React, { Component } from 'react';

class MovieForm extends Component {
  state = {
    title: '',
    director: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onMovieSubmit(this.state.title, this.state.director)
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
          <input type="text" name="director" value={this.state.director} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default MovieForm;