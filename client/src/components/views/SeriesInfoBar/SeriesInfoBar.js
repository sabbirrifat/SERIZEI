import React from "react";
import FontAwesome from "react-fontawesome";
import PropTypes from "prop-types";
import "./SeriesInfoBar.css";

const SeriesInfoBar = ({ time, budget, revenue }) => (
  <div className="seriesInfoBar">
    <div className="seriesinfobar-content">
      <div className="seriesinfobar-content-col">
        <FontAwesome className="fa-time" name="clock-o" size="2x" />
        <span className="seriesinfobar-info">Seasons: {time}</span>
      </div>

      <div className="seriesinfobar-content-col">
        <FontAwesome className="fa-budget" name="rocket" size="2x" />
        <span className="seriesinfobar-info">Started: {budget}</span>
      </div>

      <div className="seriesinfobar-content-col">
        <FontAwesome className="fa-revenue" name="ticket" size="2x" />
        <span className="seriesinfobar-info">Status: {revenue}</span>
      </div>
    </div>
  </div>
);

SeriesInfoBar.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number,
};

export default SeriesInfoBar;
