
// components/FeatureSelection.jsx
import React from "react";

const FeatureSelection = ({ selectedFeatures, setSelectedFeatures }) => {
  const features = ["authentication", "payments", "analytics", "notifications"];

  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedFeatures((prev) => [...prev, value]);
    } else {
      setSelectedFeatures((prev) => prev.filter((feature) => feature !== value));
    }
  };

  return (
    <div className="feature-selection">
      <h2>Feature Selection</h2>
      {features.map((feature) => (
        <label key={feature}>
          <input
            type="checkbox"
            value={feature}
            checked={selectedFeatures.includes(feature)}
            onChange={handleChange}
          />
          {feature.charAt(0).toUpperCase() + feature.slice(1)}
        </label>
      ))}
    </div>
  );
};

export default FeatureSelection;