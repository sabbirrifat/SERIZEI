import React from 'react';
import PropTypes from 'prop-types';



import './LoadMore.css';

const LoadMoreBtn = ({ text, callback }) => (
  <button className="loadMoreBtn" type="button" onClick={callback}>
    {text}
  </button>
)


LoadMoreBtn.propTypes = {
  text: PropTypes.string,
  callback: PropTypes.func,
}

export default LoadMoreBtn;