import React from "react";
import PropTypes from "prop-types";
import "./SeriesThumb.css";

const SeriesThumb = ({ image, seriesId, clickable }) => (
  <div className="seriesThumb">
    {clickable ? (
      <a href={`/tv/${seriesId}`}>
        <img className="clickable" src={image} alt="seriesthumb" />
      </a>
    ) : (
      <img src={image} alt="seriesthumb" />
    )}
  </div>
);

SeriesThumb.propTypes = {
  image: PropTypes.string,
  seriesId: PropTypes.number,
  clickable: PropTypes.bool,
};

export default SeriesThumb;
