// components/RequirementsForm.jsx
import React from "react";

const RequirementsForm = ({ setRequirements }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRequirements((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="requirements-form">
      <h2>Please enter you Project Requirements</h2>
      <label>
        Please provide a short description of your project:
        <input
          type="text"
          name="appType"
          placeholder="e.g., E-commerce, Blog"
          onChange={handleChange}
        />
      </label>
      <label>
        Number of Pages:
        <input
          type="number"
          name="numPages"
          placeholder="e.g., 5"
          onChange={handleChange}
        />
      </label>
      <label>
        Complexity:
        <select name="complexity" onChange={handleChange}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
    </form>
  );
};

export default RequirementsForm;