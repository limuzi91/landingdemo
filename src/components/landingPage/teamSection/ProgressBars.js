import React, { Component } from "react";
import Waypoint from "react-waypoint";
import $ from "jquery";

export default class ProgressBars extends Component {
  state = {
    waypoint: true
  };

  componentDidMount() {
    this.$el = $(this.el);
    this.$elTwo = $(this.elTwo);
    this.$elThree = $(this.elThree);
    this.$elFour = $(this.elFour);
  }

  toggle = () => {
    this.$el.slideToggle();
  };

  _handleWaypointEnter = () => {
    console.log("entered");
    this.setState({ waypoint: false });

    this.$el.animate(
      {
        width: this.$el.attr("aria-valuenow") + "%"
      },
      700
    );
    this.$elTwo.animate(
      {
        width: this.$elTwo.attr("aria-valuenow") + "%"
      },
      700
    );
    this.$elThree.animate(
      {
        width: this.$elThree.attr("aria-valuenow") + "%"
      },
      700
    );
    this.$elFour.animate(
      {
        width: this.$elFour.attr("aria-valuenow") + "%"
      },
      700
    );
  };

  componentWillUnmount() {
    this.$el.animate("destroy");
  }

  render() {
    return (
      <div id="progress-elements" style={{ marginTop: 30 }}>
        {/*<!-- Progress Bars -->*/}
        <div className="row wow fadeInUp">
          <div className="col-md-6 col-sm-6">
            {/*<!-- Skill 01 -->*/}
            <div className="skill">
              <h4>Web Design</h4>
              <div className="progress">
                <div
                  className="progress-bar"
                  ref={el => (this.el = el)}
                  role="progressbar"
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "0%" }}
                >
                  <span>95%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            {/*<!-- Skill 02 -->*/}
            <div className="skill">
              <h4>Photoshop/Illustration</h4>
              <div className="progress">
                <div
                  className="progress-bar"
                  ref={elTwo => (this.elTwo = elTwo)}
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "0%" }}
                >
                  <span>75%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            {/*<!-- Skill 03 -->*/}
            <div className="skill">
              <h4>Web Development</h4>
              <div className="progress">
                <div
                  className="progress-bar"
                  ref={elThree => (this.elThree = elThree)}
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "0%" }}
                >
                  <span>75%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            {/*<!-- Skill 04 -->*/}
            <div className="skill">
              <h4>Digital Marketing</h4>
              <div className="progress">
                <div
                  className="progress-bar"
                  ref={elFour => (this.elFour = elFour)}
                  role="progressbar"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "0%" }}
                >
                  <span>90%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.waypoint ? (
          <Waypoint onEnter={this._handleWaypointEnter} />
        ) : null}
      </div>
    );
  }
}
