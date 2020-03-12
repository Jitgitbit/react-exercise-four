import React, { Component } from 'react'
import axios from 'axios'

export default class Home extends Component {
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts') //This is asynchronous, 0.5 - 3 seconds // It's a Promise
    .then(res => {
      console.log(`=========>> logging response from get in home:`,res)
    })
  }
  render() {
    return (
      <div className='container'>
        <h4 className="center">Home</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Dolor cum neque nulla modi itaque minus. 
           Mollitia voluptate tempora veritatis dignissimos omnis pariatur, nesciunt, recusandae iure quam eius, libero voluptatum dolores.</p>
      </div>
    )
  }
}