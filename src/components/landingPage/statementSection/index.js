import React, { Component } from "react";

export default class StatementSection extends Component {
  render() {
    return (
      <section id="statement">
        <div className="content-box-lg">
          <div className="container">
            <div className="row">
              <div className="col-md-12 wow fadeIn">
                <div id="tech-statement" className="text-center">
                  <h3>
                    <i className="fa fa-quote-left" /> We design and develop
                    services for customers of all sizes, <br /> specializing in
                    creating stylish, modern websites and online stores.{" "}
                    <i className="fa fa-quote-right" />{" "}
                  </h3>
                  <p>- Daniel Watrous -</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
