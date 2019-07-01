import React , { Fragment }from "react";
import FeatureSection from "../../common/src/containers/Hosting/Features";
import InfoSection from "../../common/src/containers/Hosting/Info";
import VetsSection from "../../common/src/containers/Hosting/Domain";
import BlogSection from "../../common/src/containers/Hosting/Payment";
import AboutTeam from "../../common/src/containers/Hosting/Guarantee";
import ServicesSection from "../../common/src/containers/Hosting/Services";
import BannerSection from "../../common/src/containers/Hosting/Banner";
import PricingSection from "../../common/src/containers/Hosting/Pricing";
import TestimonialSection from "../../common/src/containers/Hosting/Testimonials";
import ContactSection from "../../common/src/containers/Hosting/Contact";
import FaqSection from "../../common/src/containers/Hosting/Faq";
import Blog from '../Contentful'

const Landing = () => {
  return (
    <Fragment>
      <BannerSection />
      <Blog />
      <ServicesSection />
      <FeatureSection />
      <AboutTeam /><br/><br/><br/>
      <TestimonialSection />
      <FaqSection />
      <BlogSection /> {/* This is the blog section */}
      <VetsSection />
      <PricingSection />
      <InfoSection />< br/>< br/>< br/>
      <ContactSection />
      </Fragment>
  );
};

export default Landing;
