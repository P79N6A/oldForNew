import { getFindList, delPhoto } from "@/services/api";

export default {
  namespace: "find",
  state: {
    total: 0,
    records: []
  },

  effects: {
    *getFindList(action, { call, put }) {
      const response = yield call(getFindList, action.data);
      yield put({
        type: "save",
        payload: response.data
      });
    },
    *deldteEventStatus(action, { call, put }) {
      const response = yield call(delPhoto, action.data);
      yield put({
        type: "save",
        payload: response.data
      });
    }
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    },
    clear() {
      return {
        total: 0,
        records: []
      };
    }
  }
};
