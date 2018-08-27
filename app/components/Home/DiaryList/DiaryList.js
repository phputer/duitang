import React, { Component } from 'react'
import { connect } from "dva"
import Article from "./Article.js"
import Atlas from "./Atlas.js"
import RightArea from "./RightArea.js"
import "./DiaryList.less"
import cn from "classnames"

class DiaryList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabSel: "mrjx"
    }
    props.dispatch({ "type": "diary/init" })
  }
  render() {
    const { diaryData, dispatch } = this.props
    const getDiaryHtml = () => {
      var html = []
      diaryData.map(item => {
        if (item.resource_type == "article") {
          html.push(<Article key={item.id} data={item}></Article>)
        } else if (item.resource_type == "atlas") {
          html.push(<Atlas key={item.id} data={item}></Atlas>)
        }
      })
      return html
    }

    return (
      <div className="content">

        <div className="dt-wrap">
          <div className="feeds-tab">
            <ul>
              <li className={cn({ "selection": true, "cur": this.state.tabSel == 'mrjx' })}>
                每日精选
            </li>
              <li className={cn({ "selection": true, "cur": this.state.tabSel == 'gzdt' })}>
                关注动态
            </li>
            </ul>
          </div>
          <div className="item-list">
            {
              getDiaryHtml()
            }
            <div
              className={cn({ "view-more": true, "hidden": diaryData.length == 0 })}
              onClick={() => {
                dispatch({ "type": "diary/loadMore" })
              }}
            >
              查看更多
          </div>
          </div>
          <RightArea></RightArea>
        </div>
      </div>
    )
  }
}
export default connect(
  ({ diary: { diaryData, pager, daRenList } }) => {
    return {
      diaryData,
      pager,
      daRenList
    }
  }
)(DiaryList)
