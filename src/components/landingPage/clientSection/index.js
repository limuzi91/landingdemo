import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default class ClientSection extends Component {
  render() {
    return (
      <section id="clients">
        <div className="content-box-sm">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="horizontal-heading" style={{ marginBottom: 0 }}>
                  <h5>Satisfied Clients</h5>
                  <h2>
                    Our Happy <strong>Clients</strong>
                  </h2>
                </div>
              </div>
            </div>

            <div
              className="row wow bounceInLeft"
              data-wow-duration="1s"
              data-wow-delay=".5s"
            >
              <div className="col-md-12">
                <OwlCarousel
                  id="clients-list"
                  items={6}
                  autoplayHoverPause={true}
                  navText={[
                    '<i class="fas fa-arrow-left"></i>',
                    '<i class="fas fa-arrow-right"></i>'
                  ]}
                  responsive={{
                    // breakpoint from 0 up
                    0: {
                      items: 2
                    },
                    // breakpoint from 480 up
                    480: {
                      items: 3
                    },
                    // breakpoint from 768 up
                    768: {
                      items: 6
                    }
                  }}
                  className="owl-theme"
                  loop
                  margin={10}
                  nav
                >
                  <div className="item">
                    <div className="client">
                      <img
                        src="/assets/img/client/client-1.png"
                        className="img-responsive"
                        alt="client"
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="client">
                      <img
                        src="/assets/img/client/client-2.png"
                        className="img-responsive"
                        alt="client"
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="client">
                      <img
                        src="/assets/img/client/client-3.png"
                        className="img-responsive"
                        alt="client"
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="client">
                      <img
                        src="/assets/img/client/client-4.png"
                        className="img-responsive"
                        alt="client"
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="client">
                      <img
                        src="/assets/img/client/client-5.png"
                        className="img-responsive"
                        alt="client"
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="client">
                      <img
                        src="/assets/img/client/client-6.png"
                        className="img-responsive"
                        alt="client"
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="client">
                      <img
                        src="/assets/img/client/client-7.png"
                        className="img-responsive"
                        alt="client"
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="client">
                      <img
                        src="/assets/img/client/client-8.png"
                        className="img-responsive"
                        alt="client"
                      />
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
