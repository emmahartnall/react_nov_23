// components/ProjectDetailsForm.jsx
import React from "react";

const ProjectDetailsForm = ({ setProjectDetails }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectDetails((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="project-details-form">
      <h2>Project Details</h2>
      <label>
        App Type:
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

export default ProjectDetailsForm;