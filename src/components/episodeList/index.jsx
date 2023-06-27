import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

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
    padding: 2.5,
  },
};

const EpisodeList = ( { episodes } ) => {

  return (
    <>
      <List sx={{ width: '100%', bgcolor: 'background.paper',  }}>
        {episodes.map((e) => (
          <>
            <ListItem alignItems="flex-start">
              <div>
                <ListItemText
                  sx={styles.chipLabel}
                  primary={e.episode_number}
                />
              </div>
              <ListItemText
                primary={e.name}
                secondary={e.overview}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
        ))}
      </List>
    </>

 
  );
};
export default  EpisodeList ;