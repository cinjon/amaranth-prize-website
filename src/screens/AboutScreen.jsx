import React from "react";
import voterfraud from "../assets/voter-fraud.png";

export const AboutScreen = () => {

  return (
    <div className="screen about-screen">

      <div className="section banner-section">
        <div className="text-content">
          <p className="primary">We believe in promoting <span className="emphasis">healthier and longer lifespan</span> for all humans.</p>
          <p className="secondary">The Amaranth Prize rewards people who spend their precious time pushing this field. Our retrospective approach gives researchers the freedom to pursue important work and reward the research that influence them.</p>
        </div>
        <div className="flex-spacer" />
        <img src={voterfraud} alt="lifespan" className="section-image" />
      </div>

      <div className="section selection-process-section">
        <p className="section-title">SELECTION PROCESS</p>
        <p className="section-description">We choose a topic within the field and convene a panel of experts to select and award outstanding work published in recent years.</p>
        <div className="selection-process-steps">
          <div className="selection-process-step">
            <p className="step-number">1</p>
            <p className="step-title">Expert selection</p>
            <p className="step-details">Once we had selected the topic - “Brain aging exclusive of Alzheimer's disease" - we then convened a panel of 100 experts from this field to choose which contributions were most deserving.</p>
          </div>
          <div className="selection-process-step">
            <p className="step-number">2</p>
            <p className="step-title">Expanding the queries</p>
            <p className="step-details">Beyond the contributions they knew from memory, we added works that fit the following query criteria on Semantic Scholar and Google Scholar: Query a, Query b, and Query c.</p>
          </div>
          <div className="selection-process-step">
            <p className="step-number">3</p>
            <p className="step-title">Filtering the pool</p>
            <p className="step-details">This yielded a total of 1000 contributions. We convened a smaller panel to pick the final selections. Their instructions were to focus on results or impact, reward the prize non-uniformly, and lean into both unanimous and polarizing works. From this process, we found our 30 contributions.</p>
          </div>
        </div>
      </div>

      <div className="section awarding-the-prize-section">

      </div>

      <div className="section experts-section">

      </div>

    </div>
  )

}
