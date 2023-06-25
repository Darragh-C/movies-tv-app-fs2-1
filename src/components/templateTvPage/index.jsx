import React from "react";
import MovieHeader from "../MovieHeader";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getTvShowImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'

const styles = {
  gridListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridList: {
    width: 450,
    height: '100vh',
  },
};

const TemplateTvPage = ({ show, children }) => {
  

    console.log(`show at TemplateTvPage: ${show}`);
    const { data , error, isLoading, isError } = useQuery(
      ["tvImages", { id: show.id }],
      getTvShowImages
    );
    console.log(`getTvShowImages data in TemplateTvPage: ${data}`);
  
 
 
  if (isLoading) {
    console.log("loading");
    return <Spinner />;
  }

  if (isError) {
    console.log("error");
    return <h1>{error.message}</h1>;
  }
  
  const images = data.posters 

  return (
    <>
      <MovieHeader movie={show} />

      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div sx={styles.gridListRoot}>
            <ImageList cols={1}>
              {images.map((image) => (
                <ImageListItem
                  key={image.file_path}
                  sx={styles.gridListTile}
                  cols={1}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                    alt={image.poster_path}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateTvPage;