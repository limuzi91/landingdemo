import React, { Component } from "react";
import { Carousel } from "antd";
import { Button } from "antd";

export default class TeamMembers extends Component {
  render() {
    return (
      <div className="row">
        {/*<!-- Team Left Side -->*/}
        <div className="col-md-6 col-sm-6 wow slideInLeft">
          <div id="team-left">
            <div className="vertical-heading">
              <h5>Who We Are</h5>
              <h2>
                Meet Our<br />
                <strong>Talented</strong> Team
              </h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
              repellat, eos! Dignissimos expedita totam cum quidem autem alias
              dolorum error a quia optio eligendi, amet animi reprehenderit,
              quaerat.
            </p>
          </div>
        </div>

        {/*<!-- Team Right Side -->*/}
        <div className="col-md-6 col-sm-6 ">
          <div id="team-members">
            <Carousel autoplay>
              <div className="center-block">
                <div className="team-member">
                  <img
                    src="/assets/img/team/team-1.jpg"
                    alt="team member"
                    className="img-responsive"
                  />
                  <div className="team-member-overlay">
                    <div className="team-member-info text-center">
                      <h6>Kevin Greer</h6>
                      <p>Web Designer</p>
                      <ul className="social-list">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-google-plus-g" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="team-member">
                  <img
                    src="/assets/img/team/team-2.jpg"
                    alt="team member"
                    className="img-responsive"
                  />
                  <div className="team-member-overlay">
                    <div className="team-member-info text-center">
                      <h6>Christian Cilinis</h6>
                      <p>Web Developer</p>
                      <ul className="social-list">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-google-plus-g" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="center-block">
                <div className="team-member">
                  <img
                    src="/assets/img/team/team-3.jpg"
                    alt="team member"
                    className="img-responsive"
                  />
                  <div className="team-member-overlay">
                    <div className="team-member-info text-center">
                      <h6>Andrea Arkov</h6>
                      <p>Senior Developer</p>
                      <ul className="social-list">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-google-plus-g" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="team-member">
                  <img
                    src="/assets/img/team/team-4.jpg"
                    alt="team member"
                    className="img-responsive"
                  />
                  <div className="team-member-overlay">
                    <div className="team-member-info text-center">
                      <h6>Harold Houdini</h6>
                      <p>Art Director</p>
                      <ul className="social-list">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-google-plus-g" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="center-block">
                <div className="team-member">
                  <img
                    src="/assets/img/team/team-5.jpg"
                    alt="team member"
                    className="img-responsive"
                  />
                  <div className="team-member-overlay">
                    <div className="team-member-info text-center">
                      <h6>Angela Perry</h6>
                      <p>Manager</p>
                      <ul className="social-list">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-google-plus-g" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="team-member">
                  <img
                    src="/assets/img/team/team-6.jpg"
                    alt="team member"
                    className="img-responsive"
                  />
                  <div className="team-member-overlay">
                    <div className="team-member-info text-center">
                      <h6>Kara Kulis</h6>
                      <p>Marketing & Sales</p>
                      <ul className="social-list">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-google-plus-g" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>

            {/*<!-- Member 01 -->*/}

            {/*<!-- Member 02 -->*/}

            {/*<!-- Member 03 -->*/}

            {/*<!-- Member 04 -->*/}

            {/*<!-- Member 05 -->*/}

            {/*<!-- Member 06 -->*/}
          </div>
        </div>
      </div>
    );
  }
}
