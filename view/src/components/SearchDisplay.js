import React, { Component } from 'react';
import MovieLayout from './MovieLayout';

class SearchDisplay extends Component {
  state = {
    showMore: false
  }
  toggleShowMore = () => {
    this.state.showMore === false ? this.setState({showMore: true}) : this.setState({showMore: false})
  }
  render() {
    return (
      <div>
        <MovieLayout movie={this.props.bestResult}/>

        {!this.state.showMore &&
          <button onClick={this.toggleShowMore}>Show more results</button>
        }
        {this.state.showMore &&
          <button onClick={this.toggleShowMore}>Show one result</button>
        }

        {this.state.showMore &&
          this.props.allResults.map((movie, i) => {
            if (i > 0 && i < 6) {
              return <MovieLayout key={i} movie={movie} />
            }
          })
        }
      </div>
    );
  }

}

export default SearchDisplay;
