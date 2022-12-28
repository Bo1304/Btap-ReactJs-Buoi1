import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';
import Item from './Item';
import Body from './Body';
export default class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}
