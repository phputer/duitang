import React from "react";
import { Router , Route , Switch } from "dva/router";
import Home from "./containers/Home.js"
import Category from "./containers/Category.js"

export default ({history,app})=>{
    return <Router history={history}>
        <Switch>
            <Route exact path="/" component = {Home}></Route>
            <Route exact path="/cate" component = {Category}></Route>
        </Switch>
    </Router>
}