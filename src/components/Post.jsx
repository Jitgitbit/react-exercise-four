import React, { Component } from 'react'

export default class Post extends Component {
  componentDidMount(){
    console.log(`=========>> PROPS IN POST:`,this.props)
    let id = this.props.match.params.post_id
  }
  render() {
    return (
      <div className='container'>
        <h4>route param</h4>
      </div>
    )
  }
}
