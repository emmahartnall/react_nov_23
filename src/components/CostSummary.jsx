
// components/CostSummary.jsx
import React from "react";

const CostSummary = ({ projectDetails, selectedFeatures, totalCost }) => {
  return (
    <div className="cost-summary">
      <h2>Cost Summary</h2>
      <p><strong>App Type:</strong> {projectDetails.appType || "N/A"}</p>
      <p><strong>Number of Pages:</strong> {projectDetails.numPages || "N/A"}</p>
      <p><strong>Complexity:</strong> {projectDetails.complexity || "N/A"}</p>
      <p><strong>Selected Features:</strong> {selectedFeatures.join(", ") || "None"}</p>
      <p><strong>Total Cost:</strong> ${totalCost}</p>
    </div>
  );
};

export default CostSummary;