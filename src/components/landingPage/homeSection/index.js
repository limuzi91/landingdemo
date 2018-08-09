import React, { Component } from "react";

export default class HomeSection extends Component {
  render() {
    return (
      <section id="home">
        {/*<!-- Background Video -->*/}
        <video
          id="home-bg-video"
          poster="/assets/video/solo.jpg"
          autoPlay
          loop
          muted
        >
          <source src="/assets/video/solo.mp4" type="video/mp4" />
          <source src="/assets/video/solo.ogv" type="video/ogg" />
          <source src="/assets/video/solo.webm" type="video/webm" />
        </video>

        {/*<!-- Overlay -->*/}
        <div id="home-overlay" />

        {/*<!-- Home Content -->*/}
        <div id="home-content">
          <div id="home-content-inner" className="text-center">
            <div id="home-heading">
              <h1 id="home-heading-1">Digital</h1>
              <br />
              <h1 id="home-heading-2">
                Creative <span>Agency</span>
              </h1>
            </div>

            <div id="home-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam in
                nihil minima unde qui nihil minima.
              </p>
            </div>

            <div id="home-btn">
              <a
                className="btn btn-general btn-home smooth-scroll"
                href="#about"
                title="Start Now"
                role="button"
              >
                Start Now
              </a>
            </div>
          </div>
        </div>

        {/*<!-- Arrow Down -->*/}
        <a href="#about" id="arrow-down" className="smooth-scroll">
          <i className="fa fa-angle-down" />
        </a>
      </section>
    );
  }
}
