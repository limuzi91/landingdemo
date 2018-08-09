import React, { Component } from "react";
import AboutOne from "./AboutOne";
import AboutTwo from "./AboutTwo";

export default class AboutSection extends Component {
  render() {
    return (
      <section id="about">
        <AboutOne />
        <AboutTwo />
      </section>
    );
  }
}
