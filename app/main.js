import React from "react"
import dva from "dva"
import logger from "redux-logger"
import router from "./router.js"
import DiaryModel from "./models/DiaryModel.js"
import CategoryModel from "./models/CategoryModel.js"
const app = dva({})
app.router(router)
app.model(DiaryModel)
app.model(CategoryModel)
app.start("#app")
