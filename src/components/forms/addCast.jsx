import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import { getAllPolularCastPages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import React from 'react';
import Spinner from '../../components/spinner';

const AddCast = ({ }) => {

  const { data, error, isLoading, isError } = useQuery("popular-cast", getAllPolularCastPages);

  let cast;
  if (data) {
    cast = data.map((c) => c.name);
  }

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
      options={cast}
      sx={{ width: 300 }}
      onChange={(selectedCast) => {
        console.log("Selected Value:", selectedCast.target.innerText);
        //addCast(selectedValue);
      }}
      renderInput={(params) => <TextField {...params} label="Cast" />}
    />
  );
};

export default AddCast;