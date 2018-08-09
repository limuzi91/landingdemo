import React, { Component } from "react";
import TeamMembers from "./TeamMembers";
import ProgressBars from "./ProgressBars";

export default class TeamSection extends Component {
  render() {
    return (
      <section id="team">
        <div className="content-box-lg">
          <div className="container">
            <TeamMembers />
            <ProgressBars />
          </div>
        </div>
      </section>
    );
  }
}
