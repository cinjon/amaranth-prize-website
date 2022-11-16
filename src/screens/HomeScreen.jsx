import React from "react";
import yaml from "js-yaml";
import papersData from "../data/papers.yml";

import treetrunk from "../assets/tree-trunk.png";
import voterfraud from "../assets/voter-fraud.png";
import rightArrow from "../assets/right-arrow.png";
import externallink from "../assets/external-link.png";
import tournamentbracket from "../assets/tournament-bracket.png";
import bubbles from "../assets/bubbles.png";

import { PaperCarousel } from "../components/PaperCarousel";

export const HomeScreen = () => {
  const [papers, setPapers] = React.useState([]);

  React.useEffect(() => {
    fetch(papersData)
      .then((papersResponse) => { return papersResponse.text() })
      .then((papersText) => {
        setPapers(yaml.load(papersText));
      });
  }, []);

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

      <div className="section mission-section">
        <img src={voterfraud} alt="lifespan" className="section-image" />
        <div className="flex-spacer" />
        <div className="text-content">
          <p className="section-title">WHAT IS OUR MISSION</p>
          <p className="section-description">
            Substantially increasing the human lifespan. The Amaranth Prize gives <span className="emphasis">no-strings attached funding</span> to the best research in Longevity.
          </p>
          <div className="read-more">
            <a className="read-more-text" href="https://google.com" target="_blank" rel="noreferrer">
              Read more about our selection process
            </a>
            <img src={rightArrow} alt="right arrow" className="read-more-arrow" />
          </div>
        </div>
      </div>

      <div className="section why-section">
        <div className="text-content">
          <p className="section-title">WHY WE DO IT THIS WAY</p>
          <p className="section-description">
            We award research <span className="emphasis">retrospectively</span> because we believe scientists should pursue what they find most intriguing.
          </p>
          <p className="section-description">
            The Amaranth Prize is awarded to 30 winners, as well as the research that influenced them.
          </p>
          <p className="section-description">
            <span className="emphasis">Science stands on the shoulders of giants.</span>
          </p>
          <div className="read-more">
            <a className="read-more-text" href="https://google.com" target="_blank" rel="noreferrer">
              Read more about awarding the prize
            </a>
            <img src={rightArrow} alt="right arrow" className="read-more-arrow" />
          </div>
        </div>
        <div className="flex-spacer" />
        <img src={tournamentbracket} alt="research logo" className="section-image" />
      </div>

      <div className="section how-section">
        <img src={bubbles} alt="research logo" className="section-image" />
        <div className="flex-spacer" />
        <div className="text-content">
          <p className="section-title">HOW IT WORKS</p>
          <p className="section-description">
            We select a topic of primary importance within longevity research and convene a <span className="emphasis">panel of experts</span> to choose research efforts that are the most deserving.
          </p>
          <div className="read-more">
            <a className="read-more-text" href="https://google.com" target="_blank" rel="noreferrer">
              Read more about the experts
            </a>
            <img src={rightArrow} alt="right arrow" className="read-more-arrow" />
          </div>
        </div>
      </div>

      <div className="section learn-more-section">
        <div className="content-container">
          <a className="button" href="https://google.com" target="_blank" rel="noreferrer">
            <p className="button-text">Learn more about the prize</p>
          </a>
          <div className="flex-spacer" />
          <div className="read-more">
            <a className="read-more-text" href="https://google.com" target="_blank" rel="noreferrer">
              Visit Research Portfolio
            </a>
            <img src={externallink} alt="external link" className="external-link" />
          </div>
        </div>
      </div>

      <div className="section winning-papers-section">
        <div className="text-content">
          <p className="section-title">WINNING PAPERS</p>
          <p className="section-description"><span className="emphasis">The 2022 Amaranth Prize winners</span> were selected in the field from a review of over 500 papers.</p>
        </div>
        <div className="winning-paper-highlight molecular-genetics">
          <div className="highlight-header">
            <p className="highlight-title">Winners in Human Molecular Genetics</p>
            <div className="flex-spacer" />
            <div className="see-all">
              <a className="see-all-text" href="https://google.com" target="_blank" rel="noreferrer">
                See all
              </a>
              <img src={rightArrow} alt="right arrow" className="see-all-arrow" />
            </div>
          </div>
          <PaperCarousel papers={papers} />
        </div>
        <div className="winning-paper-highlight oxidative-medicine">
          <div className="highlight-header">
            <p className="highlight-title">Winners in Oxidative medicine and cellular longevity</p>
            <div className="flex-spacer" />
            <div className="see-all">
              <a className="see-all-text" href="https://google.com" target="_blank" rel="noreferrer">
                See all
              </a>
              <img src={rightArrow} alt="right arrow" className="see-all-arrow" />
            </div>
          </div>
          <PaperCarousel papers={papers} />
        </div>
        <div className="winning-paper-highlight plos-biology">
          <div className="highlight-header">
            <p className="highlight-title">Winners in PLoS biology</p>
            <div className="flex-spacer" />
            <div className="see-all">
              <a className="see-all-text" href="https://google.com" target="_blank" rel="noreferrer">
                See all
              </a>
              <img src={rightArrow} alt="right arrow" className="see-all-arrow" />
            </div>
          </div>
          <PaperCarousel papers={papers} />
        </div>
      </div>

      <div className="section faq-section"></div>
      <div className="section mailing-list-section"></div>
    </div>
  )

}
