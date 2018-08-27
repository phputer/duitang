import React, { Component } from 'react'
import { connect } from "dva"
import cn from "classnames"

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lunBoIndex: 0
    }
    props.dispatch({ "type": "diary/loadLunBoList" })
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.changeLunBoIndex()
    }, 5500)
  }

  changeLunBoIndex() {
    this.setState({
      lunBoIndex: this.state.lunBoIndex === 0 ? 1 : 0
    })
    $(this.refs.carousel_content)
      .animate({ left: -(this.state.lunBoIndex * 100) + "%" }, 500)
  }
  render() {
    const { lunBoList } = this.props
    const getLunBoHtml = () => {
      var lunBoHtml = []
      lunBoList.map((item, index) => {
        lunBoHtml.push(
          <div
            key={index}
            className={cn("dt-carousel-item", { "cur": this.state.lunBoIndex == index })}
          >
            <a href="#" className="dt-carousel-a">
              <img src={item.image_url} alt="" />
            </a>
          </div>
        )
      })
      return lunBoHtml
    }

    return (
      <div className="dt-carousel">
        <div className="dt-carousel-content" ref="carousel_content">
          {getLunBoHtml()}
        </div>
        <div className="dt-carousel-points">
          {
            lunBoList.map((item, index) => {
              return <div
              key={index}
                className={cn("dt-carousel-point", { "cur": this.state.lunBoIndex == index })}
              >
              </div>
            })
          }
        </div>
      </div>
    )
  }
}
export default connect(
  ({ diary: { lunBoList } }) => {
    return {
      lunBoList
    }
  }
)(Carousel)