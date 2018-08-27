function* loadItemServerSync(put, select) {
  var qs = require("query-string")
  const { filter } = yield select((state) => state.category)
  
  const { data, status } = yield fetch("/api/category?" + qs.stringify(filter)).then(res => res.json())
  var newFilter = {"start":data.next_start, "filter_id": filter.filter_id}
  yield put({"type":"changeFilterSync","filter":newFilter})
  yield put({"type":"changeCateItemSync", "cateData":data.object_list})
}

export const loadItemServer = loadItemServerSync