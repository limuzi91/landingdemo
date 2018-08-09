import React, { Component } from "react";
import ServiceOne from "./ServiceOne";
import ServiceTwo from "./ServiceTwo";

export default class ServiceSection extends Component {
  render() {
    return (
      <section id="services">
        <ServiceOne />
        <ServiceTwo />
      </section>
    );
  }
}
