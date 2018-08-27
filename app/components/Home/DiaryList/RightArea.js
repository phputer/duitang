import React, { Component } from 'react'
import {connect} from "dva"
class RightArea extends Component {
    
  render() {
    const { daRenList} = this.props

    const getDaRenList = () => {
        var liHtml = []
        daRenList.map(item => {
          liHtml.push(
            <li key={item.id} className="per-daren">
              <div className="daren-img">
                <a href="#">
                  <img className="daren-avatar" src={item.avatar} alt="" />
                </a>
              </div>
              <div className="daren-desc">
                <a href="#" className="title">{item.username}</a>
                <p className="daren-shanchang">擅长领域:<b>{item.tags.join(',')}</b></p>
              </div>
              <a href="#" className="follow">关注</a>
            </li>
          )
        })
        return liHtml
      }
    return (
        <div className="right-area">
        <div className="daren">
          <h3>推荐关注</h3>
          <span className="change-daren">换一批</span>
          <ul className="daren-list">
            {getDaRenList()}
          </ul>
          <a href="#" className="daren-more">查看更多<i></i></a>
        </div>

        <div className="qrcode">
          <img src="https://b-ssl.duitang.com/uploads/item/201808/02/20180802182011_JSrQX.png" alt="" />
        </div>
      </div>
    )
  }
}
export default connect(
    ({ diary: { daRenList } }) => {
        return {
          daRenList
        }
      }
)(RightArea)
