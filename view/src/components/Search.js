import React, { Component } from 'react';
import SearchDisplay from './SearchDisplay';

class Search extends Component {
  state = {
      query: '',
      allResults: '',
      bestResult: ''
  }

  fetchQuery(e) {
    this.setState({query: e.target.value});

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=737bb3a99bc114b5e28fb839797cf86a&language=fr-FR&query=${this.state.query}&page=1&include_adult=false`)
      .then((response) => response.json())
      .then((responseObject) => {
        if (responseObject.results) {
          this.setState({
            bestResult: {
              original_title : responseObject.results[0].original_title,
              title: responseObject.results[0].title,
              overview: responseObject.results[0].overview,
              poster_path: responseObject.results[0].poster_path,
              release_date: responseObject.results[0].release_date
            },
            allResults: responseObject.results
          });
        }
      })
      .catch(err =>  console.log(err))
  }

  render() {
    return (
      <div className="container">
        
        <input 
          className="form-input" 
          type="text" 
          name="query" 
          placeholder="Search a movie..." 
          value={this.state.query} 
          onChange={(e) => this.fetchQuery(e)}
        />

        {this.state.allResults && this.state.query &&
          <SearchDisplay
            bestResult={this.state.bestResult}
            allResults={this.state.allResults}/>
        }
      </div>
    );
  }

}

export default Search;
