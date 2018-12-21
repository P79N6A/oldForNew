import { queryOrderList, addTerminal, deleteTerminal } from "@/services/api";

export default {
  namespace: "order",
  state: {
    // queryStatusList:[{
    //           label:"全部",
    //           value:0,
    //       },
    //
    //   ],
    orderList: [],
    total: 0
  },

  effects: {
    *queryOrderList(action, { call, put }) {
      const response = yield call(queryOrderList, action);
      yield put({
        type: "save",
        payload: response.data
      });
    },
    *addTerminal(action, { call, put }) {
      const response = yield call(addTerminal, action);
      yield put({
        type: "save",
        payload: response
      });
    },
    *deleteTerminal(action, { call, put }) {
      const response = yield call(deleteTerminal, action);
    }
    // *exportOrderQueryList(action, { call, put }) {
    //   const response = yield call(exportOrderQueryList,action.data);
    // },
    // *exportOrderQueryInterval(action, { call, put }) {
    //   const response = yield call(exportOrderQueryInterval,action.data);
    // },
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    }
    // clear() {
    //   return {
    //     visitData: [],
    //     visitData2: [],
    //     salesData: [],
    //     searchData: [],
    //     offlineData: [],
    //     offlineChartData: [],
    //     salesTypeData: [],
    //     salesTypeDataOnline: [],
    //     salesTypeDataOffline: [],
    //     radarData: [],
    //   };
    // },
  }
};
