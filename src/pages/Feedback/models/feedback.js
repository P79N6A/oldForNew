import {
  queryFeedbackList,
  updateEventStatus,
  deldteEventStatus
} from "@/services/api";

export default {
  namespace: "feedback",
  state: {
    total: 0,
    feedBackList: [],
    data: []
  },

  effects: {
    *getFeedbackList(action, { call, put }) {
      const response = yield call(queryFeedbackList, action);
      response.data.enterpriseCodeList = response.data.enterpriseCodeList.map(
        (e, i) => {
          e.index = i + 1;
          return e;
        }
      );

      console.log(response, "返回参数");
      yield put({
        type: "save",
        payload: response
      });
    },
    *updateEventStatus(action, { call, put }) {
      const response = yield call(updateEventStatus, action.data);
    },
    *deldteEventStatus(action, { call, put }) {
      const response = yield call(deldteEventStatus, action.data);
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
        feedBackList: []
      };
    }
  }
};
