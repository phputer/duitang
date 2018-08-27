import React, { Component } from 'react'
import { connect } from "dva"
import Item from "./Item.js"
import cn from "classnames"

class CateItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showLoad: false
    }
  }

  componentWillMount() {
    var that = this
    $(window).scroll(function () {
      //滚动条距离顶部的高度  
      var scrollTop = $(this).scrollTop();
      //当前页面的总高度
      var scrollHeight = $(document).height();
      //当前可视的页面高度
      var clientHeight = $(this).height();
      if (scrollTop + clientHeight >= scrollHeight) {
        //滚动条到达底部  
        that.loadMore()
      } else if (scrollTop <= 0) {
        //滚动条到达顶部  
      }
    })
  }

  loadMore() {
    this.props.dispatch({ "type": "category/loadItemServer" })
  }

  render() {
    const { cateData, filter, dispatch } = this.props
    const getCateItemHtml = () => {
      var html = []
      cateData.map((item) => {
        html.push(
          <Item item={item} key={item.id}></Item>
        )
      })
      return html
    }

    return (
      <div>
        <div className="item-container">
          {getCateItemHtml()}
        </div>
        <div
          className={cn("loadmore", { "loadshow": this.state.showLoad })}>
          <a href="#">
            <img src="https://b-ssl.duitang.com/uploads/item/201806/25/20180625171213_TAeGt.gif" alt="" />
          </a>
        </div>
      </div>
    )
  }
}
export default connect(
  ({ category: { cateData, filter } }) => {
    return {
      cateData,
      filter
    }
  }
)(CateItem)
