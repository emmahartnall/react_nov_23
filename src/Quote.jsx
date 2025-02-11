// Quote.jsx
import React, { useState } from "react";
import ProjectDetailsForm from "./components/ProjectDetailsForm";
import FeatureSelection from "./components/FeatureSelection";
import CostSummary from "./components/CostSummary";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./css/App.css";
import "./css/quoteClasses.css";
import "./css/standardElements.css";

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
      <Header />
      <main>
        <div class="content">
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
      </main>
      
      <Footer />
    </div>
  );
};

export default App;

