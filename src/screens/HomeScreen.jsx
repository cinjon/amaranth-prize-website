import React from "react";
import treetrunk from "../assets/tree-trunk.png";

export const HomeScreen = () => {

  return (
    <div className="screen home-screen">
      <div className="section powered-by-section">
        <div className="text-content">
          <p className="attribution">POWERED BY <span className="emphasis">Research Portfolio</span></p>
          <h2 className="tagline">Rewarding the most impactful research in <span className="emphasis">longevity</span></h2>
          <div className="stats">
            <div className="stats-section prize-pool">
              <p className="primary">$250k</p>
              <p className="secondary">Prize pool</p>
            </div>
            <div className="stats-section winning-papers">
              <p className="primary">30</p>
              <p className="secondary">Winning papers</p>
            </div>
            <div className="stats-section influencing-papers">
              <p className="primary">150</p>
              <p className="secondary">Influencing papers</p>
            </div>
          </div>
        </div>
        <div className="flex-spacer" />
        <img src={treetrunk} alt="tree trunk" className="section-image" />
      </div>
      <div className="section-mission-section"></div>
      <div className="section-why-section"></div>
      <div className="section-how-section"></div>
      <div className="section-winning-papers-section"></div>
      <div className="section faq-section"></div>
      <div className="section mailing-list-section"></div>
    </div>
  )

}
