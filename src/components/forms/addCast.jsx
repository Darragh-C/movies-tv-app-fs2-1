import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import { getAllPolularCastPages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import React from 'react';
import Spinner from '../../components/spinner';

const AddCast = ({ }) => {

  const { data, error, isLoading, isError } = useQuery("popular-cast", getAllPolularCastPages);

 

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }


  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={data}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Cast" />}
    />
  );
};

export default AddCast;