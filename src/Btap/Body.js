import React, { Component } from 'react'
import Item from './Item';
import Banner from './Banner';
import "./Body.css";
export default class Body extends Component {
  render() {
    return (
      <div>
        <div className="containerBody">
          <Banner />
          <Item />
        </div>

      </div>
    )
  }
}
