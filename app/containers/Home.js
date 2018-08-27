import React, { Component } from 'react'
import App from "./App.js"
import DiaryList from "../components/Home/DiaryList/DiaryList.js"
import HomeBox from "../components/Home/HomeBox.js"
import Footer from "../components/Common/Footer.js"

export default class Home extends Component {
    render() {
        return (
            <App k="home">
                <HomeBox></HomeBox>
                <DiaryList></DiaryList>
                <Footer></Footer>
            </App>
        )
    }
}
