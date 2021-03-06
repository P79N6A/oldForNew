//easy-mock模拟数据接口地址

// PRODUCTION
const HOST = "http://180.153.19.161:9000/";
// const HOST                         = 'http://192.168.1.120:9000/';

// test
// const SYSTEM                    = 'http://test.sa-green.cn:8080/'
// const HOST                      = 'https://kt.sa-green.cn/';

/*
    common
*/

//登陆
export const LOGIN = HOST + "enterprise/api";

// 以旧换新的产品列表
export const GET_PRODUCT_LIST = HOST + "enterprise/api";

// 以旧换新新增产品
export const ADD_PRODUCT = HOST + "enterprise/api";

//以旧换新企业端数据查看详情
export const GET_CODE_DETAILS = HOST + "enterprise/api";

// 新增或者更改终端
export const ADD_TERMINAL = HOST + "enterprise/api";
//删除终端
export const DELETE_TERMINAL = HOST + "enterprise/api";
//首页模块
export const GET_INDEX_MODEL = HOST + "business/dashboard/load";
//首页大盘 豆腐块
export const INDEX_MODEL_LIST = HOST + "enterprise/api";
//首页大盘 销售额
export const INDEX_SALE_LIST = HOST + "business/dashboard/saleList";
//首页大盘 订单数
export const INDEX_ORDER_LIST = HOST + "business/dashboard/orderList";

// 订单
export const ORDER_LIST = HOST + "enterprise/api";
//订单查询导出1
export const ORDER_LIST_EXPORT = HOST + "business/order/list/export";
//订单查询导出2
export const ORDER_INTERVAL_EXPORT = HOST + "business/order/interval/export";

//查询反馈列表
export const QUERY_FEEDBACK_LIST = HOST + "enterprise/api";
//更新处理状态
export const UPDATE_EVENT_STATUS = HOST + "business/feedback/updateStatus";
//删除
export const DELDTE_EVENT_STATUS = HOST + "business/feedback/delete";
//发现列表查询
export const QUERY_FIND_LIST = HOST + "business/photo/list";
//删除图片
export const DEL_PHOTO = HOST + "business/photo/delete";
