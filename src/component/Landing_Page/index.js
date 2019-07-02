import React , { Fragment , Component }from "react";
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

let BannerData, ServicesData, FeatureData, AboutTeamData, TestimonialData, FAQData, BlogData, VetsSectionData, ContactData;

class LandingBase extends Component {
  
  state = {
    posts: []
  }

  client = contentful.createClient({
    space: 'novn5qkzrff8',
    accessToken: 'kWNN7ECQThRkF0jSoaS0ZJ_WXxsBO6BjOqXsvuAf07g'
  })

  componentDidMount() {
    this.fetchPosts().then(this.setPosts)
  }

  fetchPosts = () => this.client.getEntries()


  setPosts = response => {
    this.setState({
      posts: response.items
    })
    // Blog Title
    BannerData = this.state.posts[1];
    console.log("Banner Data", BannerData)
    // fields.h1text, fields.paragraph, fields.boldColorText

    ServicesData = this.state.posts[5];
    console.log("Services Data", ServicesData)

    FeatureData = this.state.posts[2]; 
    console.log("Features Data", FeatureData)

    // AboutTeamData = this.state.posts[7];
    // console.log("About Team", AboutTeamData)

    TestimonialData = this.state.posts[6]; 
    console.log("Testimonial Data", TestimonialData)

    FAQData = this.state.posts[3];
    console.log("FAQ Data", FAQData)

    BlogData = this.state.posts[0]; 
    console.log("Blog Data", BlogData)
    // fields.headline, fields.headline2, fields.images IMG 1 full path - this.state.posts[0].fields.images[0].fields.file.url 
    //fields.images IMG 2 full path - this.state.posts[0].fields.images[1].fields.file.url 

    VetsSectionData = this.state.posts[4];
    console.log("VetSection Data", VetsSectionData)

    // ContactData = this.state.posts[1];
    // console.log("Headline", ContactData)
  }

  render() { 
    
      return ( 
        <Fragment>
      { this.state.posts.map(({fields}, i) =>
        <pre key={i}>{JSON.stringify(fields, null, 2)}</pre>
      )}
      
        {/* <BannerSection data={this.state.posts[1]} />
        <ServicesSection data={this.state.posts[5]}/>
        <FeatureSection data={this.state.posts[2]}/>
        <AboutTeam />
        <TestimonialSection data={this.state.posts[6]} />  
        <FaqSection data={this.state.posts[3]} />
        <BlogSection  data={this.state.posts[0]}/> 
        <VetsSection data={this.state.posts[4]} />
        <PricingSection />
        <InfoSection />
        <ContactSection data={this.state.posts[6]} /> */}
      </Fragment>
       )
  }
}

export default LandingBase;
