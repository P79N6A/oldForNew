import {
  queryBasicProfile,
  queryAdvancedProfile,
  getCodeDetails
} from "@/services/api";

export default {
  namespace: "profile",

  state: {
    basicGoods: [],
    advancedOperation1: [],
    advancedOperation2: [],
    advancedOperation3: []
  },

  effects: {
    *getDetails(payload, { call, put }) {
      const response = yield call(getCodeDetails, payload);
      yield put({
        type: "show",
        payload: response
      });

      console.log(response, "详情返回数据");
    },
    *fetchBasic(_, { call, put }) {
      const response = yield call(queryBasicProfile);
      yield put({
        type: "show",
        payload: response
      });
    },
    *fetchAdvanced(_, { call, put }) {
      const response = yield call(queryAdvancedProfile);
      yield put({
        type: "show",
        payload: response
      });
    }
  },

  reducers: {
    show(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    }
  }
};
