import React, { useState } from "react";
import AddCast from "../forms/addCast";
import MovieBio from "../movieDetailsComponents/movieBio";
import GenreTags from "../movieDetailsComponents/genreTags";
import Grid from "@mui/material/Grid";
import SubmitText from "../forms/submitText";
import AddGenreTags from "../forms/addGenreTags";
import CastList from "../castList";

const styles = {
  fab: { 
    position: "fixed",
    top: 50,
    right: 2,
  },
};

const FantasyMovieDetails = ({ movie, action }) => {
 
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <MovieBio movie={movie}/>
      </Grid>
      <Grid item xs={4}>
        <SubmitText label={"title"} onAction={action}/>
      </Grid>
      <Grid item xs={8}>

      </Grid>
      <Grid item xs={4}>
      <SubmitText label={"overview"} onAction={action}/>
      </Grid>
      <Grid item xs={8}>
        <GenreTags genres={movie.genres}/>
      </Grid>
      <Grid item xs={4}>
        <AddGenreTags onAction={action}/>
      </Grid>
      <Grid item xs={8}>
        {movie.cast.length > 0 && (
          console.log("fanCast:", movie.cast),
          <CastList cast={movie.cast}/>
        )}
      </Grid>
      <Grid item xs={4}>
        <AddCast onAction={action}/>
      </Grid>
    </Grid>
  );
};

export default FantasyMovieDetails;
