import React, { Component } from 'react'
import { connect } from "dva"
import "./App.less"
class App extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
export default connect()(App)
