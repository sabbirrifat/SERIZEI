import React from 'react';
import PropTypes from 'prop-types';
import './Grid.css';




const Grid = ({ header, children }) => (
  <div className="gridStyle">
    <h1>{header}</h1>
    <div className="gridContentStyle">{children}</div>
  </div>
)



Grid.propTypes = {
  header: PropTypes.string,
}

export default Grid;