import React, { Component } from 'react'
import "./Footer.less"
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="dt-wrap">
          <div className="dt-span-list">
            <div className="dt-footer-span dt-footer-first oh tc">
              <div className="dt-footer-span-inner">
                <div className="dt-footer-span-title"
                >
                  APP下载
              </div>
                <div className="dt-tcode">
                  <img src="https://b-ssl.duitang.com/uploads/people/201802/27/20180227154240_LMZJP.png" alt="" />
                </div>
                <p>扫描二维码</p>
                <p>下载堆糖手机客户端</p>
              </div>
            </div>

            <div className="dt-footer-span oh">
              <div className="dt-footer-span-inner">
                <div className="dt-footer-span-title">关于我们</div>
                <div className="dt-footer-span-items">
                  <a className="_blank" href="/about/">关于我们</a>
                  <a className="_blank" href="/jobs/">加入我们</a>
                  <a className="_blank" href="/leave/message/">联系我们</a>
                  <a className="_blank" href="/bd/">商务合作</a>
                </div>
              </div>
            </div>

            <div className="dt-footer-span oh">
              <div className="dt-footer-span-inner">
                <div className="dt-footer-span-title">关注我们</div>
                <div className="dt-footer-span-items">
                  <a className="http://weibo.com/duitang/" target="_blank">新浪微博</a>
                  <a className="wxlink" href="javascript:;">微信公众号</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
