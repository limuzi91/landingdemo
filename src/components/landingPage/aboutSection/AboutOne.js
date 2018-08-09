import React, { Component } from "react";

export default class AboutOne extends Component {
  render() {
    return (
      <div id="about-01">
        <div className="content-box-lg">
          <div className="container">
            <div className="row">
              {/*<!-- About Left Side -->*/}
              <div className="col-md-6 col-sm-6 wow slideInLeft">
                <div id="about-left">
                  <div className="vertical-heading">
                    <h5>Who We Are</h5>
                    <h2>
                      A <strong>Story</strong>
                      <br />About Us
                    </h2>
                  </div>
                </div>
              </div>

              {/*<!-- About Right Side -->*/}
              <div className="col-md-6 col-sm-6 wow slideInRight">
                <div id="about-right">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente aspernatur harum libero et nostrum sequi
                    consequatur, tempore accusamus ab esse, voluptatem
                    laudantium voluptas rerum? Laborum id ad alias saepe
                    nemo,alias saepe ne consequatur.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Tenetur asperiores ad culpa similique, ratione dicta.
                    Cumque, officia. Velit et inventore hic, unde, eum ea! Vitae
                    dolores culpa molestias, in ratione.
                  </p>
                </div>
              </div>
            </div>

            {/*<!-- About Bottom -->*/}
            <div className="row">
              <div className="col-md-12 wow fadeInUp">
                <div id="about-bottom">
                  <img
                    src="/assets/img/about/about-blank.jpg"
                    alt="About Us"
                    className="img-responsive"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
