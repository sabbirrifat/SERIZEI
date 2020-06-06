import React from "react";

// Components

import SeriesInfo from "./views/SeriesInfo/SeriesInfo";
import SeriesInfoBar from "./views/SeriesInfoBar/SeriesInfoBar";
import Actor from "./views/Actor/Actor";
import Grid from "./views/Grid/Grid";
import Spinner from "./views/Spinner/Spinner";
import Header from "./views/Header/Header";
import Footer from "./views/Footer/Footer";

//Custom Hook


import { useSeriesFetch } from "./hooks/useSeriesFetch";

const Series = (props) => {
  const seriesId = props.match.params.seriesId;
  const [series, loading, error] = useSeriesFetch(seriesId);
  if (error) return <div>Something went wrong ...</div>;
  if (loading) return <Spinner />;

  return (
    <>
      <Header mode={true} />

      <SeriesInfo series={series} />
      
      <SeriesInfoBar
        time={series.number_of_seasons}
        budget={series.first_air_date}
        revenue={series.status}
      />

      <Grid header="Actors">
        {series.actors.map((actor) => (
          <Actor key={actor.credit_id} actor={actor} />
        ))}
      </Grid>

      <Footer />
    
    </>
  );
};

export default Series;
