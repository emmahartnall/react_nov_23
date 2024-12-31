// Quote.jsx
import React, { useState } from "react";
import ProjectDetailsForm from "./components/ProjectDetailsForm";
import FeatureSelection from "./components/FeatureSelection";
import CostSummary from "./components/CostSummary";

const App = () => {
  const [projectDetails, setProjectDetails] = useState({});
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  const baseCost = 500; // Base cost for any project
  const featureCosts = {
    authentication: 300,
    payments: 400,
    analytics: 200,
    notifications: 150,
  };

  const calculateTotalCost = () => {
    const featuresCost = selectedFeatures.reduce(
      (total, feature) => total + (featureCosts[feature] || 0),
      0
    );
    return baseCost + featuresCost;
  };

  return (
    <div className="app">
      <h1>Web Application Quoting Tool</h1>
      <ProjectDetailsForm setProjectDetails={setProjectDetails} />
      <FeatureSelection
        selectedFeatures={selectedFeatures}
        setSelectedFeatures={setSelectedFeatures}
      />
      <CostSummary
        projectDetails={projectDetails}
        selectedFeatures={selectedFeatures}
        totalCost={calculateTotalCost()}
      />
    </div>
  );
};

export default App;

