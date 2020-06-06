import React, { useState } from "react";

// import Components

import Header from "./views/Header/Header";
import HeroImage from "./views/HeroImage/HeroImage";
import SearchBar from "./views/SearchBar/SearchBar";
import Grid from "./views/Grid/Grid";
import SeriesThumb from "./views/SeriesThumb/SeriesThumb";
import LoadMoreBtn from "./views/LoadMore/LoadMoreBtn";
import Spinner from "./views/Spinner/Spinner";
import Footer from "./views/Footer/Footer";

// Custom Hook
import { useHomeFetch } from "./hooks/useHomeFetch";

import NoImage from "./images/no_image.jpg";


import {
  POPULAR_BASE_URL,
  SEARCH_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
} from "../config";


const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [
    {
      state: { series, currentPage, totalPages, heroImage },
      loading,
      error,
    },
    fetchSeries,
  ] = useHomeFetch(searchTerm);

  const searchSeries = (search) => {
    const endpoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL;

    setSearchTerm(search);
    fetchSeries(endpoint);
  };

  const loadMoreSeries = () => {
    const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${
      currentPage + 1
    }`;
    const popularEndpoint = `${POPULAR_BASE_URL}&page=${currentPage + 1}`;

    const endpoint = searchTerm ? searchEndpoint : popularEndpoint;

    fetchSeries(endpoint);
  };

  if (error) return <div>Something went wrong ...</div>;
  if (!series[0]) return <Spinner />;

  return (
    <>
      <Header mode={true} />

      {!searchTerm && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
          title={heroImage.name}
          text={heroImage.overview}
        />
      )}
      <SearchBar callback={searchSeries} />

      <Grid header={searchTerm ? "Search Result" : "Popular TV SHOW"}>
        {series.map((serie) => (
          <SeriesThumb
            key={serie.id}
            clickable
            image={
              serie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + serie.poster_path
                : NoImage
            }
            seriesId={serie.id}
            seriesName={serie.name}
          />
        ))}

      </Grid>

      {loading && <Spinner />}
      {currentPage < totalPages && !loading && (
        <LoadMoreBtn text="Load More" callback={loadMoreSeries} />
      )}

      <Footer />

    </>
  );
};

export default Dashboard;
