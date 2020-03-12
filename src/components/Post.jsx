import React, { Component } from 'react'

export default class Post extends Component {
  state ={
    id: null
  }
  componentDidMount(){
    console.log(`=========>> PROPS IN POST:`,this.props)
    let specificId = this.props.match.params.post_id
    this.setState({
      id: specificId
    })
  }
  render() {
    return (
      <div className='container'>
        <h4>route param: {this.state.id}</h4>
      </div>
    )
  }
}
