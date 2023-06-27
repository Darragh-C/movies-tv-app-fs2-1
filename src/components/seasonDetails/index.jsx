import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";

import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
//import showReviews from '../showReviews'
import SeasonList from "../seasonList"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EpisodeList from "../episodeList";

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
  chipLabel: {
    margin: 0.5,
  },
  fab: { 
    position: "fixed",
    top: 50,
    right: 2,
  },
};

const SeasonDetails = ( {season}) => {
  const [drawerOpen, setDrawerOpen] = useState(false); 
  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {season.name}
      </Typography>

      <Paper component="ul" sx={styles.chipSet}>
        {season.air_date && (
          <Chip icon={<CalendarMonthIcon />} label={`${season.air_date}`} />
        )}
      </Paper>
      
      <EpisodeList episodes={season.episodes}/>
    </>
  );
};
export default  SeasonDetails ;
