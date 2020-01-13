// Code MovieReviews Here
import React from "react";

const MoviewReviews = props => {
  // console.log(props);

  const { display_title, mpaa_rating, byline, headline } = props.review;
  return (
    <div className="review">
      <h3>{display_title}</h3>
      <p>{mpaa_rating}</p>
      <p>{byline}</p>
      <p>{headline}</p>
    </div>
  );
};

export default MoviewReviews;
