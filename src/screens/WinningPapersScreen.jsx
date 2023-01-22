import React, { useState, useEffect } from "react";
import yaml from "js-yaml";
import useForceUpdate from "use-force-update";
import Collapse from "@kunukn/react-collapse";

import tournamentbracket from "../assets/tournament-bracket.png";
import externallink from "../assets/external-link.png";
import checkmark from "../assets/checkmark.png";
import caratUp from "../assets/carat-up.png";
import caratDown from "../assets/carat-down.png";

import papersData from "../data/papers.yml";
import { IS_RESEARCH_PORTFOLIO_READY, PAPER_TAGS } from "../constants";

export const WinningPapersScreen = () => {
  const forceUpdate = useForceUpdate();
  const [papers, setPapers] = useState([]);
  const [selectedPaperTags, setSelectedPaperTags] = useState([]);
  const [activeSortIndex, setActiveSortIndex] = useState(0);
  const [uncollapsedPapersIndex, setUncollapsedPapersIndex] = useState(-1);

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

  const renderPaperSort = (sortItem, index) => {
    const isChecked = activeSortIndex === index;
    const checkboxClassName = isChecked ? "checkbox checked" : "checkbox";

    return (
      <div className="sort-item" key={`sort-item-${index}`} onClick={() => { setActiveSortIndex(index) }}>
        <div className="checkbox-wrapper">
          <div className={checkboxClassName}>
            {isChecked ? <img src={checkmark} alt="checkmark" className="checkmark" /> : (<></>)}
          </div>
          <p className="label">{sortItem}</p>
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
          {IS_RESEARCH_PORTFOLIO_READY &&
           <React.Fragment>
          <p className="annotation-text">Are you a recipient?</p>
          <a className="button inverted claim-prize" href="#" target="_blank" rel="noreferrer">
            <p className="button-text">Claim prize on <span className="emphasis">Research Portfolio</span></p>
            <img src={externallink} alt="external link" className="external-link" />
          </a>
           </React.Fragment>
           }
        </div>
        <div className="flex-spacer" />
        <img src={tournamentbracket} alt="research logo" className="section-image" />
      </div>
      <div className="section all-papers-section">
        <div className="filters-toggles">
          <div className="filters-toggle toggle-filters">
            <p className="toggle-text" onClick={() => {
              if(uncollapsedPapersIndex === 0) {
                setUncollapsedPapersIndex(-1);
              } else {
                setUncollapsedPapersIndex(0);
              }
            }}>{`FILTERS: ${selectedPaperTags.length > 0 ? selectedPaperTags.length : "ALL"}`}</p>
            {uncollapsedPapersIndex === 0 ? (<img src={caratUp} alt="carat up" className="filters-collapse-icon" />) : (<img src={caratDown} alt="carat down" className="filters-collapse-icon" />)}
          </div>
          <div className="flex-spacer" />
          <div className="filters-toggle toggle-sorts">
            <p className="toggle-text" onClick={() => {
              if(uncollapsedPapersIndex === 1) {
                setUncollapsedPapersIndex(-1);
              } else {
                setUncollapsedPapersIndex(1);
              }
            }}>SORTS: A TO Z</p>
            {uncollapsedPapersIndex === 1 ? (<img src={caratUp} alt="carat up" className="filters-collapse-icon" />) : (<img src={caratDown} alt="carat down" className="filters-collapse-icon" />)}
          </div>
        </div>
        <Collapse
          isOpen={(uncollapsedPapersIndex === 0)}
          transition={`height 290ms cubic-bezier(0.4, 0, 0.2, 1)`}>
          <>
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
          <div className="filters-actions">
            <div className="button inverted clear-button" onClick={() => { setSelectedPaperTags([]); }}>
              <p className="button-text">Clear</p>
            </div>
            <div className="button apply-button" onClick={() => { setUncollapsedPapersIndex(-1); }}>
              <p className="button-text">Apply & Close</p>
            </div>
          </div>
          </>
        </Collapse>
        <Collapse
          isOpen={(uncollapsedPapersIndex === 1)}
          transition={`height 290ms cubic-bezier(0.4, 0, 0.2, 1)`}>
          <div className="sorts-select">
            {["A to Z", "Z to A", "Chronologically", "Recently Published"].map((sortItem, index) => {
              return renderPaperSort(sortItem, index);
            })}
          </div>
        </Collapse>
        <div className="papers-display">
          {papers.map((paper, index) => {
            return renderPaper(paper, index);
          })}
        </div>
      </div>
    </div>
  )

}
