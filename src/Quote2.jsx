// Quote2.jsx
import React, { useState } from "react";
import ProjectDetailsForm from "./components/ProjectDetailsForm";
import Heading from "./components/Heading";
import DescriptionMethodology from "./components/DescriptionMethodology";
import FeatureSelection from "./components/FeatureSelection";
import CostSummary from "./components/CostSummary";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./css/App.css";
import "./css/quoteClasses.css";
import "./css/standardElements.css";

const Quote = () => {
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
    <div className="Quote">
      <Header />
      <main>=
        <section class="transparent-section">
          <div class="content">
            <Heading>Price Estimation Tool for your Web Application</Heading> 

            <DescriptionMethodology>
              <p>We use an iterative approach to the development of our web applications and as such we only provide fixed quotes on small pieces of software at a time.</p>
              <p>Our methodology is based on the principle that customers gain insights into the requirements after interacting with working software.</p>
              <p>Using this approach maximises flexiblility and reduces risk for the customer.</p>

              <p>Also we only charge on delivery of working software.</p>
              <p>This tool is just to provide a guide towards costs.</p> 
            </DescriptionMethodology>
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
        </section>
      
      </main>
      
      <Footer />
    </div>
  );
};

export default Quote;

