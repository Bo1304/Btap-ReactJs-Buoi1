import React, { Component } from 'react'
import "./Banner.css"
export default class Banner extends Component {
  render() {
    return (
     <div>
  <div className="containerBanner">
    <h1>
      A warm welcome!
    </h1>
    <p>
      Bootstrap utility classes are used to create this jumbotron since the old component has 
      been removed from the framework. Why create custom CSS when you can use utilities?
      Bootstrap utility classes are used to create this jumbotron since the old component has 
      been removed from the framework. Why create custom CSS when you can use utilities?
    </p>
    <button type="button" className="btn btn-primary">Call to action</button>
  </div>
</div>

    )
  }
}
