import React, { useState } from 'react';

function AddMovieBio({ onAction }) {
  const [formData, setFormData] = useState("");
  let action = "";

  if (formData) {
    console.log(formData);
  }

  const handleInputChange = (event) => {
    const newData = event.target.value;
    setFormData(newData);
  };

  const handleSubmit = (event) => {
    onAction(formData);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Add Movie Bio:
        <input
          type="text"
          name="overview"
          value={formData}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddMovieBio;