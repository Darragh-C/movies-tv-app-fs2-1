import React, { useState } from "react";
import MovieMetadata from "../movieDetailsComponents/movieMetadata";
import MovieBio from "../movieDetailsComponents/movieBio";
import GenreTags from "../movieDetailsComponents/genreTags";
import AddMovieBio from "../forms/addMovieBio";
import Grid from "@mui/material/Grid";

const styles = {
  fab: { 
    position: "fixed",
    top: 50,
    right: 2,
  },
};

const FantasyMovieDetails = () => {

  const [movie, setMovie] = useState({
    overview: "",
  });

  const handleBioUpdate = (data) => {
    setMovie((prevMovie) => ({
      ...prevMovie,
      overview: data,
    }));
    console.log("new movie overview:", movie.overview);
  };
 
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <MovieBio movie={movie}/>
      </Grid>
      <Grid item xs={4}>
        <AddMovieBio onAction={handleBioUpdate}/>
      </Grid>
      <Grid item xs={8}>

      </Grid>
      <Grid item xs={4}>
        <GenreTags/>
      </Grid>
      <Grid item xs={8}>

      </Grid>
      <Grid item xs={4}>
        <MovieMetadata/>
      </Grid>
    </Grid>
  );
};

export default FantasyMovieDetails;
