import React, { Component } from 'react';
import Movie from './components/Movie';
import MovieForm from './components/MovieForm';

class App extends Component {
  state = {
    title: '',
    director: '',
    click: false
  }

  handleMovieSubmit = (title, director) => {
    this.setState({
      title,
      director
    })
  }

  updateClick = () => {
    this.setState({
      click: !this.state.click
    })
  }

  render() {
    return (
      <div>
        <h2>App...</h2>
        <MovieForm onMovieSubmit={this.handleMovieSubmit} />
        <Movie title={this.state.title} director={this.state.director} />
        <div>
          Click: {this.state.click.toString()}
        </div>
        <button onClick={this.updateClick}>Update Click</button>
      </div>
    )
  }
}

export default App;
