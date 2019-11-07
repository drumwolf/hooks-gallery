import React, { useState } from 'react';
import './PhotoCarousel.css';

const AppBtn = props => {
  return  <div className="carousel-count">{props.count}</div>;
}

const PhotoCarousel = () => {
  let [count, setCount] = useState(0);
  let [max] = useState(7);

  const incrementCount = (inc) => {
    setCount( (count + inc + max) % max );
  };

  return (
    <div className="carousel">
      <AppBtn count={count} />
      <button className="carousel-btn" onClick={ incrementCount.bind(this, -1) }> - </button>
      <button className="carousel-btn" onClick={ incrementCount.bind(this, 1) }> + </button>
    </div>
  );
}

export default PhotoCarousel;
