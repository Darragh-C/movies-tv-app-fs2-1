import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import img from '../../images/film-poster-placeholder.png';
import Avatar from '@mui/material/Avatar';
import MovieIcon from '@mui/icons-material/Movie';

const styles = {
  card: { 
    maxWidth: 300,
    maxHeight: 200,
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center', 
  },
  media: { 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
    width: 40
   },
  image: {
    maxWidth: "auto",
    maxHeight: 50,
    padding: 5,
    justifyContent: "center"
  },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
  text: {
    fontSize: 14
  }
};

const ProductionCard = ({ company }) => {      
  return (
    <Card sx={styles.card}>
      <CardHeader
        sx={styles.header}
        title={
          <Typography variant="h5" component="p" sx={styles.text}>
            {company.name}{" "}
          </Typography>
        }
      />
      { company.logo_path ? (
        <div>
          <img style={styles.image} src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`} />
        </div>
      ) : (
        <MovieIcon fontSize="large"/>
      )}
    
    </Card>
  );
}
export default ProductionCard;
