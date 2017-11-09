import React, { Component } from 'react';
import SearchDisplay from './SearchDisplay';

class Search extends Component {
  state = {
      query: '',
      allResults: '',
      bestResult: ''
  }

  fetchQuery(e) {
    e.preventDefault();
    this.setState({query: e.target.value});
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=737bb3a99bc114b5e28fb839797cf86a&language=fr-FR&query=${this.state.query}&page=1&include_adult=false`)
      .then((response) => response.json())
      .then((allResults) => {
        this.setState({
          bestResult: {
            original_title : allResults.results[0].original_title,
            title: allResults.results[0].title,
            overview: allResults.results[0].overview,
            poster_path: allResults.results[0].poster_path,
            release_date: allResults.results[0].release_date
          },
          allResults: allResults.results
          });
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <input type="text" name="query" value={this.state.query} onChange={(e) => this.fetchQuery(e)}/>

        {this.state.query &&
          <SearchDisplay
            bestResult={this.state.bestResult}
            allResults={this.state.allResults}/>
        }
      </div>
    );
  }

}

export default Search;
