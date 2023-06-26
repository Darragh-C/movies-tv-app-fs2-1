import React from "react";
import { useParams } from "react-router-dom";
import TvDetails from "../components/tvDetails";
import PageTemplate from "../components/templateTvPage";
import { getTvSeason } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'


const SeasonDetailsPage = () => {
  const { id } = useParams();
  console.log(`show id at tvDetailsPage: ${id}`);

  const { data: season, error, isLoading, isError } = useQuery(
    ["tvSeason", { seriesId: SeriesId, seasonNum: seasonNum }],
    getTvSeason
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
              <TvDetails show={show} />
            </PageTemplate>
          </>
        ) : (
          <p>Waiting for TV show details</p>
        )}
      </>
    );
  }
};

export default SeasonDetailsPage;
