import React, { useState } from "react";
import MediaHeader from "../mediaHeader";
import CardListFilter from "../cardListFilter";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import CardList from "../cardList";
import CardListHeaderInsert from "../headerInserts/cardListHeaderInsert";

const styles = {
  root: {
    padding: "20px",
  },
  fab: {
    marginTop: 8,
    position: "fixed",
    top: 2,
    right: 2,
  },
};

function CardListPage({ movies, title, action }) {
  const [titleFilter, setTitleFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const genreId = Number(genreFilter);

  let displayedMovies = movies
  .filter((m) => {
    const filterProperty = m.title ? m.title.toLowerCase() : m.name.toLowerCase();
    return filterProperty.search(titleFilter.toLowerCase()) !== -1;
  })
  .filter((m) => {
    return genreId > 0 ? m.genre_ids.includes(genreId) : true;
  });

  const handleChange = (type, value) => {
    if (type === "title") setTitleFilter(value);
    else setGenreFilter(value);
  };

  return (
   <>
      <Grid container sx={styles.root}>
        <Grid item xs={12}>
          <MediaHeader>
            <CardListHeaderInsert title={title}/>
          </MediaHeader>
        </Grid>
        <Grid item container spacing={5}>
          <CardList
            items={displayedMovies}
            action={action}
          />
        </Grid>
      </Grid>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={styles.fab}
      >
        Filter
      </Fab>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <CardListFilter
          onUserInput={handleChange}
          titleFilter={titleFilter}
          genreFilter={genreFilter}
        />
      </Drawer>
    </>  
  );
}
export default CardListPage;
