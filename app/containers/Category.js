import React, { Component } from 'react'
import App from "./App.js"
import CarFilter from "../components/Category/Category.js"
import Header from "../components/Common/Header.js"
export default class Category extends Component {
    render() {
        return (
            <App k="category">
                <Header></Header>
                <CarFilter></CarFilter>
            </App>
        )
    }
}
