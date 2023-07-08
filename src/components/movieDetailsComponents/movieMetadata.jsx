import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";

const styles = {
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
  },
};

const MovieMetadata = ( { movie }) => { 
  return (
    <>
      <Paper component="ul" sx={styles.chipSet}>
        {movie.runtime && (
          <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
        )}
        {movie.revenue && (
          <Chip
            icon={<MonetizationIcon />}
            label={`${movie.revenue.toLocaleString()}`}
          />
        )}
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count}`}
        />
        {movie.release_date && (
          <Chip label={`Released: ${movie.release_date}`} />
        )}
      </Paper>
    </>
  );
};
export default  MovieMetadata ;
