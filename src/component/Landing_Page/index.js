import React , { Fragment } from "react";
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
import * as contentful from 'contentful'

class Landing extends React.Component {
  state = {
    posts: []
  }
  client = contentful.createClient({
    space: 'novn5qkzrff8',
    accessToken: 'kWNN7ECQThRkF0jSoaS0ZJ_WXxsBO6BjOqXsvuAf07g'
  })
  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }
  fetchPosts = () => this.client.getEntries()
  setPosts = response => {
    this.setState({
      posts: response.items
    })
  }
  render() {
    console.log('0 - For Vets Section',this.state.posts[0])
    console.log('1 - For FAQ Section',this.state.posts[1])
    console.log('2 - For Why Us Banner Section',this.state.posts[2])
    console.log('3 - For Banner Section',this.state.posts[3])
    console.log('4 - For Blog Section',this.state.posts[4])
    console.log('5 - For Services Section',this.state.posts[5])
    console.log('6 - The end',this.state.posts[6])
    return (
      <Fragment>
      <BannerSection />
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
    )
  }
}


export default Landing;
