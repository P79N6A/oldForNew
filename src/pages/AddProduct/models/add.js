import { addProduct } from "@/services/api";
export default {
  namespace: "add",
  state: {
    response: "",
    fileList: [
      {
        uid: -1,
        name: "xxx.png",
        status: "done",
        url:
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      }
    ]
  },
  effects: {
    *addproduct({ payload }, { call, put }) {
      const response = yield call(addProduct, payload);
      yield put({
        type: "savedata",
        payload: { response: response }
      });
    }
  },
  reducers: {
    savedata(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    }
  }
};
