import React from "react";
import PropTypes from "prop-types";

import NoImage from "../../images/no_image.jpg";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../../config";

import SeriesThumb from "../SeriesThumb/SeriesThumb";

import { StyledSeriesInfo } from "./StyledSeriesInfo";

import Favorite from "./section/favorite";

const SeriesInfo = ({ series }) => (
  <StyledSeriesInfo backdrop={series.backdrop_path}>
    <div className="seriesinfo-content">
      <div className="seriesinfo-thumb">
        <SeriesThumb
          image={
            series.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${series.poster_path}`
              : NoImage
          }
          clickable={false}
          alt="seriesthumb"
        />
      </div>
      <div className="seriesinfo-text">
        <h1>{series.name}</h1>
        <h3>PLOT</h3>
        <p>{series.overview}</p>

        <div className="rating-director">
          <div>
            <h3>IMDB RATING</h3>
            <div className="score">{series.vote_average}</div>
          </div>
          <div className="director">
            <h3>DIRECTOR{series.created_by.length > 1 ? "S" : ""}</h3>
            {series.created_by.map((element) => (
              <p key={element.credit_id}>{element.name}</p>
            ))}
          </div>
          <div className="addToFav">
            <Favorite
              seriesInfo={series}
              seriesId={series.id}
              userFrom={localStorage.getItem("userId")}
            />
          </div>
        </div>
      </div>
    </div>
  </StyledSeriesInfo>
);

SeriesInfo.propTypes = {
  series: PropTypes.object,
  directors: PropTypes.array,
};

export default SeriesInfo;
