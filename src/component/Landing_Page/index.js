import React , { Fragment }from "react";
import FeatureSection from "../../common/src/containers/Hosting/Features";
import InfoSection from "../../common/src/containers/Hosting/Info";
import DomainSection from "../../common/src/containers/Hosting/Domain";
import PaymentSection from "../../common/src/containers/Hosting/Payment";
import GuaranteeSection from "../../common/src/containers/Hosting/Guarantee";
import ServicesSection from "../../common/src/containers/Hosting/Services";
import BannerSection from "../../common/src/containers/Hosting/Banner";
import PricingSection from "../../common/src/containers/Hosting/Pricing";
import TestimonialSection from "../../common/src/containers/Hosting/Testimonials";
import ContactSection from "../../common/src/containers/Hosting/Contact";
import FaqSection from "../../common/src/containers/Hosting/Faq";

const Landing = () => {
  return (
    <Fragment>
      <BannerSection />
      <ServicesSection />
      <FeatureSection />
      <TestimonialSection />
      <GuaranteeSection />
      <DomainSection />
      <InfoSection />
      <PricingSection />
      <PaymentSection />
      <FaqSection />
      <ContactSection />
      </Fragment>
  );
};

export default Landing;
