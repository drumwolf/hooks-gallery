import React, { useState } from 'react';
import './Gallery.css';

function GalleryPhoto(props) {
  return (<section className="gallery-frame">
    <img className="gallery-image" src={process.env.PUBLIC_URL + `/img/${ (props.imageData) ? props.imageData.filename : '' }`} />
  </section>);
}

function Gallery() {
  const IMAGES = [
    { filename: "diner.jpg",  name: "psychedelicatessen" },
    { filename: "joy.jpg",    name: "poster of joy" },
    { filename: "3heads.jpg", name: "the thing with 3 heads" },
    { filename: "beer.jpg",   name: "ice cold beer" },
    { filename: "sun.gif",    name: "sun god" },
    { filename: "hitman.gif", name: "here comes the hit man" },
    { filename: 'baseball.jpg', name: "baseball glory" },
    { filename: 'swd.jpg',      name: "swervin' and drivin'" },
    { filename: 'eleven.gif',   name: "turn the amps to eleven" },
    { filename: 'ocean.jpg',    name: "out to sea" },
    { filename: 'lisa.jpg',     name: "journey home" },
    { filename: 'street.jpg',   name: "down on the street" },
    { filename: 'reaper.jpg',   name: "don't fear the reaper" },
    { filename: 'frjtz.jpg',    name: "the light in the forest" },
    { filename: 'deejay.jpg',   name: "hey mister deejay" },
    { filename: 'chester.gif',  name: "we are not neanderthal" }
  ];
  let [index, setIndex] = useState(0);

  const incrementCount = (inc) => {
    setIndex( (index + inc + IMAGES.length) % IMAGES.length );
  };

  return (
    <div className="gallery">
      <h2 className="gallery-header">{IMAGES[index].name}</h2>
      <GalleryPhoto imageData={IMAGES[index]} />
      <button className="gallery-btn-left" onClick={ incrementCount.bind(this, -1) }> - </button>
      <button className="gallery-btn-right" onClick={ incrementCount.bind(this, 1) }> + </button>
    </div>
  );
}

export default Gallery;
