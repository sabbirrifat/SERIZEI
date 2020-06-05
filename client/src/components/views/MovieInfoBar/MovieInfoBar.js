import React from "react";
import FontAwesome from "react-fontawesome";
import PropTypes from "prop-types";
import "./MovieInfoBar.css";

const MovieInfoBar = ({ time, budget, revenue }) => (
  <div className="movieInfoBar">
    <div className="movieinfobar-content">
      <div className="movieinfobar-content-col">
        <FontAwesome className="fa-time" name="clock-o" size="2x" />
        <span className="movieinfobar-info">Seasons: {time}</span>
      </div>

      <div className="movieinfobar-content-col">
        <FontAwesome className="fa-budget" name="rocket" size="2x" />
        <span className="movieinfobar-info">Started: {budget}</span>
      </div>

      <div className="movieinfobar-content-col">
        <FontAwesome className="fa-revenue" name="ticket" size="2x" />
        <span className="movieinfobar-info">Status: {revenue}</span>
      </div>
    </div>
  </div>
);

MovieInfoBar.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number,
};

export default MovieInfoBar;
