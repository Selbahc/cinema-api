import React, { Component } from "react";
import MovieLayout from "./MovieLayout";

class GetFavorites extends Component {

	componentDidMount() {
		fetch('http://localhost:3001/favorites')
			.then(res => res.json())
			.then(favorites => this.setState({favorites : favorites}))
	}

	render() {
		return (
			<div className="container">
				<div className="columns">
					{this.state &&
						this.state.favorites.map((fav, key) => <MovieLayout key={key} movie={fav} posterUrl={false} />)
					}
				</div>
			</div>
		);
	}
}

export default GetFavorites;