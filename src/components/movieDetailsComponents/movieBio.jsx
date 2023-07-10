import React from "react";
import Typography from "@mui/material/Typography";
import AddMovieBio from "../forms/addMovieBio";

const MovieBio = ( { movie }) => {
  return (
    <>
      {movie.overview && (
        <>
          <Typography variant="h5" component="h3">
            Overview
          </Typography>
          <Typography variant="h6" component="p">
            {movie.overview}
          </Typography>  
        </>
      )}
    </>
  );
};
export default  MovieBio ;
