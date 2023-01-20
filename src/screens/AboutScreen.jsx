import React, { useState, useEffect } from "react";
import yaml from "js-yaml";

import voterfraud from "../assets/voter-fraud.png";
import rightArrow from "../assets/right-arrow.png";

import expertsData from "../data/experts.yml";

export const AboutScreen = () => {
  const [experts, setExperts] = React.useState([]);

  useEffect(() => {
    fetch(expertsData)
      .then((expertsResponse) => { return expertsResponse.text() })
      .then((expertsText) => {
        setExperts(yaml.load(expertsText));
      });
  }, []);

  const renderExpert = (expertData) => {
    return (
      <div className="expert">
        <p className="expert-title">{expertData.title}</p>
        <p className="expert-bio">{expertData.bio}</p>
        <a className="expert-linkedin" href={expertData.linkedin ?? "#"} target="_blank" rel="noreferrer">
          <p className="linkedin-text">Linkedin</p>
          <img src={rightArrow} alt="right-arrow" className="view-more-arrow" />
        </a>
      </div>
    )
  }

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
        <p className="section-title">AWARDING THE PRIZE</p>
        <p className="section-description">We leverage the <span className="emphasis">Research Portfolio</span> platform to distribute awards, creating a simple, on-chain record of prizes and influences.</p>
        <div className="awarding-infos">
          <div className="awarding-info">
            <p className="info-title">Claiming process</p>
            <p className="info-details">Researchers will mint their research using their unique technology on Research Portfolio. Afterwards they can claim their prize by simply connecting their wallets to Amaranth Prize website.</p>
          </div>
          <div className="awarding-info">
            <p className="info-title">Influencing Papers</p>
            <p className="info-details">We enable each prize wining team to acknowledge and reward the influential papers and work that has provided a foundation for their winning research efforts.</p>
          </div>
        </div>
      </div>

      <div className="section experts-section">
        <p className="section-title">THE EXPERTS</p>
        <p className="section-description">This is a list of our generous experts giving their time to choose the most impactful research in longevity this year.</p>
        <div className="experts">
          <div className="experts-column column-1">
            {experts[0] ? renderExpert(experts[0]) : (<></>)}
            {experts[1] ? renderExpert(experts[1]) : (<></>)}
          </div>
          <div className="experts-column column-2">
            {experts[2] ? renderExpert(experts[2]) : (<></>)}
            {experts[3] ? renderExpert(experts[3]) : (<></>)}
          </div>
          <div className="experts-column column-3">
            {experts[4] ? renderExpert(experts[4]) : (<></>)}
            {experts[5] ? renderExpert(experts[5]) : (<></>)}
          </div>
          <div className="experts-column column-4">
            {experts[6] ? renderExpert(experts[6]) : (<></>)}
            {experts[7] ? renderExpert(experts[7]) : (<></>)}
          </div>
        </div>
        <p className="more-experts-disclaimer">More experts will be added to the panel</p>
      </div>
    </div>
  )

}
