import React from "react";

// Components

import MovieInfo from "./views/MovieInfo/MovieInfo";
import MovieInfoBar from "./views/MovieInfoBar/MovieInfoBar";
import Actor from "./views/Actor/Actor";
import Grid from "./views/Grid/Grid";
import Spinner from "./views/Spinner/Spinner";
import Header from "./views/Header/Header";
import Footer from "./views/Footer/Footer";

//Custom Hook


import { useMovieFetch } from "./hooks/useMovieFetch";

const Movie = (props) => {
  const movieId = props.match.params.movieId;
  const [movie, loading, error] = useMovieFetch(movieId);
  console.log(movieId);
  console.log(error);
  if (error) return <div>Something went wrong ...</div>;
  if (loading) return <Spinner />;

  return (
    <>
      <Header mode={true} />

      <MovieInfo movie={movie} />
      
      <MovieInfoBar
        time={movie.number_of_seasons}
        budget={movie.first_air_date}
        revenue={movie.status}
      />

      <Grid header="Actors">
        {movie.actors.map((actor) => (
          <Actor key={actor.credit_id} actor={actor} />
        ))}
      </Grid>

      <Footer />
    
    </>
  );
};

export default Movie;
