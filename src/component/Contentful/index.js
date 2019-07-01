import React from 'react'
import * as contentful from 'contentful'

class Blog extends React.Component {
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
    console.log('0 - For Vets Section',this.state.posts[0])
    console.log('1 - For FAQ Section',this.state.posts[1])
    console.log('2 - For Why Us Banner Section',this.state.posts[2])
    console.log('3 - For Banner Section',this.state.posts[3])
    console.log('4 - For Blog Section',this.state.posts[4])
    console.log('5 - For Services Section',this.state.posts[5])
    console.log('6 - The end',this.state.posts[6])
  }
  render() {
    return (
    <div>
      <p>This is the Blog Page</p>
      {/* <br/>
      {
        this.state.posts.map(({fields}, i) =>
        <pre key={i}>{JSON.stringify(fields, null, 2)}</pre>
      )} */}
    </div>
    )
  }
}
export default Blog