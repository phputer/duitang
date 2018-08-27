import React, { Component } from 'react'

import "./HomeTop.less"
import Carousel from "./Carousel.js"
import Hot from "./Hot.js"

export default class HomeTop extends Component {
  render() {
    return (
      <div className="dt-top dt-wrap">
        <div className="l pg-fscleft">
          <Carousel></Carousel>

        </div>
        <div className="r pg-fscright">
          <Hot></Hot>
        </div>
      </div>
    )
  }
}
