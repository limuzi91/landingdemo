import React, { Component } from "react";

export default class AboutTwo extends Component {
  render() {
    return (
      <div id="about-02">
        <div className="content-box-md">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-4 wow fadeInLeft">
                {/*<!-- About item 01 -->*/}
                <div className="about-item text-center">
                  <i className="fa fa-rocket" />
                  <h3>Mission</h3>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Distinctio, eos asperiores nobis molestias nam. Ex quos
                    dicta as.
                  </p>
                </div>
              </div>
              <div
                className="col-md-4 col-sm-4 wow fadeInUp"
                data-wow-duration="2s"
              >
                {/*<!-- About item 02 -->*/}
                <div className="about-item text-center">
                  <i className="fa fa-eye" />
                  <h3>Vision</h3>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Distinctio, eos asperiores nobis molestias nam. Ex quos
                    dicta as.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-4  wow fadeInRight">
                {/*<!-- About item 03 -->*/}
                <div className="about-item text-center">
                  <i className="fas fa-pencil-alt" />
                  <h3>Passion</h3>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Distinctio, eos asperiores nobis molestias nam. Ex quos
                    dicta as.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
