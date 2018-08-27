import React, { Component } from 'react'

export default class CateFilter extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const cateList = [
      {
        "title": "空间",
        "list": ["客厅", "卧室", "楼梯", "阁楼", "儿童房", "厨房", "浴室", "阳台", "飘窗", "工作间"]
      },
      {
        "title": "家具",
        "list": ["沙发", "椅子", "桌子", "柜子", "灯饰", "收纳", "置物架", "照片墙", "zakka"]
      },
      {
        "title": "风格",
        "list": ["北欧", "地中海", "简约", "宜家", "田园"]
      }
    ]
    const getCatHtml = () => {
      var html = []
      cateList.map(item => {
        html.push(
          <div className="dt-sub-cat" key={item.title}>
            <div className="dt-sub-cat">
              <div className="dt-sub-cat-name">
                {item.title}
              </div>
              <div className="dt-tag-list">
                {
                  item.list.map((it, index) => {
                    return <a key={index} href="#">{it}</a>
                  })
                }
              </div>
            </div>
          </div>
        )
      })
      return html
    }
    return (
      <div>
        <div className="cate-list">
          <div className="tube">
            <div className="dt-cat">
              <div className="dt-cat-inner">
                <h2 className="dt-cat-title">家具生活</h2>
                <div className="dt-cat-content">
                  {getCatHtml()}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menulist">
          <div className="catnav">
            <span>分类</span>
            <i> > </i>
            <a href="http://" className="dt-tag-link">家具生活</a>
          </div>
          <div className="onlypro">
            <span><i></i>只看商品</span>
          </div>
        </div>
      </div>
    )
  }
}
