function* getDiaryListSync(select, put) {
    var qs = require("query-string")

    const {pager} = yield select((state) => state.diary)
    console.log(pager);
    
    const { data, status } = yield fetch("/api/diaries?"+qs.stringify(pager),{
        "method":"GET",
        "headers": {"Content-Type":"application/json"}
    }).then(res => res.json())
    
    var newPager = { "start": data.next_start, "more": data.more }
    yield put({ "type": "changeDiarySync", "diaryData": data.object_list})
    yield put({ "type": "changePagerSync", "pager":newPager })
}

function* getDaRenListSync( put) {
    const {data} = yield fetch("/api/daren/top").then(res => res.json())
    yield put({"type":"changeDaRenListSync","daRenList": data.object_list})
}

function* getLunBoListSync(put) {
    const {data} = yield fetch("/api/lunbo").then(res => res.json())
    yield put({"type":"changeLunBoListSync", "lunBoList": data.object_list})
}

export const getDaRenList = getDaRenListSync
export const getDiaryList = getDiaryListSync
export const getLunBoList = getLunBoListSync