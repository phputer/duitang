import fp from "lodash/fp"
import { getDiaryList,getDaRenList,getLunBoList } from "./utils/DiaryUtil.js"
export default {
    "namespace": "diary",
    "state": {
        "adv": [], //轮播图广告列表
        "diaryData": [],
        "pager": {
            "start": 0,
            "more": 1
        },
        "daRenList": [],
        "lunBoList": []
    },
    "reducers": {
        changeDiarySync(state, { diaryData}) {
            return fp.set("diaryData", fp.concat(state.diaryData,diaryData), state)
        },
        changePagerSync(state, {pager}) {
            return fp.set("pager", pager, state)
        },
        changeDaRenListSync(state, {daRenList}) {
            return fp.set("daRenList", daRenList, state)
        },
        changeLunBoListSync(state, {lunBoList}) {
            return fp.set("lunBoList", lunBoList, state)
        }
    },
    "effects": {
        *init(action, { call, put ,select}) {
            yield call(getDaRenList, put)
            yield call(getDiaryList, select, put)
        },
        *loadMore(action, {call, put, select}) {
            yield call(getDiaryList, select, put)
        },
        *loadLunBoList(action, {call, put, select}) {
            yield call(getLunBoList, put)
        }
    }
}