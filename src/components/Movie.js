import React, { useEffect, useRef } from "react";
import { Container, Image } from "react-bootstrap";
import gsap, { Power2 } from "gsap";

export default function Movie({ movie }) {
  const ref = useRef();
  useEffect(() => {
    gsap.from(ref.current, 0.5, {
      opacity: 0,
      scale: 0.5,
      ease: Power2.easeOut,
    }).then(() => {
      gsap.to(".img",1,{
        opacity:1,
        scale:1.05,
        ease:Power2.easeInOut
      })
    })
  }, []);

  return (
    <div ref={ref} className="movie-container">
      <Image
        className="img"
        style={{ height: "500px" }}
        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        rounded
      />
      <h4 className="py-3">{movie.title}</h4>
    </div>
  );
}
