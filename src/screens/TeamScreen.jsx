import React, { useRef, useState, useEffect } from "react";
import yaml from "js-yaml";

import bubbles2 from "../assets/bubbles2.png";
import teamData from "../data/team.yml";

export const TeamScreen = () => {
  const [team, setTeam] = React.useState([]);

  useEffect(() => {
    fetch(teamData)
      .then((teamResponse) => { return teamResponse.text() })
      .then((teamText) => {
        setTeam(yaml.load(teamText));
      })
  }, []);

  const renderTeamMember = (teamMemberData) => {
    return (
      <div className="team-member" key={`${teamMemberData.name}`}>
        <img className="team-member-photo" src={teamMemberData.image_url} alt="team-member-picture" />
        <p className="name">{teamMemberData.name}</p>
        <p className="title">{teamMemberData.title}</p>
        <div className="actions">
          <div className="button inverted view-bio">
            <p className="button-text">View Bio</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="screen team-screen">
      <div className="section banner-section">
        <div className="text-content">
          <p className="section-title">Team</p>
          <p className="section-description">Discover experienced <span className="emphasis">biotech professionals and advisory board members</span>, who are dedicated to driving innovation and success in the industry.</p>
        </div>
        <div className="flex-spacer" />
        <img src={bubbles2} alt="research logo" className="section-image" />
      </div>

      <div className="section team-section core-team">
        <div className="team-members">
          {team.filter((teamMember) => { return !teamMember.advisory_board }).map((teamMember) => {
            return renderTeamMember(teamMember);
          })}
        </div>
      </div>

      <div className="section team-section advisory-board">
        <h2 className="advisory-board-title">ADVISORY BOARD</h2>
        <div className="team-members">
          {team.filter((teamMember) => { return teamMember.advisory_board }).map((teamMember) => {
            return renderTeamMember(teamMember);
          })}
        </div>
      </div>
    </div>
  )

}
