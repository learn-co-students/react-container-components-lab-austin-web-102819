import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "JalPmt6CezvNzcvkZhRT9wBaO8GCjbG9";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { reviews: [] };
  }

  componentDidMount() {
    fetch(URL)
      .then(resp => resp.json())
      .then(
        data => this.setState({ reviews: data.results })
        // data => console.log(data.results)
      );
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <div className="review-list">
          {this.state.reviews.map(review => (
            <MovieReviews review={review} />
          ))}
        </div>
      </div>
    );
  }
}

export default LatestMovieReviewsContainer;
