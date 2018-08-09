import React, { Component } from "react";
import TweenOne from "rc-tween-one/lib";
import Waypoint from "react-waypoint";
import Children from "rc-tween-one/lib/plugin/ChildrenPlugin";
TweenOne.plugins.push(Children);

export default class StatsSection extends Component {
  state = {
    waypoint: true,
    value: 25,
    animation: null,
    animationTwo: null,
    animationThree: null,
    animationFour: null,

    formatMoney: false
  };

  _handleWaypointEnter = () => {
    const { value, formatMoney } = this.state;
    this.setState({
      animation: {
        Children: { value: value || 10000, floatLength: 0, formatMoney },
        duration: 1300
      },
      animationTwo: {
        Children: { value: 476, floatLength: 0, formatMoney },
        duration: 1300
      },
      animationThree: {
        Children: { value: 115, floatLength: 0, formatMoney },
        duration: 1300
      },
      animationFour: {
        Children: { value: 276, floatLength: 0, formatMoney },
        duration: 1300
      }
    });
  };

  render() {
    return (
      <section id="stats">
        <div className="content-box-md">
          <div className="container">
            <div className="row">
              <div className="col-md-12 wow slideInLeft">
                <div className="vertical-heading">
                  <h5>Fun Facts</h5>
                  <h2>
                    We Deliver<br />
                    <strong>Excellent</strong> Services
                  </h2>
                </div>
              </div>
            </div>

            <div className="row wow fadeInUp" data-wow-duration="2s">
              <div className="col-md-3 col-sm-3 col-xs-6">
                {/*<!-- Stats Item 01 -->*/}
                <div className="stats-item text-center">
                  <i className="fas fa-chart-bar" />
                  <h3 className="counter">
                    <TweenOne animation={this.state.animation}>0</TweenOne>
                  </h3>
                  <p>Years Experience</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-xs-6">
                {/*<!-- Stats Item 02 -->*/}
                <div className="stats-item text-center">
                  <i className="fab fa-codepen" />
                  <h3 className="counter">
                    <TweenOne animation={this.state.animationTwo}>0</TweenOne>
                  </h3>
                  <p>Projects Done</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-xs-6">
                {/*<!-- Stats Item 03 -->*/}
                <div className="stats-item text-center">
                  <i className="fa fa-trophy" />
                  <h3 className="counter">
                    <TweenOne animation={this.state.animationThree}>0</TweenOne>
                  </h3>
                  <p>Awards Received</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-xs-6">
                {/*<!-- Stats Item 04 -->*/}
                <div className="stats-item text-center">
                  <i className="fa fa-users" />
                  <h3 className="counter">
                    <TweenOne animation={this.state.animationFour}>0</TweenOne>
                  </h3>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.waypoint ? (
          <Waypoint onEnter={this._handleWaypointEnter} />
        ) : null}
      </section>
    );
  }
}
