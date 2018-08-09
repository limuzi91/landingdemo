import React, { Component } from "react";

export default class PricingSection extends Component {
  render() {
    return (
      <section id="pricing">
        <div className="content-box-md">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center wow slideInDown">
                <div className="horizontal-heading">
                  <h5>Lovely Customers</h5>
                  <h2>Our Pricing</h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 col-sm-4 wow fadeInLeft">
                {/*<!-- Pricing Table 01 -->*/}
                <div className="pricing-table">
                  <div className="type">
                    <h4>Basic</h4>
                  </div>

                  <div className="price">
                    <div className="row">
                      <div className="col-md-4 col-sm-4 col-xs-4">
                        <h2>
                          <span className="dollar">&#36;</span>29<br />
                          <span className="month">Month</span>
                        </h2>
                      </div>
                      <div className="col-md-8 col-sm-8 col-xs-8">
                        <p>
                          You will get all these awesome services with this
                          great price. Get it now!
                        </p>
                      </div>
                    </div>
                  </div>
                  <ul className="package">
                    <li>
                      <i className="fa fa-check" />Full access
                    </li>
                    <li>
                      <i className="fa fa-check" />Unlimited Bandwidth
                    </li>
                    <li>
                      <i className="fa fa-check" />Powerful Admin Panel
                    </li>
                    <li>
                      <i className="fa fa-check" />Email Accounts
                    </li>
                    <li>
                      <i className="fa fa-check" />10 Free Web sites
                    </li>
                  </ul>

                  <div id="pricing-btn-01">
                    <a
                      className="btn btn-general btn-yellow"
                      href="#"
                      title="Get Started"
                      role="button"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 col-sm-4 wow fadeInUp"
                data-wow-duration="3s"
              >
                {/*<!-- Pricing Table 02 -->*/}
                <div className="pricing-table black">
                  <div className="type">
                    <h4>Unlimited</h4>
                  </div>

                  <div className="price">
                    <div className="row">
                      <div className="col-md-4 col-sm-4 col-xs-4">
                        <h2>
                          <span className="dollar">&#36;</span>57<br />
                          <span className="month">Month</span>
                        </h2>
                      </div>
                      <div className="col-md-8 col-sm-8 col-xs-8">
                        <p>
                          You will get all these awesome services with this
                          great price. Get it now!
                        </p>
                      </div>
                    </div>
                  </div>
                  <ul className="package">
                    <li>
                      <i className="fa fa-check" />Full access
                    </li>
                    <li>
                      <i className="fa fa-check" />Unlimited Bandwidth
                    </li>
                    <li>
                      <i className="fa fa-check" />Powerful Admin Panel
                    </li>
                    <li>
                      <i className="fa fa-check" />Email Accounts
                    </li>
                    <li>
                      <i className="fa fa-check" />10 Free Web sites
                    </li>
                  </ul>

                  <div id="pricing-btn-02">
                    <a
                      className="btn btn-general btn-white"
                      href="#"
                      title="Get Started"
                      role="button"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 wow fadeInRight">
                {/*<!-- Pricing Table 03 -->*/}
                <div className="pricing-table">
                  <div className="type">
                    <h4>Professional</h4>
                  </div>

                  <div className="price">
                    <div className="row">
                      <div className="col-md-4 col-sm-4 col-xs-4">
                        <h2>
                          <span className="dollar">&#36;</span>96<br />
                          <span className="month">Month</span>
                        </h2>
                      </div>
                      <div className="col-md-8 col-sm-8 col-xs-8">
                        <p>
                          You will get all these awesome services with this
                          great price. Get it now!
                        </p>
                      </div>
                    </div>
                  </div>
                  <ul className="package">
                    <li>
                      <i className="fa fa-check" />Full access
                    </li>
                    <li>
                      <i className="fa fa-check" />Unlimited Bandwidth
                    </li>
                    <li>
                      <i className="fa fa-check" />Powerful Admin Panel
                    </li>
                    <li>
                      <i className="fa fa-check" />Email Accounts
                    </li>
                    <li>
                      <i className="fa fa-check" />10 Free Web sites
                    </li>
                  </ul>

                  <div id="pricing-btn-03">
                    <a
                      className="btn btn-general btn-yellow"
                      href="#"
                      title="Get Started"
                      role="button"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
