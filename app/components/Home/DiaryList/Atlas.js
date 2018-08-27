//图集
import React, { Component } from 'react'

export default class Atlas extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const data = this.props.data
    const getImgContainer = () => {
      var imgs = data.atlas.blogs
      var imgClass = "multi-img"
      if(imgs.length == 1) {
        imgClass = "single-img" 
      }
      var html = []
      imgs.forEach(item => {
        html.push(
          <a key={item.id}>
            <img className={imgClass} src={item.photo.path.replace(".jpg_webp",".thumb.300_300_c.jpg")} alt="" />
          </a>
        )
      })
      return html
    }

    return (
      <div className="item-container">
        <div className="feeds-item">
          <div className="user-info">
            <a href="#">
              <img className="avatar" src={data.atlas.sender.avatar} alt="" />
            </a>
            <div className="user-desc">
              <a href="#">
                <p className="username">{data.atlas.sender.username}</p>
              </a>
              <p className="item-class">{data.resource_info}</p>
            </div>
          </div>
          <p className="dynamic-album-desc">{data.atlas.desc}</p>
          <div className="item-img-container">
            {getImgContainer()}
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
