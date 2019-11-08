import React, { useState } from 'react';
import './Gallery.css';

/***** second-level components *****/
function GalleryBtn(props) {
  const classSelector = `gallery-btn-${props.direction || 'left'}`;
  const char = (props.direction === 'left') ? '-' : '+';
  return <button className={classSelector} onClick={props.onBtnClick}>{char}</button>;
}

function GalleryPhoto(props) {
  return (<section className="gallery-frame">
    <img className="gallery-image" src={process.env.PUBLIC_URL + `/img/${ (props.imageData) ? props.imageData.filename : '' }`} />
  </section>);
}

/***** top-level component *****/
function Gallery() {
  const [index, setIndex] = useState(0);
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
  const incrementIndex = (inc) => {
    setIndex( (index + inc + IMAGES.length) % IMAGES.length );
  };

  return (
    <div className="gallery">
      <h2 className="gallery-header">{IMAGES[index].name}</h2>
      <GalleryPhoto imageData={IMAGES[index]} />
      <GalleryBtn direction="left"  onBtnClick={ incrementIndex.bind(this, -1) } />
      <GalleryBtn direction="right" onBtnClick={ incrementIndex.bind(this, 1) } />
      <p className="gallery-text">This is a collection of my early digital artwork from my younger days.
      I've titled this "Hooks Gallery" because it's my first project built with React Hooks.
      You can view the source code <a href="//github.com/drumwolf/hooks-gallery">here</a>.
      </p>
    </div>
  );
}

export default Gallery;
