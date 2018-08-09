import React, { Component } from "react";
import { Tabs, Radio } from "antd";
const { TabPane } = Tabs;

export default class ServiceTwo extends Component {
  render() {
    return (
      <div id="services-02">
        <div className="content-box-md">
          <div id="services-tabs">
            <Tabs defaultActiveKey="1" size={"large"}>
              <TabPane tab="Creativity" key="1">
                <div id="service-tab-1" className="service-tab">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <img
                          src="/assets/img/services/service-tab-img-02.jpg"
                          alt="creativity"
                        />
                      </div>
                      <div className="col-md-6">
                        <div className="tab-bg">
                          <h2>01</h2>
                          <h3>Get More From Life With Creativity.</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Fugiat, illo, expedita. Voluptatem, facilis.
                            Voluptates ullam repellat nobis quisquam odit, esse
                            obcaecati aliquam nulla laborum veritatis sequi,
                            impedit sunt nam, possimus repellat nobis quisquam
                            odit, esse obcaecati aliquam nulla laborum.
                          </p>

                          <div id="services-02-btn-01">
                            <a
                              className="btn btn-general btn-yellow"
                              href="#services"
                              title="Get In Touch"
                              role="button"
                            >
                              Get In Touch
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="Strategy" key="2">
                <div id="service-tab-2" className="service-tab">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <img
                          src="/assets/img/services/service-tab-img-02.jpg"
                          alt="strategy"
                        />
                      </div>
                      <div className="col-md-6">
                        <div className="tab-bg">
                          <h2>02</h2>
                          <h3>The Home Of Strategy.</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Fugiat, illo, expedita. Voluptatem, facilis.
                            Voluptates ullam repellat nobis quisquam odit, esse
                            obcaecati aliquam nulla laborum veritatis sequi,
                            impedit sunt nam, possimus repellat nobis quisquam
                            odit, esse obcaecati aliquam nulla laborum.
                          </p>

                          <div id="services-02-btn-02">
                            <a
                              className="btn btn-general btn-yellow"
                              href="#services"
                              title="Get In Touch"
                              role="button"
                            >
                              Get In Touch
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="Design" key="3">
                <div id="service-tab-3" className="service-tab">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <img
                          src="/assets/img/services/service-tab-img-03.jpg"
                          alt="design"
                        />
                      </div>
                      <div className="col-md-6">
                        <div className="tab-bg">
                          <h2>03</h2>
                          <h3>Design To Play It Safe.</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Fugiat, illo, expedita. Voluptatem, facilis.
                            Voluptates ullam repellat nobis quisquam odit, esse
                            obcaecati aliquam nulla laborum veritatis sequi,
                            impedit sunt nam, possimus repellat nobis quisquam
                            odit, esse obcaecati aliquam nulla laborum.
                          </p>

                          <div id="services-02-btn-03">
                            <a
                              className="btn btn-general btn-yellow"
                              href="#services"
                              title="Get In Touch"
                              role="button"
                            >
                              Get In Touch
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="Development" key="4">
                <div id="service-tab-4" className="service-tab">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <img
                          src="/assets/img/services/service-tab-img-03.jpg"
                          alt="development"
                        />
                      </div>
                      <div className="col-md-6">
                        <div className="tab-bg">
                          <h2>04</h2>
                          <h3>From Our Development To Yours.</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Fugiat, illo, expedita. Voluptatem, facilis.
                            Voluptates ullam repellat nobis quisquam odit, esse
                            obcaecati aliquam nulla laborum veritatis sequi,
                            impedit sunt nam, possimus repellat nobis quisquam
                            odit, esse obcaecati aliquam nulla laborum.
                          </p>

                          <div id="services-02-btn-04">
                            <a
                              className="btn btn-general btn-yellow"
                              href="#services"
                              title="Get In Touch"
                              role="button"
                            >
                              Get In Touch
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPane>
            </Tabs>

            {/*<!-- Service Tab 01 -->*/}

            {/*<!-- Service Tab 02 -->*/}

            {/*<!-- Service Tab 03 -->*/}

            {/*<!-- Service Tab 04 -->*/}
          </div>
        </div>
      </div>
    );
  }
}
