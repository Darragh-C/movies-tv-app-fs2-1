import React from "react";
import TvHeader from "../TvHeader";
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

const TemplateTvPage = ({ show, season, children }) => {
  let showImages;
  let seasonImage;

  if (!season) {
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
    
    showImages = data.posters 
  } else if (season) {
    seasonImage = season.poster_path;
  }
  return (
    <>
      <TvHeader show={show} />

      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div sx={styles.gridListRoot}>
          <ImageList cols={1}>
            {seasonImage ? (
              <ImageListItem
                key={seasonImage.file_path}
                sx={styles.gridListTile}
                cols={1}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${seasonImage}`}
                  alt={seasonImage.poster_path}
                />
              </ImageListItem>
            ) : (
              showImages.map((showImage) => (
                <ImageListItem
                  key={showImage.file_path}
                  sx={styles.gridListTile}
                  cols={1}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${showImage.file_path}`}
                    alt={showImage.poster_path}
                  />
                </ImageListItem>
              ))
            )}
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
