import React, { Component } from 'react';

class MovieLayout extends Component {

  render() {
    return (
      <div className="column col-3">
        <h1>{this.props.movie.title}</h1>
        <h2>{this.props.movie.original_title}</h2>
        <p><i>{this.props.movie.release_date}</i></p>
        <p>{this.props.movie.overview}</p>
        <div>
          <img className="img-responsive" src={`https://image.tmdb.org/t/p/w500/${this.props.movie.poster_path}`} alt="Movie Poster"/>
        </div>
      </div>
    );
  }

}

export default MovieLayout;
