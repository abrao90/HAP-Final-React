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
import { withContentFul } from "../ContentFul";


class LandingBase extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isDataAvaliable: false
     }
  }

  componentWillMount(){
    this.props.contentful.getPostfromContentful()
    .then((response)=>{
      const posts = [];
      response.items.forEach(element => {
          posts.push(element)
      });
      return posts
    })
    .then((posts)=>{
      this.setState({
        posts
      }, ()=>{
        this.setState({
          isDataAvaliable: true,
        })
      })
    })
  }

  render() { 
    console.log(this.state);
    if (this.state.isDataAvaliable) {
      return ( 
        <Fragment>
        <BannerSection data={this.state.posts[1]} />
        <ServicesSection data={this.state.posts[5]}/>
        <FeatureSection data={this.state.posts[2]}/>
        <AboutTeam />
        <TestimonialSection data={this.state.posts[6]} />  
        <FaqSection data={this.state.posts[3]} />
        <BlogSection  data={this.state.posts[0]}/> 
        <VetsSection data={this.state.posts[4]} />
        <PricingSection />
        <InfoSection />
        <ContactSection data={this.state.posts[6]} />
      </Fragment>
       );
    } else {
      return null
    }
    
  }
}
 
const Landing = withContentFul(LandingBase)


export default Landing;
