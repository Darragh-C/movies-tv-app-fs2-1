import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";

import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import MovieReviews from '../movieReviews'
import CastList from "../castList";
import Spinner from '../../components/spinner';

import MovieMetadata from "../movieDetailsComponents/movieMetadata";
import MovieBio from "../movieDetailsComponents/movieBio";
import GenreTags from "../movieDetailsComponents/genreTags";

const styles = {
  fab: { 
    position: "fixed",
    top: 50,
    right: 2,
  },
};

const MovieDetails = ( { movie, cast }) => {
  const { id } = useParams();

  console.log(`cast: ${cast}`);

  const [drawerOpen, setDrawerOpen] = useState(false); 
  return (
    <>
      <MovieBio movie={movie} />
      <GenreTags media={movie} />
      <MovieMetadata movie={movie} />
      <CastList cast={cast}/>

      <Fab    
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={styles.fab}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>
    </>
  );
};
export default  MovieDetails ;
