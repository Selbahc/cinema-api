import React, { Component } from 'react';
import AddFavorite from './AddFavorite';

class MovieLayout extends Component {
  render() {
    return (
      <div className="MovieLayout column col-3">
        <div className="overview">
          <div>
            <h1 style={{display:"inlineBlock"}}>{this.props.movie.title}</h1>
            
            {this.props.posterUrl &&
              <AddFavorite favorite={this.props.movie} poster={`https://image.tmdb.org/t/p/w500/${this.props.movie.poster_path}`}/>
            }
          </div>
          <h2>{this.props.movie.original_title}</h2>
          <p><i>{this.props.movie.release_date.slice(0,4)}</i></p>
          <p>{this.props.movie.overview}</p>
        </div>
        
        {this.props.posterUrl &&
          <div>
            <img className="img-responsive" src={`https://image.tmdb.org/t/p/w500/${this.props.movie.poster_path}`} alt="Movie Poster"/>
          </div>
        }
        {!this.props.posterUrl &&
          <div>
            <img className="img-responsive" src={`${process.env.PUBLIC_URL}/uploads/${this.props.movie.poster_path}`} alt="Movie Poster"/>
          </div>
        }
      
      </div>
    );
  }

}

export default MovieLayout;
