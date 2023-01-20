import React, { useState, useEffect } from "react";
import yaml from "js-yaml";
import tournamentbracket from "../assets/tournament-bracket.png";
import externallink from "../assets/external-link.png";
import checkmark from "../assets/checkmark.png";
import useForceUpdate from "use-force-update";

import papersData from "../data/papers.yml";
import { PAPER_TAGS } from "../constants";

export const WinningPapersScreen = () => {
  const forceUpdate = useForceUpdate();
  const [papers, setPapers] = useState([]);
  const [selectedPaperTags, setSelectedPaperTags] = useState([]);

  useEffect(() => {
    fetch(papersData)
      .then((papersResponse) => { return papersResponse.text() })
      .then((papersText) => {
        setPapers(yaml.load(papersText));
      });
  }, []);

  const toggleFilter = (paperTag) => {
    if(!selectedPaperTags.includes(paperTag.ident)) {
      const nextSelectedPaperTags = selectedPaperTags;
      nextSelectedPaperTags.push(paperTag.ident);
      setSelectedPaperTags(nextSelectedPaperTags);
    } else {
      const nextSelectedPaperTags = selectedPaperTags.filter((paperIdent) => { return paperIdent !== paperTag.ident });
      setSelectedPaperTags(nextSelectedPaperTags);
    }
    forceUpdate();
  }

  const renderPaperFilter = (paperTag, index) => {
    const isChecked = selectedPaperTags.includes(paperTag.ident) ? true : false;
    const checkboxClassName = isChecked ? "checkbox checked" : "checkbox";

    return (
      <div className="filter-item" key={`filter-item-${index}`} onClick={() => { toggleFilter(paperTag) }}>
        <div className="checkbox-wrapper">
          <div className={checkboxClassName}>
            {isChecked ? <img src={checkmark} alt="checkmark" className="checkmark" /> : (<></>)}
          </div>
          <p className="label">{paperTag.display}</p>
        </div>
      </div>
    );
  }

  const renderPaper = (paperData, index) => {
    const paperThumbnail = `${process.env.PUBLIC_URL}/paper-thumbnails/${paperData.thumbnailName}`;

    return (
      <div className="paper-container" key={`paper-${index}`}>
        <div className="paper-image">
          <img src={paperThumbnail} alt="paper thumbnail" className="paper-thumbnail" />
        </div>
        <div className="flex-spacer" />
        <div className="paper-details">
          <p className="paper-title">{paperData.title}</p>
          <p className="paper-authors">{paperData.authors}</p>
          <p className="influencing-research-title">Influencing Research</p>
          <p className="paper-influencing-research">{paperData.influencingResearch}</p>
        </div>
      </div>
    )
  }

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
        <div className="filters-select">
          <div className="filters-column column-1">
            {PAPER_TAGS.slice(0, 14).map((paperTag, index) => {
              return renderPaperFilter(paperTag, index);
            })}
          </div>
          <div className="filters-column column-2">
            {PAPER_TAGS.slice(14, 28).map((paperTag, index) => {
              return renderPaperFilter(paperTag, index);
            })}
          </div>
          <div className="filters-column column-3">
            {PAPER_TAGS.slice(28, 42).map((paperTag, index) => {
              return renderPaperFilter(paperTag, index);
            })}
          </div>
        </div>
        <div className="papers-display">
          {papers.map((paper, index) => {
            return renderPaper(paper, index);
          })}
        </div>
      </div>
    </div>
  )

}
