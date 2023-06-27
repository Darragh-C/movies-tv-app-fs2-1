import React from "react";
import { useParams } from "react-router-dom";
import SeasonDetails from "../components/seasonDetails";
import PageTemplate from "../components/templateTvPage";
import { getTvSeason } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'


const SeasonDetailsPage = () => {
  const { seriesId, seasonNum } = useParams();
  console.log(`show id at tvDetailsPage: ${seriesId, seasonNum}`);

  const { data: season, error, isLoading, isError } = useQuery(
    ["tvSeason", { seriesId: seriesId, seasonNum: seasonNum }],
    getTvSeason
  );
  
  if (season) {
    console.log(`show object at tvDetailsPage: ${season}`);
 
    console.log("show at tvDetailsPage:");
    Object.keys(season).forEach(key => {
      console.log(`${key}: ${season[key]}`);
    });
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  if (season) {
    return (
      <>
        {season ? (
          <>
            <PageTemplate show={season}>
              <SeasonDetails season={season} />
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
