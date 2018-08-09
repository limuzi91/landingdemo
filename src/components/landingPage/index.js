import React, { Component, Fragment } from "react";
import HomeSection from "./homeSection";
import AboutSection from "./aboutSection";
import TeamSection from "./teamSection";
import StatementSection from "./statementSection";
import ServiceSection from "./serviceSection";
import TestimonialSection from "./testimonialSection";
import PricingSection from "./pricingSection";
import StatsSection from "./statsSection";
import ClientSection from "./clientSection";
import BlogSection from "./blogSection";
import ContactSection from "./contactSection";
import FooterSection from "./footerSection";

export default class index extends Component {
  render() {
    return (
      <Fragment>
        <HomeSection />
        <AboutSection />
        <TeamSection />
        <StatementSection />
        <ServiceSection />
        <TestimonialSection />
        <PricingSection />
        <StatsSection />
        <ClientSection />
        <BlogSection />
        <ContactSection />
        <FooterSection />
      </Fragment>
    );
  }
}
