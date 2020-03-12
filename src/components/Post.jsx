import React, { Component } from 'react'
import axios from 'axios'

export default class Post extends Component {
  state ={
    post: null
  }
  componentDidMount(){
    console.log(`=========>> PROPS IN POST:`,this.props)

    let specificId = this.props.match.params.post_id

    axios.get('https://jsonplaceholder.typicode.com/posts/' + specificId)
    .then(res => {
      this.setState({
        post: res.data
      })
      console.log(`========>> RESPONSE IN POST FROM GET`,res)
    })
  }
  render() {
    return (
      <div className='container'>
        <h4>info</h4>
      </div>
    )
  }
}
