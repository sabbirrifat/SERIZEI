import React from "react";
import PropTypes from "prop-types";
import "./MovieThumb.css";

const MovieThumb = ({ image, movieId, clickable }) => (
  <div className="movieThumb">
    {clickable ? (
      <a href={`/tv/${movieId}`}>
        <img className="clickable" src={image} alt="moviethumb" />
      </a>
    ) : (
      <img src={image} alt="moviethumb" />
    )}
  </div>
);

MovieThumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
};

export default MovieThumb;
