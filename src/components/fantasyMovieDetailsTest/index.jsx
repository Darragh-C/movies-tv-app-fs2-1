import React, { useState } from "react";
import AddCast from "../forms/addCast";
import MovieBio from "../movieDetailsComponents/movieBio";
import GenreTags from "../movieDetailsComponents/genreTags";
import Grid from "@mui/material/Grid";
import SubmitText from "../forms/submitText";
import AddGenreTags from "../forms/addGenreTags";
import CastList from "../castList";
import AddProduction from "../forms/addProduction";
import ProductionCompaniesRow from "../cardRows/productionCompaniesRow";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import EditIcon from '@mui/icons-material/Edit';

const styles = {
  fab: { 
    position: "fixed",
    top: 70,
    right: 2,
  },
};

const FantasyMovieDetailsTest = ({ movie, action }) => {

  const [drawerOpen, setDrawerOpen] = useState(false); 
 
  return (
    <>
      <MovieBio movie={movie} />
      <GenreTags genres={movie.genres} />
      {movie.production_companies.length > 0 && (
          <ProductionCompaniesRow companies={movie.production_companies}/>
        )}
      {movie.cast.length > 0 && (
        <CastList cast={movie.cast}/>
      )}

      <Fab    
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={styles.fab}
      >
        <EditIcon/>
      </Fab>
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <SubmitText label={"title"} onAction={action}/>
        <SubmitText label={"overview"} onAction={action}/>
        <AddGenreTags onAction={action}/>
        <AddProduction onAction={action}/>
        <AddCast onAction={action}/>
      </Drawer>      

    </>
  );
};

export default FantasyMovieDetailsTest;
