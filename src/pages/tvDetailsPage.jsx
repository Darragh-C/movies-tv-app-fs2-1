import React from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateTvPage";
import { getShow } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const TvDetailsPage = () => {
  const { id } = useParams();
  console.log(`show id at tvDetailsPage: ${id}`);

  const { data: show, error, isLoading, isError } = useQuery(
    ["show", { id: id }],
    getShow
  );
  
  if (show) {
    console.log(`show object at tvDetailsPage: ${show}`);
 
    console.log("show at tvDetailsPage:");
    Object.keys(show).forEach(key => {
      console.log(`${key}: ${show[key]}`);
    });
  }

  


  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  if (show) {
    return (
      <>
        {show ? (
          <>
            <PageTemplate show={show}>
              <MovieDetails movie={show} />
            </PageTemplate>
          </>
        ) : (
          <p>Waiting for TV show details</p>
        )}
      </>
    );
  }
};

export default TvDetailsPage;
