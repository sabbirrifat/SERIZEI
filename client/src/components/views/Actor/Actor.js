import React from "react";
import PropTypes from "prop-types";

import NoImage from "../../images/no_image.jpg";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../../../config";

import "./Actor.css";

const Actor = ({ actor }) => (
  <div className="styleActor">
    <img
      src={
        actor.profile_path
          ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
          : NoImage
      }
      alt="actorthumb"
    />
    <span className="actor-name">{actor.name}</span>
    <span className="actor-character">{actor.character}</span>
  </div>
);

Actor.propTypes = {
  actor: PropTypes.string,
};

export default Actor;
