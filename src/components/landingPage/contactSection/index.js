import React, { Component } from "react";

export default class ContactSection extends Component {
  render() {
    return (
      <section id="contact">
        <div className="content-box-md">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                {/*<!-- Contact Left -->*/}
                <div id="contact-left">
                  <div className="vertical-heading">
                    <h5>Who We Are</h5>
                    <h2>
                      Get<br />In <strong>Touch</strong>
                    </h2>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias modi est itaque aliquam sit, minima esse nihil
                    mollitia no.
                  </p>

                  <div id="offices">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="office">
                          <h4>United States</h4>
                          <ul className="office-details">
                            <li>
                              <i className="fas fa-mobile-alt" />
                              <span>+(55) 879 58 87 46</span>
                            </li>
                            <li>
                              <i className="fa fa-envelope" />
                              <span>support@solo.com</span>
                            </li>
                            <li>
                              <i className="fas fa-map-marker-alt" />
                              <span>
                                524 Mina Street Building 05<br />Newyork, USA.
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="office">
                          <h4>Australia</h4>
                          <ul className="office-details">
                            <li>
                              <i className="fas fa-mobile-alt" />
                              <span>+(88) 457 87 74 87</span>
                            </li>
                            <li>
                              <i className="fa fa-envelope" />
                              <span>support@solo.com</span>
                            </li>
                            <li>
                              <i className="fas fa-map-marker-alt" />
                              <span>
                                507 Din Street Building 55 <br />Sydney,
                                Australia.
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

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
              <div className="col-md-6">
                {/*<!-- Contact Right -->*/}
                <div id="contact-right">
                  <form>
                    <h4>Send Message</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Culpa repell.
                    </p>

                    <div className="row">
                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Email Address"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="phone"
                            placeholder="Phone No."
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="subject"
                            placeholder="Subject"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        id="message"
                        placeholder="Message"
                      />
                    </div>

                    <div id="submit-btn">
                      <a
                        className="btn btn-general btn-yellow"
                        href="#"
                        title="Submit"
                        role="button"
                      >
                        Submit
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
