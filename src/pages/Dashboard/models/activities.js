import { queryActivities, getIndexDetailList, getIndexSaleList, getIndexOrderList,getProductList } from '@/services/api';

export default {
  namespace: 'activities',

  state: {
    list: [],
    dashBoard : [],
    enterpriseProducts: [],
    day : '',
    saleListDate : [],
    saleListTurnover : [],
    orderListDate : [],
    orderListTurnover : []
  },

  effects: {
    *fetchIndexDetailList({payload}, { call, put }) {
      const response = yield call(getIndexDetailList,payload);
      console.log(response,'asdasdasdas');
      yield put({
        type: 'saveList',
        payload: response.data,
      });
    },
    *getIndexSaleList(_, { call, put }) {
      const response = yield call(getIndexSaleList);
      const saleListDate = response.data.date;
      const saleListTurnover = response.data.turnover;
      yield put({
        type: 'saveList',
        payload: {saleListDate,saleListTurnover},
      });
    },
    *getIndexOrderList(_, { call, put }) {
      const response = yield call(getIndexOrderList);
      const orderListDate = response.data.date;
      const orderListTurnover = response.data.turnover;
      yield put({
        type: 'saveList',
        payload: {orderListDate,orderListTurnover},
      });
    },
  },

  reducers: {
    saveList(state, {payload}) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
