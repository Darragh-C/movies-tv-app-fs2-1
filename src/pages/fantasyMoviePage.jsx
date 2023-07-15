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
    genres: [],
    cast: [],
  });

  const handleUpdate = (data) => {
    const {type, value} = data;

    if (type === "title") {
      handleTitleUpdate(value)
    } else if (type === "overview") {
      handleOverviewUpdate(value)
    } else if (type === "genre") {
      handleGenreUpdate(value)
    } else if (type === "cast") {
      handleCastUpdate(value)
    }
  };

  const handleTitleUpdate = (val) => {
    setMovie((prevMovie) => ({
      ...prevMovie,
      title: val,
    }));
  };

  const handleOverviewUpdate = (val) => {
    setMovie((prevMovie) => ({
      ...prevMovie,
      overview: val,
    }));
  };

  const handleGenreUpdate = (val) => {
    console.log(`handleGenreUpdate: ${val}`)
    setMovie((prevMovie) => ({
      ...prevMovie,
      genres: [...prevMovie.genres, val]
    }));
  };

  const handleCastUpdate = (val) => {
    console.log(`handleCastUpdate: ${val}`)
    setMovie((prevMovie) => ({
      ...prevMovie,
      cast: [...prevMovie.cast, val]
    }));
    console.log(`genre val: ${val}`)
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
