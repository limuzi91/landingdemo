import React, { Component } from "react";
import { Carousel } from "antd";

export default class TestimonialSection extends Component {
  render() {
    return (
      <section id="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-4 wow slideInLeft">
              <div className="vertical-heading">
                <h5>Who We Are</h5>
                <h2>
                  What Our <br />
                  <strong>Customers</strong> Say
                </h2>
              </div>
            </div>

            <div
              className="col-md-8 col-sm-8 wow fadeIn"
              data-wow-duration="2s"
            >
              <div id="testimonial-slider" ref={el => (this.el = el)}>
                <Carousel autoplay>
                  <div>
                    <div className="testimonial">
                      <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-6">
                          <h3>Quality Support</h3>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-6">
                          <div className="stars text-right">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                        </div>
                      </div>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quidem quas totam, delectus sit corporis quos
                        error qui. Minus cupiditate explicabo minima ea neque
                        perferendis corporis sint earum quas impedit.
                      </p>

                      <div className="author">
                        <div className="row">
                          <div className="col-md-2 col-sm-3 col-xs-6">
                            <img
                              src="/assets/img/testimonial/client-1.jpg"
                              alt="client"
                              className="img-responsive img-circle"
                            />
                          </div>
                          <div className="col-md-10 col-sm-3 col-xs-6">
                            <div className="author-name-des">
                              <p>Joq Martin</p>
                              <p>Senior Developer</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="testimonial">
                      <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-6">
                          <h3>Quality Support</h3>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-6">
                          <div className="stars text-right">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                        </div>
                      </div>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quidem quas totam, delectus sit corporis quos
                        error qui. Minus cupiditate explicabo minima ea neque
                        perferendis corporis sint earum quas impedit.
                      </p>

                      <div className="author" style={{ marginBottom: 80 }}>
                        <div className="row">
                          <div className="col-md-2 col-sm-3 col-xs-6">
                            <img
                              src="/assets/img/testimonial/client-2.jpg"
                              alt="client"
                              className="img-responsive img-circle"
                            />
                          </div>
                          <div className="col-md-10 col-sm-3 col-xs-6">
                            <div className="author-name-des">
                              <p>Joq Martin</p>
                              <p>Senior Developer</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="testimonial">
                      <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-6">
                          <h3>Quality Support</h3>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-6">
                          <div className="stars text-right">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                        </div>
                      </div>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quidem quas totam, delectus sit corporis quos
                        error qui. Minus cupiditate explicabo minima ea neque
                        perferendis corporis sint earum quas impedit.
                      </p>

                      <div className="author" style={{ marginBottom: 80 }}>
                        <div className="row">
                          <div className="col-md-2 col-sm-3 col-xs-6">
                            <img
                              src="/assets/img/testimonial/client-3.jpg"
                              alt="client"
                              className="img-responsive img-circle"
                            />
                          </div>
                          <div className="col-md-10 col-sm-3 col-xs-6">
                            <div className="author-name-des">
                              <p>Joq Martin</p>
                              <p>Senior Developer</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel>
                {/*<!-- Testimonial 01 -->*/}

                {/*<!-- Testimonial 02 -->*/}

                {/*<!-- Testimonial 03 -->*/}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
