import React, { useState } from 'react';
import Grid from "@mui/material/Grid";
import { StyleSharp } from '@mui/icons-material';

const styles = {
  label: {
    position: "fixed",
    padding: 10,
  },
  button: {
    width: 90,
    height: 30,
    position: "absolute",
    fontSize: 14,
    fontWeight: "normal",
    textAlign: "center",
    /*margin: auto;*/
    paddingTop: 10,
    marginTop:-20,
  },
  text: {
    fontFamily: "sans-serif"
  }
}

function SubmitText({ label, onAction }) {
  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    const data = {
      type: name,
      value: value,
    }
    setFormData(data);

  };

  const handleSubmit = (event) => {
    onAction(formData);
    event.preventDefault();
    setFormData({
      type: "",
      value: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <br/>
      <Grid container spacing={2}>
        <Grid item xs={0.25}></Grid>
        <Grid item xs={6}>
          <label sx={styles.label}>
            <p style={styles.text}>Add {label}:</p>
            <input
              sx={styles.label}
              type="text"
              name={label}
              value={formData.value}
              onChange={handleInputChange}
            />
          </label>
        </Grid>
        <Grid item xs={2}>
          <button sx={styles.button} type="submit">
            Submit
          </button>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </form>
  );
}

export default SubmitText;