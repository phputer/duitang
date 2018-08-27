import React, { Component } from 'react'

export default class Item extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const item = this.props.item
    return (
      <div className="per-item" key={item.id}>
        <div className="item-top">
          <img src={item.photo.path} alt="" />
        </div>
        <div className="wooscr">
          <div className="g">
            {item.msg}
          </div>
          <div className="emotion">
            <div className="like">
              <i></i>
              <span>{item.like_count}</span>
            </div>
            <div className="coll">
              <i></i>
              <span>{item.favorite_count}</span>
            </div>
          </div>
          <ul>
            <li className="f">
              <a href="#">
                <img src={item.sender.avatar.replace(".jpeg", ".thumb.24_24_c.jpeg")} alt="" />
              </a>
              <p>
                <a href="http://">{item.sender.username}</a>
                <br />
                <span>
                  发布到<a href="http://">{item.album.name}</a>
                </span>
              </p>
            </li>
            {item.top_comments.next_start > 0
              ?
              <div className="comment-wrap">
                <li className="blog-comment">
                  <h4>图片评论</h4>
                  <span><i>{item.top_comments.next_start}</i>条</span>
                </li>
                {
                  item.top_comments.object_list.map((com) => {
                    return <li key={com.id} className="comment-item">
                      <a target="_blank" href="#">
                        <img width="28" height="28" src={com.sender.avatar} />
                      </a>
                      <p>
                        <a target="_blank" href="/people/?user_id=7785889">{com.sender.username}</a>
                        <br />
                        <span >{com.content}</span>
                      </p>
                    </li>
                  })
                }
              </div>
              :
              null
            }

          </ul>
        </div>
      </div>
    )
  }
}
