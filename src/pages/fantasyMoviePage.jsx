import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import { getMovie, getMovieImages, getCast } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import TemplateMediaDetailsPage from "../components/templateMediaDetailsPage";
import MediaImageList from "../components/imageLists/mediaImageList";
import MediaHeader from "../components/MediaHeader";
import MediaHeaderInsert from "../components/headerInserts/MediaHeaderInsert";
import FantasyMoviePoster from "../components/imageLists/fantasyMoviePoster";
import FantasyMovieDetails from "../components/fantasyMovieDetails";
import FastasyMediaHeaderInsert from "../components/headerInserts/fantasyMovieHeaderInsert";

const FantasyMoviePage = () => {

  
  const [movie, setMovie] = useState({
    title: "",
    overview: "",
  });

  const handleUpdate = (data) => {
    const {name, value} = data;

    if (name === "title") {
      handleTitleUpdate(value)
    } else if (name === "overview") {
      handleOverviewUpdate(value)
    }
  };

  const handleTitleUpdate = (data) => {
    setMovie((prevMovie) => ({
      ...prevMovie,
      title: data,
    }));
  };

  const handleOverviewUpdate = (data) => {
    setMovie((prevMovie) => ({
      ...prevMovie,
      overview: data,
    }));
  };

  return (
    <>
      <TemplateMediaDetailsPage>
        <MediaHeader>
          <FastasyMediaHeaderInsert title={movie.title}/>
        </MediaHeader>
        <FantasyMoviePoster />
        <FantasyMovieDetails movie={movie} action={handleUpdate}/>
      </TemplateMediaDetailsPage>
    </>
  );
};

export default FantasyMoviePage;
