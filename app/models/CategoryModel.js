import fp from "lodash/fp"
import { loadItemServer } from "./utils/CategoryUtil.js"
export default {

  "namespace": "category",
  "state": {
    "cateData": [],
    "filter": {
      "start": 0,
      "filter_id": "家居生活_沙发"
    }
  },
  "reducers": {
    changeCateItemSync(state, { cateData }) {
      return fp.set("cateData", fp.concat(state.cateData,cateData), state)
    },
    changeFilterSync(state, {filter}) {
      return fp.set("filter",filter, state)
    }
  },
  "effects": {
    *loadItemServer(state, { call, put, select }) {
      yield call(loadItemServer, put, select)
    }
  }
}