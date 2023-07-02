import React from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import { getMovie, getMovieImages } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import TemplateMediaDetailsPage from "../components/templateMediaDetailsPage";
import MediaImageList from "../components/imageLists/mediaImageList";
import MediaHeader from "../components/MediaHeader";
import MediaHeaderInsert from "../components/headerInserts/MediaHeaderInsert";

const MovieDetailsPage = () => {
  const { id } = useParams();

  const { data: movie, error: movieError, isLoading: movieLoading, isError: isMovieError } = useQuery(
    ["movie", { id }],
    getMovie
  );

  const { data: images, error: movieImagesError, isLoading: movieImagesLoading, isError: isMovieImagesError } = useQuery(
    ["movieImages", { id: id }],
    getMovieImages
  );
  let posters;
  if (images) {
    posters = images.posters;
  }
  
  if (movieImagesLoading || movieLoading) {
    return <Spinner />;
  }

  if (isMovieImagesError || isMovieError) {
    return <h1>{movieImagesError?.message || movieError?.message}</h1>;
  }

  return (
    <>
      {movie && images && (
        <TemplateMediaDetailsPage>
          <MediaHeader>
            <MediaHeaderInsert media={movie} />
          </MediaHeader>  
          <MediaImageList images={posters} />
          <MovieDetails movie={movie} />
        </TemplateMediaDetailsPage>
      )}
      {!movie || !images && (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MovieDetailsPage;
