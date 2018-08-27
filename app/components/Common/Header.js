import React, { Component } from 'react'
import Login from "./Login.js"
import "./Header.less"
export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showLoginModal: false
    }
  }

  setModalStatus(status) {
    console.log(status)
      this.setState({
        showLoginModal : status
      }) 
  }

  render() {
    return (
      <div id="header">
        <div className="posiset">
          <div className="dt-header">
            <div className="dt-wrap">
              <a href="#/" className="dt-logo">堆糖</a>
              <div className="dt-nav">
                <div className="dt-nav-btn">
                  分类<i></i>
                </div>
              </div>
              <div className="dt-search">
                <form action="/search" method="get">
                  <input type="text" className="ipt" placeholder="搜索感兴趣的内容" />
                  <button type="submit"></button>
                </form>
              </div>
              <div className="dt-header-r">
                <div className="dt-login dt-head-cat">
                  <a href="javascript:;" onClick={() => {
                    console.log("点击注册/登录");
    
                    this.setState({
                      showLoginModal: true
                    })
                  }}>注册/登录</a>
                </div>
                <div className="dt-dreamer dt-head-cat">
                  <a className="dt-dreamer-a" href="#cate">堆糖生活家</a>
                </div>
              </div>
            </div>
          </div>
          <div className="dt-header-btm"></div>
        </div>
        {
          this.state.showLoginModal
            ?
            <Login setModalStatus={this.setModalStatus.bind(this) } showLoginModal={this.state.showLoginModal}></Login>
            : 
            null
        }

      </div>
    )
  }
}
