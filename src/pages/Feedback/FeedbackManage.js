import React, { Component } from "react";
import { connect } from "dva";
import { formatMessage, FormattedMessage } from "umi/locale";
import Link from "umi/link";
import {
  Row,
  Col,
  Icon,
  Card,
  Tabs,
  Table,
  Radio,
  DatePicker,
  Tooltip,
  Menu,
  Dropdown,
  Form,
  Input,
  Select,
  Button,
  Popconfirm
} from "antd";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import Yuan from "@/utils/Yuan";
import { getTimeDistance } from "@/utils/utils";
import styles from "./style.less";
import moment from "moment";

const { TabPane } = Tabs;
const { RangePicker } = DatePicker;
const Option = Select.Option;

@connect(({ feedback, loading }) => ({
  feedback,
  getFeedbackListLoading: loading.effects["feedback/getFeedbackList"]
}))
@Form.create()
class Index extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  getFeedbackList(page = 1) {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        values.startTime = values.startTime
          ? values.startTime.format("YYYY-MM-DD")
          : null;
        values.endTime = values.endTime
          ? values.endTime.format("YYYY-MM-DD")
          : null;

        console.log(this.props);
        const newdata = {
          data: {
            endTime: values.endTime,
            isUse: "0",
            pageBean: {
              pageNumber: 1,
              pageSize: 10
            },
            startTime: values.startTime
          },
          app_key: "app_id_5",
          format: "json",
          sign: "02168DB3610503E525930DDA9E587378",
          version: "1.0",
          nonce: `bd1ded62-7fca-4585-b39f-42e4759c8b29${new Date().valueOf() +
            Math.random()}`,
          timestamp: `${new Date().valueOf()}`,
          name: "enterprise.enterpriseCodeList",
          token: this.getToken()
        };

        this.props.dispatch({ type: "feedback/getFeedbackList", ...newdata });
      }
    });
  }
  updateEventStatus(id, status) {
    const { fetchData } = this.props;
    this.props.dispatch({
      type: "feedback/updateEventStatus",
      data: { id, status }
    });
    setTimeout(() => {
      this.getFeedbackList();
    }, 1000);
  }
  // 获取token
  getToken = () => {
    if (window.localStorage.getItem("token")) {
      return window.localStorage.getItem("token");
    } else {
      this.props.history.push("/user/login");
    }
  };

  onGoDetail = status => {
    this.props.history.push({
      pathname: "/feedback/feedbackManage/datainfo",
      state: status
    });
  };

  deldteEventStatus(id) {
    const { fetchData } = this.props;
    this.props.dispatch({ type: "feedback/deldteEventStatus", data: { id } });
    setTimeout(() => {
      this.getFeedbackList();
    }, 1000);
  }
  render() {
    const {
      form: { getFieldDecorator },
      submitting
    } = this.props;
    const dateFormat = "YYYY/MM/DD";
    var myDate = new Date(); //获取系统当前时间
    const currentDate =
      myDate.getFullYear() +
      "/" +
      (myDate.getMonth() + 1) +
      "/" +
      myDate.getDate();
    console.log(this.props.feedback, "5555");
    const dataSource = this.props.feedback.data.enterpriseCodeList;
    const columns = [
      {
        title: "序号",
        dataIndex: "index",
        key: "index",
        align: "center"
      },
      {
        title: "购买时间",
        dataIndex: "createDate",
        key: "createDate",
        align: "center"
      },
      {
        title: "购买者姓名",
        dataIndex: "customerName",
        key: "customerName",
        align: "center"
      },
      {
        title: "购买者手机号",
        dataIndex: "customerTel",
        key: "customerTel",
        align: "center"
      },
      {
        title: "购买者产品名称",
        dataIndex: "productName",
        key: "productName",
        align: "center"
      },
      {
        title: "补贴金额",
        render: (status, record, index) => (
          <div>
            {status.isUse == 0 ? (
              <div style={{ color: "red" }}>
                {"(" + status.price + "已领取)"}
              </div>
            ) : (
              <div>{status.price}</div>
            )}
          </div>
        ),
        align: "center"
      },
      {
        title: "操作",
        render: (status, record, index) => (
          <div>
            <Popconfirm visible={false} onClick={() => this.onGoDetail(status)}>
              <a href="#">查看详情</a>
            </Popconfirm>
          </div>
        ),
        align: "center"
      }
    ];
    const pagination = {
      total: this.props.feedback.total,
      pageSize: 30,
      onChange: page => {
        this.getFeedbackList(page);
      }
    };
    return (
      <PageHeaderWrapper>
        <Card title="数据管理" className={styles.card} bordered={false}>
          <Form layout="vertical">
            <Row gutter={16}>
              <Col span={4}>
                <Form.Item label="开始时间">
                  {getFieldDecorator("startTime", {
                    format: dateFormat
                  })(
                    <DatePicker
                      style={{
                        width: "100%"
                      }}
                    />
                  )}
                </Form.Item>{" "}
                ·
              </Col>
              <Col span={4}>
                <Form.Item label="结束时间">
                  {getFieldDecorator("endTime", {
                    format: dateFormat
                  })(
                    <DatePicker
                      style={{
                        width: "100%"
                      }}
                    />
                  )}
                </Form.Item>{" "}
                ·
              </Col>
              <Col lg={6} md={12} sm={24}>
                <Form.Item label="补贴领取状态">
                  {getFieldDecorator("feedBackType", {
                    initialValue: -1
                  })(
                    <Select>
                      <Option key={1} value={-1}>
                        全部
                      </Option>
                      <Option key={2} value={1}>
                        已领取补贴金额
                      </Option>
                      <Option key={3} value={2}>
                        未领取补贴金额
                      </Option>
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="&nbsp;">
                  <Button
                    type="primary"
                    onClick={this.getFeedbackList.bind(this, 1)}
                    loading={this.props.getFeedbackListLoading}
                    style={{ marginRight: "15px" }}
                  >
                    查询
                  </Button>
                </Form.Item>
              </Col>
              {/* <Col lg={6} md={12} sm={24}>
              <Form.Item label='手机号'>
                {
                  getFieldDecorator('mobile', {
                      initialValue: '',
                  })(<Input placeholder="请输入手机号"/>)
                }
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="处理状态">
                  {getFieldDecorator('status', {
                      initialValue : -1
                  })(
                      <Select
                        >
                          <Option key={1} value={-1}>全部</Option>
                          <Option key={2} value={1}>已处理</Option>
                          <Option key={3} value={0}>未处理</Option>
                       </Select>
                  )}
              </Form.Item>
            </Col> */}
            </Row>

            <Row gutter={16} />
          </Form>
          <Row>
            <Col>
              <Table
                title={() => (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}
                  >
                    <h3>
                      订单列表{" "}
                      <span style={{ fontSize: "12px" }}>
                        共有
                        {this.props.feedback.total}
                        条数据
                      </span>
                    </h3>
                  </div>
                )}
                pagination={pagination}
                bordered
                columns={columns}
                dataSource={dataSource}
                rowKey={record => record.id}
                loading={this.props.getFeedbackListLoading}
              />
            </Col>
          </Row>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Index;
