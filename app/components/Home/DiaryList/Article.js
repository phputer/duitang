import React, { Component } from 'react'
import { connect } from "dva"

export default class Article extends Component {
  constructor(props) {
    super(props)
    
  }
  render() {
    const data = this.props.data
    return (
      <div className="item-container">
        <div className="feeds-item">
          <div className="user-info">
            <a href="#">
              <img className="avatar" src={data.article.sender.avatar} alt="" />
            </a>
            <div className="user-desc">
              <a href="#">
                <p className="username">{data.article.sender.username}</p>
              </a>
              <p className="item-class">{data.resource_info}</p>
            </div>
          </div>
          <p className="dynamic-album-desc">{data.article.title}</p>
          <div className="item-article">
            <div className="prev-user">
              <img src={data.article.sender.avatar} alt="" />
              <span>{data.article.sender.username}</span>
            </div>
            <img className="article-prev" src={data.article.cover.photo_path} alt="" />
          </div>
        </div>
        {/* {点赞/收藏/更多} */}
        <div className="action">
          <ul>
            <li className="like one-action">
              <img src={data.icon_infos[0].icon_url} alt="" />
              <span>{data.icon_infos[0].icon_info}</span>
            </li>
            <li className="favorite one-action">
              <img src={data.icon_infos[1].icon_url} alt="" />
              <span>{data.icon_infos[1].icon_info}</span>
            </li>
            <li className="more one-action">
              <img src="https://b-ssl.duitang.com/uploads/item/201804/23/20180423141044_tPCeh.png" alt="" />
              <span>更多</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
