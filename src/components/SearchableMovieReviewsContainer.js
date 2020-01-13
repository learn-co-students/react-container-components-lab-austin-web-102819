import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "JalPmt6CezvNzcvkZhRT9wBaO8GCjbG9";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { reviews: [], searchTerm: "" };
  }

  handleSubmit = e => {
    e.preventDefault();

    console.log(URL + e.target.searchText.value);
    this.setState({ searchTerm: e.target.searchText.value });

    fetch(URL + this.state.searchTerm)
      .then(resp => resp.json())
      .then(data => this.setState({ reviews: data.results }));
  };

  render() {
    return (
      <div>
        <div className="searchable-movie-reviews">
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="searchText"></input>
            <button>Search</button>
          </form>
        </div>
        <div className="review-list">
          {this.state.reviews.map(review => (
            <MovieReviews review={review} />
          ))}
        </div>
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
