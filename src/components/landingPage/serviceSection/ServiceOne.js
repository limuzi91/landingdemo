import React, { Component } from "react";

export default class ServiceOne extends Component {
  render() {
    return (
      <div id="services-01">
        <div className="content-box-lg">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center wow slideInDown">
                <div className="horizontal-heading">
                  <h5>What We Do</h5>
                  <h2>Our Services</h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-7 col-sm-7 wow slideInLeft">
                <img
                  src="/assets/img/services/laptop-with-lamp.png"
                  alt="laptop"
                  className="img-responsive"
                />
              </div>
              <div className="col-md-5 col-sm-5 wow slideInRight">
                {/*<!-- Service 01 -->*/}
                <div className="service">
                  <div className="row">
                    <div className="col-md-2 col-sm-2">
                      <div className="icon text-right">
                        <i className="fa fa-paint-brush" />
                      </div>
                    </div>

                    <div className="col-md-10 col-sm-10">
                      <h5>Service 01</h5>
                      <h4>Web Design</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Iusto tempora aut, nesciunt rem excepturi itaque
                        laborum odio, id explicabo.
                      </p>
                    </div>
                  </div>
                </div>

                {/*<!-- Service 02 -->*/}
                <div className="service">
                  <div className="row">
                    <div className="col-md-2 col-sm-2">
                      <div className="icon text-right">
                        <i className="fa fa-laptop" />
                      </div>
                    </div>

                    <div className="col-md-10 col-sm-10">
                      <h5>Service 02</h5>
                      <h4>Web Development</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Iusto tempora aut, nesciunt rem excepturi itaque
                        laborum odio, id explicabo.
                      </p>
                    </div>
                  </div>
                </div>

                {/*<!-- Service 03 -->*/}
                <div className="service">
                  <div className="row">
                    <div className="col-md-2 col-sm-2">
                      <div className="icon text-right">
                        <i className="far fa-paper-plane" />
                      </div>
                    </div>

                    <div className="col-md-10 col-sm-10">
                      <h5>Service 03</h5>
                      <h4>Digital Marketing</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Iusto tempora aut, nesciunt rem excepturi itaque
                        laborum odio, id explicabo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
