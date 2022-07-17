import React from "react";

import ReactStars from "react-rating-stars-component";

const stars = {
  size: 30,
  value: 4.5,
  edit: false
};


export default function Stars() {
  return (
    <div className="App">
      <h4>Rating for this article</h4>
      <ReactStars {...stars} />
      <p> 80 % positive reviews</p>
      
    </div>
  );
}
