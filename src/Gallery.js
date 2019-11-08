import React, { useState } from 'react';
import './Gallery.css';

const GalleryPhoto = props => {
  const imageIndex = [
    'Stooges.jpg', 'JAMC.jpg', 'MBV.jpg'
  ];
  return  (<section className="gallery-count">
    <img className="gallery-image" src={`/img/${imageIndex[props.count]}`} />
  </section>);
}

const Gallery = () => {
  let [count, setCount] = useState(0);
  let [max] = useState(7);

  const incrementCount = (inc) => {
    setCount( (count + inc + max) % max );
  };

  return (
    <div className="carousel">
      <GalleryPhoto count={count} />
      <button className="gallery-btn" onClick={ incrementCount.bind(this, -1) }> - </button>
      <button className="gallery-btn" onClick={ incrementCount.bind(this, 1) }> + </button>
    </div>
  );
}

export default Gallery;
