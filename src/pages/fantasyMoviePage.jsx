import React from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import { getMovie, getMovieImages, getCast } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import TemplateMediaDetailsPage from "../components/templateMediaDetailsPage";
import MediaImageList from "../components/imageLists/mediaImageList";
import MediaHeader from "../components/MediaHeader";
import MediaHeaderInsert from "../components/headerInserts/MediaHeaderInsert";

const FantasyMoviePage = () => {

  return (
    <>
      {movie && images && (
        <TemplateMediaDetailsPage>
          <MediaHeader>
            <FantasyMovieHeaderInsert media={movie} />
          </MediaHeader>  
          <FantasyMoviePoster images={posters} />
          <FantasyMovieDetails movie={movie} cast={cast.cast}/>
        </TemplateMediaDetailsPage>
      )}
      {!movie || !images && (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default FantasyMoviePage;
