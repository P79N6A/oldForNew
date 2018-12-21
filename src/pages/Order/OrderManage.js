import React, { Component } from "react";
import { connect } from "dva";
import { formatMessage, FormattedMessage } from "umi/locale";
import {
  Row,
  Col,
  Icon,
  Card,
  Tabs,
  Table,
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

@connect(({ order, loading }) => ({
  order,
  queryOrderListLoading: loading.effects["order/queryOrderList"]
}))
@Form.create()
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1
    };
  }
  componentDidMount() {
    this.queryOrderList();
  }
  handleSubmit = e => {
    e.preventDefault();
    this.queryOrderList();
  };
  queryOrderList(page) {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const newdata = {
          data: {
            name: values.name, //可传
            pageBean: {
              pageNumber: page,
              pageSize: 10
            }
          },
          app_key: "app_id_5",
          format: "json",
          sign: "02168DB3610503E525930DDA9E587378",
          version: "1.0",
          nonce: `bd1ded62-7fca-4585-b39f-42e4759c8b29${new Date().valueOf() +
            Math.random()}`,
          timestamp: `${new Date().valueOf()}`,
          name: "enterprise.enterpriseTerminalList",
          token: this.getToken()
        };

        this.props.dispatch({ type: "order/queryOrderList", ...newdata });
      }
    });
  }
  // 获取token
  getToken = () => {
    if (window.localStorage.getItem("token")) {
      return window.localStorage.getItem("token");
    } else {
      this.props.history.push("/user/login");
    }
  };

  exportXls() {
    this.props.history.push("/order/orderManage/addterminal");
  }

  onDelete = state => {
    const newdata = {
      data: {
        id: state.id
      },
      app_key: "app_id_5",
      format: "json",
      sign: "02168DB3610503E525930DDA9E587378",
      version: "1.0",
      nonce: `bd1ded62-7fca-4585-b39f-42e4759c8b29${new Date().valueOf() +
        Math.random()}`,
      timestamp: `${new Date().valueOf()}`,
      name: "enterprise.deleteEnterpriseTerminal",
      token: this.getToken()
    };
    this.props
      .dispatch({ type: "order/deleteTerminal", ...newdata })
      .then(() => {
        this.queryOrderList(this.state.current);
      });
  };

  onOnEdit = state => {
    this.props.history.push({
      pathname: "/order/orderManage/addterminal",
      state: state
    });
  };
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
    const columns = [
      {
        title: "序号",
        dataIndex: "customerOrderId",
        key: "customerOrderId",
        align: "center"
      },
      {
        title: "终端名称",
        dataIndex: "name",
        key: "name",
        align: "center"
      },
      {
        title: "所在地址",
        dataIndex: "address",
        key: "address",
        align: "center"
      },
      {
        title: "负责人姓名",
        dataIndex: "contacts",
        key: "contacts",
        align: "center"
      },
      {
        title: "手机号",
        dataIndex: "tel",
        key: "tel",
        align: "center"
      },
      {
        title: "操作",
        render: (status, record, index) => (
          <div>
            <Popconfirm visible={false} onClick={() => this.onOnEdit(status)}>
              <a href="#">编辑</a>
            </Popconfirm>
            <Popconfirm
              title="您确定要删除吗?"
              onConfirm={() => this.onDelete(status)}
            >
              <a style={{ color: "red", marginLeft: "10px" }} href="#">
                删除
              </a>
            </Popconfirm>
          </div>
        ),
        align: "center"
      }
    ];

    console.log(this.props.order, "66666");
    const pagination = {
      total: this.props.order.count,
      pageSize: 10,
      current: this.state.current,
      onChange: page => {
        this.setState({ current: page }, () => {
          this.queryOrderList(page);
        });
      }
    };
    return (
      <PageHeaderWrapper>
        <Card title="终端查询" className={styles.card} bordered={false}>
          <Form layout="vertical">
            <Row gutter={16}>
              <Col span={6}>
                <Form.Item label="名称">
                  {getFieldDecorator("name", {})(
                    <Input placeholder="请输入产品名称" />
                  )}
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="&nbsp;">
                  <Button
                    type="primary"
                    onClick={this.queryOrderList.bind(this, 1)}
                    loading={this.props.queryOrderListLoading}
                    style={{ marginRight: "15px" }}
                  >
                    查询
                  </Button>

                  <Button type="primary" onClick={this.exportXls.bind(this)}>
                    新增终端
                  </Button>
                </Form.Item>
              </Col>
            </Row>
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
                        {this.props.order.count}
                        条数据
                      </span>
                    </h3>
                  </div>
                )}
                pagination={pagination}
                bordered
                columns={columns}
                dataSource={this.props.order.terminalsList}
                rowKey={record => record.id}
                loading={this.props.queryOrderListLoading}
              />
            </Col>
          </Row>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Index;
