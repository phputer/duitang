import React, { Component } from 'react'
import { Row, Col, Modal, Button } from "antd"
import 'antd/dist/antd.css'
import "./Login.less"
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: this.props.showLoginModal
    }
  }

  handleCancel(e) {
    console.log("点击关闭");
    this.setState({
      visible: false,
    })
    this.props.setModalStatus(false)
  }

  render() {
    return (
      <div className="login-modal">
        <Modal
          title="注册/登录"
          footer={null}
          style={{ width: "660px" }}
          visible={this.state.visible}
          onCancel={this.handleCancel.bind(this)}
        >
          <Row>
            <Col span={16}>
              <div className="cont">
                <form action="/" className="dt-form-login">
                  <div className="dt-uname cnt-i">
                    <label>手机号/邮箱：</label>
                    <input type="text" id="p-username" name="login_name" />
                  </div>
                  <div className="dt-password cnt-i">
                    <label>输入密码：</label>
                    <input type="password" name="login_pass" id="p-password" />
                  </div>
                  <div className="dt-chk">
                    <input className="chk" type="checkbox" name="remember" id="poplogin-rem" value="" checked="" />
                    <label >记住我</label>
                    <a className="pg-overseas r" href="javascript:;">切换至海外手机号登录</a>
                  </div>
                  <div className="submit clr">
                    <a className="abtn l" href="javascript:;" id="loginbtn">
                      <button type="submit" className="pg-loginbtn"><u>登录</u></button>
                    </a>
                  </div>
                </form>
                <div className="pg-reg">
                  <a href="#" className="qqsite">
                    <i className="pg-QQ"></i>
                  </a>
                  <a href="#" className="weibo">
                    <i className="pg-weibo"></i>
                  </a>
                  <a href="#" className="douban">
                    <i className="pg-douban"></i>
                  </a>
                  <a href="#" className="taobao">
                    <i className="pg-taobao"></i>
                  </a>
                  <a href="#" className="qqweibo">
                    <i className="pg-qqweibo"></i>
                  </a>
                </div>
              </div>
            </Col>
            <Col span={8}>
              <div className="sites">
                <div className="clr">
                  <a href="javascript:;" className="sites-a">
                    <img src="https://b-ssl.duitang.com/uploads/people/201802/27/20180227154240_LMZJP.png" />
                    <p className="p1" >扫一扫下载手机客户端</p>
                    <p className="p2">浏览体验更佳</p>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
          <div className="toreg clr">
          <a href="/reg/?next=/">还没有账号?立即注册</a>
          </div>
          </Row>
        </Modal>
      </div>
    )
  }
}
