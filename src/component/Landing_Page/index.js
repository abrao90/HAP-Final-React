import React from "react";
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
    <div>
      <BannerSection />
      <FeatureSection />
      <InfoSection />
      <PricingSection />
      <DomainSection />
      <ServicesSection />
      <PaymentSection />
      <TestimonialSection />
      <GuaranteeSection />
      <FaqSection />
      <ContactSection />
    </div>
  );
};

export default Landing;
