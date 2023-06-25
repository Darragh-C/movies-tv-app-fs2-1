import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";

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
};

const SeasonList = ( {seasons} ) => {
  return (
    <>
      <h2>Seasons</h2>
      

        {seasons.map((s) => (
          <Paper component="ul" sx={styles.chipSet}>
            <li key={s.name}>
              <Chip label={s.name} sx={styles.chipLabel} color="primary" />
            </li>
            <li key={s.name+s.air_date}>
              <Chip label={s.air_date} />
            </li>
            <li key={s.name + "episodes"}>
              <Chip label={s.episode_count + " episodes"} />
            </li>
          </Paper>  
        ))}
      
    </>

  )    

};
export default SeasonList;