import React, { Component } from 'react'
import Header from "../Common/Header.js"
import Carousel from "./HomeTop/Carousel.js"
import HomeTop from "./HomeTop/HomeTop.js"
import DiaryList from "./DiaryList/DiaryList.js"
export default class HomeBox extends Component {
  render() {
    return (
      <div>
        <Header></Header> 
        <HomeTop></HomeTop>
      </div>
    )
  }
}
