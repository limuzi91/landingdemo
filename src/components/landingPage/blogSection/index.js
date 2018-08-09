import React, { Component } from "react";

export default class BlogSection extends Component {
  render() {
    return (
      <section id="blog">
        <div className="content-box-md">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-sm-4 wow slideInLeft">
                <div id="blog-left">
                  <div className="vertical-heading">
                    <h5>Latest News</h5>
                    <h2>
                      Latest<br />From <strong>Blog</strong>
                    </h2>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Repudiandae cum itaque explicabo nulla quaerat id commodi
                    voluptatem.
                  </p>

                  <div id="blog-btn">
                    <a
                      className="btn btn-general btn-yellow"
                      href="#"
                      title="View All Posts"
                      role="button"
                    >
                      View All Posts
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-7 col-sm-8">
                <div className="row wow fadeInUp" data-wow-duration="3s">
                  <div className="col-md-6 col-sm-6">
                    {/*<!-- Blog Post 01 -->*/}
                    <div className="blog-post">
                      <h4>Your Post Title</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Cum officia minima ad eos. Dsit amet, consectetur
                        adipisicing elit.
                      </p>
                      <a href="#">Read More ></a>

                      <div className="post-meta">
                        <div className="row">
                          <div className="col-md-6 col-sm-8 col-xs-5">
                            <p>
                              <img
                                src="/assets/img/blog/user-1.jpg"
                                alt="author"
                                className="img-circle"
                              />{" "}
                              Daniel Watrous
                            </p>
                          </div>
                          <div className="col-md-6 col-sm-4 col-xs-7">
                            <p className="text-right">October 02,2017</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    {/*<!-- Blog Post 02 -->*/}
                    <div className="blog-post">
                      <h4>Your Post Title</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Cum officia minima ad eos. Dsit amet, consectetur
                        adipisicing elit.
                      </p>
                      <a href="#">Read More ></a>

                      <div className="post-meta">
                        <div className="row">
                          <div className="col-md-6 col-sm-8 col-xs-5">
                            <p>
                              <img
                                src="/assets/img/blog/user-2.jpg"
                                alt="author"
                                className="img-circle"
                              />{" "}
                              Johan Petter
                            </p>
                          </div>
                          <div className="col-md-6 col-sm-4 col-xs-7">
                            <p className="text-right">November 15,2017</p>
                          </div>
                        </div>
                      </div>
                    </div>
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
