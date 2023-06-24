import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getTvSeries } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'

const TvSeriesPage = (props) => {
  const { data, error, isLoading, isError } = useQuery("tvseries", getTvSeries);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const tvShows = data ? data.results : [];

  // Redundant, but necessary to avoid app crashing.
  // const favourites = movies.filter((m) => m.favorite);
  // localStorage.setItem("favourites", JSON.stringify(favourites));
  // const addToFavourites = (movieId) => true;

  return (
    <PageTemplate
      title="Discover TV Series"
      movies={tvShows}
      action={(tvShow) => {
        return <AddToFavouritesIcon movie={tvShow} />
      }}
    />
  );
};
export default TvSeriesPage;
