import React, { Component } from 'react'
import CateFilter from "./CateFilter.js"
import CateItem from "./CateItem.js"
import "./Category.less"
import { connect } from 'dva';
class Category extends Component {
  constructor(props) {
    super(props)
    props.dispatch({ "type": "category/loadItemServer" })
  }

  

  render() {
    const { cateData, filter, dispatch } = this.props
    return (
      <div className="content-cate">
        <CateFilter></CateFilter>
        <CateItem></CateItem>
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
)(Category)