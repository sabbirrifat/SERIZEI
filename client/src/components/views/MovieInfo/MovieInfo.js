import React from "react";
import PropTypes from "prop-types";

import NoImage from "../../images/no_image.jpg";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../../config";

import MovieThumb from "../MovieThumb/MovieThumb";

import { StyledMovieInfo } from "./StyledMovieInfo";

import Favorite from "./section/favorite";

const MovieInfo = ({ movie }) => (
  <StyledMovieInfo backdrop={movie.backdrop_path}>
    <div className="movieinfo-content">
      <div className="movieinfo-thumb">
        <MovieThumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
          alt="moviethumb"
        />
      </div>
      <div className="movieinfo-text">
        <h1>{movie.name}</h1>
        <h3>PLOT</h3>
        <p>{movie.overview}</p>

        <div className="rating-director">
          <div>
            <h3>IMDB RATING</h3>
            <div className="score">{movie.vote_average}</div>
          </div>
          <div className="director">
            <h3>DIRECTOR{movie.created_by.length > 1 ? "S" : ""}</h3>
            {movie.created_by.map((element) => (
              <p key={element.credit_id}>{element.name}</p>
            ))}
          </div>
          <div className="addToFav">
            <Favorite
              movieInfo={movie}
              movieId={movie.id}
              userFrom={localStorage.getItem("userId")}
            />
          </div>
        </div>
      </div>
    </div>
  </StyledMovieInfo>
);

MovieInfo.propTypes = {
  movie: PropTypes.object,
  directors: PropTypes.array,
};

export default MovieInfo;
