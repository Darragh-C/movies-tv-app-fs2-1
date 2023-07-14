import React, { useState } from 'react';

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
      <label>
        Add {label}:
        <input
          type="text"
          name={label}
          value={formData.value}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SubmitText;