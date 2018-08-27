import React, { Component } from 'react'

export default class Hot extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const dtTags = ["手账", "延禧攻略", "蜡烛", "仿妆", "香蜜", "编织", "七夕", "少女心", "卷发"]

    const getTagsHtml = () => {
      var tagsHtml = []
      dtTags.map((item, index) => {
        tagsHtml.push(
          <div className="dt-tag" key={index}>
            <a href="#">{item}</a>
          </div>
        )
      })
      return tagsHtml
    }
    return (
      <div id="dt-hot">
        <h3>社区热点</h3>
        <div className="dt-tags">
          {getTagsHtml()}
        </div>
        <div className="dt-activity-wrap">
          <div className="dt-activity">
            <a href="#">
              <span className="dt-label choice">精选</span>
              <span className="dt-activity-name">招募 ● 少女感养成学院</span>
            </a>
          </div>
          <a className="dt-activity-tool" target="_blank" href="/about/collectit/">
            <span className="dt-label">工具</span>
            <span className="dt-activity-name">堆糖收图小助手</span>
          </a>
        </div>
        <div id="pg-appdload">
          <img src="https://b-ssl.duitang.com/uploads/item/201806/06/20180606174907_WHMTS.png" alt="" />
          <div className="pg-appload-text">
            <h4>堆糖 - 美好生活研究所</h4>
            <p>最佳生活类应用</p>
            <a href="/app/duitang/" target="_blank">立即下载</a>
          </div>
        </div>
      </div>
    )
  }
}
