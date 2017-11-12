import React, { Component } from 'react';

class AddFavorite extends Component {

	postFavorite = () => {
		fetch(this.props.poster)
			.then(res => res.blob())
			.then(img => {
				const formData = new FormData();
				
				formData.append("date", this.props.favorite.release_date.slice(0,4));
				formData.append("overview", this.props.favorite.overview);
				formData.append("title", this.props.favorite.title);
				formData.append("originalTitle", this.props.favorite.original_title);
				formData.append("poster", img);

				const request = new XMLHttpRequest();
				request.open("POST", "http://localhost:3001/favorites/new");
				request.send(formData);
			})
		
	}

	render() {
		return (
			<div 
				className="label-success label" 
				style={{display:"inlineBlock"}}
				onClick={this.postFavorite}>
					<i className="icon icon-plus"></i>
			</div>
		);
	}
}

export default AddFavorite;