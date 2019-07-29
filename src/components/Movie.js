import React from 'react'

const Movie = (props) => {
  return (
    <div>
      <h3>
        Title: {props.title}
      </h3>
      <h3>
        Director: {props.director}
      </h3>
    </div>
  )
}

Movie.defaultProps = {
  title: "Title Unknown...",
  director: "Unknown"
}

export default Movie;