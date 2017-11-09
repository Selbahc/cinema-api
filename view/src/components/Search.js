import React, { Component } from 'react';

class Search extends Component {
  state = {
      query: '',
      queryResult: '',
      sortedResult: {}
  }

  fetchQuery(e) {
    e.preventDefault();

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=737bb3a99bc114b5e28fb839797cf86a&language=fr-FR&query=${this.state.query}&page=1&include_adult=false`)
      .then((response) => response.json())
      .then((queryResult) => {
        this.setState({
          sortedResult: {
            originalTitle : queryResult.results[0].original_title,
            title: queryResult.results[0].title,
            overview: queryResult.results[0].overview,
            img: queryResult.results[0].poster_path,
            date: queryResult.results[0].release_date
          },
          queryResult
          });
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <form onSubmit={(e) => this.fetchQuery(e)}>
        <input type="text" name="query" value={this.state.query} onChange={(e) => this.setState({query: e.target.value})}/>
      </form>
    );
  }

}

export default Search;
