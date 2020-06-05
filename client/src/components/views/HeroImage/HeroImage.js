import React from 'react';
import PropTypes from 'prop-types';

import { StyledHeroImage } from './StyledHeroImage';

const HeroImage = ({ image, title, text }) => (
  <StyledHeroImage image={image}>
    <div className="heroimage-content">
      <div className="heroimage-text">
        <h1>{title}</h1>
        <p>{text.slice(0,208)}{text.length > 208 ? '......' : ' '}</p>
      </div>
        
    </div>
    <img src="images/dashwave.png" alt=""/>
    
  </StyledHeroImage>
)

HeroImage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
}

export default HeroImage;