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
        
        <div className="columns">
          <div className="column col-12">
            {!this.state.showMore &&
              <button className="btn btn-primary btn-block" onClick={this.toggleShowMore}>Show All Results</button>
            }
            {this.state.showMore &&
              <button className="btn btn-block" onClick={this.toggleShowMore}>Show Only Best Result</button>
            }
          </div>
        </div>
        
        <div className="container">
          <div className="columns">
            <MovieLayout movie={this.props.bestResult} posterUrl={true} />
            
            {this.state.showMore &&
              this.props.allResults.map((movie, i) => i > 0 ? 
                <MovieLayout 
                  key={i} 
                  movie={movie} 
                  posterUrl={true} /> 
                : false
              )
            }
          </div>
        </div>
      </div>
    );
  }

}

export default SearchDisplay;
