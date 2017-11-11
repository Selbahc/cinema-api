import React, { Component } from 'react';
import AddFavorite from './AddFavorite';

class MovieLayout extends Component {

  render() {
    const poster = `https://image.tmdb.org/t/p/w500/${this.props.movie.poster_path}`;
    return (
      <div className="column col-3">
        <div className="overview">
          <div>
            <h1 style={{display:"inlineBlock"}}>{this.props.movie.title}</h1>
            <AddFavorite favorite={this.props.movie} poster={poster}/>
          </div>
          <h2>{this.props.movie.original_title}</h2>
          <p><i>{this.props.movie.release_date.slice(0,4)}</i></p>
          <p>{this.props.movie.overview}</p>
        </div>
        <div>
          <img className="img-responsive" src={poster} alt="Movie Poster"/>
        </div>
      </div>
    );
  }

}

export default MovieLayout;
