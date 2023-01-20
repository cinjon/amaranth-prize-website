import React from "react";
import tournamentbracket from "../assets/tournament-bracket.png";
import externallink from "../assets/external-link.png";

export const WinningPapersScreen = () => {

  return (
    <div className="screen winning-papers-screen">

      <div className="section banner-section">
        <div className="text-content">
          <p className="primary">2022 Winning Papers</p>
          <p className="secondary">We distribute the prize pool to both the winning contributions and the research on which they most depended. <span className="emphasis">Science stands on the shoulders of giants.</span></p>
          <p className="secondary">Each winner nominates influencing research to share in the prize pool.</p>
          <p className="annotation-text">Are you a recipient?</p>
          <a className="button inverted claim-prize" href="#" target="_blank" rel="noreferrer">
            <p className="button-text">Claim prize on <span className="emphasis">Research Portfolio</span></p>
            <img src={externallink} alt="external link" className="external-link" />
          </a>
        </div>
        <div className="flex-spacer" />
        <img src={tournamentbracket} alt="research logo" className="section-image" />
      </div>
      <div className="section all-papers-section">

      </div>
    </div>
  )

}
