import React, { Component } from "react";
import { connect } from "dva";
import { formatMessage, FormattedMessage } from "umi/locale";
import $ from "jquery";
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
// require('./lightgallery.css');
require("./../../utils/lightgallery-all.min.js");

import moment from "moment";
const { TabPane } = Tabs;
const { RangePicker, MonthPicker } = DatePicker;
const Option = Select.Option;

@connect(({ find, loading }) => ({
  find,
  getFindListLoading: loading.effects["find/getFindList"]
}))
@Form.create()
class Index extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    $("head").append(
      '<link rel="stylesheet" href="https://resource.sa-green.cn/kikyo/20181116/css/lightgallery.css">'
    );
  }
  getFeedbackList(page = 1) {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (values.date.length > 0) {
          values.beginTimeStr = values.date[0].format("YYYY-MM-DD hh:mm:ss");
          values.endTimeStr = values.date[1].format("YYYY-MM-DD hh:mm:ss");
        } else {
          values.beginTimeStr = "";
          values.endTimeStr = "";
        }
        console.log(values);
        // return
        const { beginTimeStr, endTimeStr, groupId } = values;
        this.props.dispatch({
          type: "find/getFindList",
          data: {
            beginTimeStr,
            endTimeStr,
            groupId,
            page: page,
            pageSize: 30,
            status: 1
          }
        });
      }
    });
  }
  componentDidUpdate(prevProps, prevState) {
    // $(document).ready(function(){
    //
    // });$('#lightgallery').
    // console.log(lightGallery());
    // $('body').hide();
    $(document).ready(function() {
      console.log(13222222);
      $(".lightgallery").lightGallery();
    });
  }
  deldteEventStatus(groupId) {
    const { fetchData } = this.props;
    this.props.dispatch({ type: "find/deldteEventStatus", data: { groupId } });
    setTimeout(() => {
      this.getFeedbackList();
    }, 1000);
  }
  render() {
    const columns = [
      {
        title: "groupId",
        dataIndex: "groupId",
        key: "groupId",
        align: "center"
      },
      {
        title: "点赞数",
        dataIndex: "starNumber",
        key: "starNumber",
        align: "center"
      },
      {
        title: "描述",
        dataIndex: "desc",
        key: "desc",
        align: "center"
      },
      {
        title: "用户ID",
        dataIndex: "userId",
        key: "userId",
        align: "center"
      },
      {
        title: "提交日期",
        dataIndex: "releaseTime",
        key: "releaseTime",
        align: "center"
      },
      {
        title: "内容",
        render: (status, record, index) => (
          <div className="lightgallery list-unstyled">
            {record.photoUrlList.map((item, index) => {
              return (
                <a href="" data-src={item} key={index}>
                  <img style={{ width: "50px", height: "50px" }} src={item} />
                </a>
              );
            })}
          </div>
        ),
        align: "center"
      },
      {
        title: "操作",
        render: (status, record, index) => (
          <div>
            {
              <Popconfirm
                title="是否删除?"
                onConfirm={this.deldteEventStatus.bind(this, record.groupId)}
                okText="确认"
                cancelText="取消"
              >
                <a className="text-btn" href="javascript:;">
                  删除
                </a>
              </Popconfirm>
            }
          </div>
        ),
        align: "center"
      }
    ];
    const {
      form: { getFieldDecorator },
      submitting
    } = this.props;
    const dateFormat = "YYYY/MM/DD HH:mm:ss";
    var myDate = new Date(); //获取系统当前时间
    let currentDate =
      myDate.getFullYear() +
      "/" +
      (myDate.getMonth() + 1) +
      "/" +
      myDate.getDate();
    let hour =
      myDate.getHours() < 10 ? "0" + myDate.getHours() : myDate.getHours();
    let minute =
      myDate.getMinutes() < 10
        ? "0" + myDate.getMinutes()
        : myDate.getMinutes();
    let second =
      myDate.getSeconds() < 10
        ? "0" + myDate.getSeconds()
        : myDate.getSeconds();
    currentDate = currentDate + " " + hour + ":" + minute + ":" + second;
    const pagination = {
      total: this.props.find.recordCount,
      pageSize: 30,
      onChange: page => {
        this.getFeedbackList(page);
      }
    };
    console.log(this.props);
    return (
      <PageHeaderWrapper>
        <Card title="发现照片列表查询" className={styles.card} bordered={false}>
          <Form layout="vertical">
            <Row gutter={16}>
              <Col lg={6} md={12} sm={24}>
                <Form.Item label="照片组ID">
                  {getFieldDecorator("groupId", {
                    initialValue: ""
                  })(<Input placeholder="请输入groupId" />)}
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="时间段">
                  {getFieldDecorator("date", {
                    initialValue: [
                      moment(currentDate, dateFormat),
                      moment(currentDate, dateFormat)
                    ],
                    format: "YYYY-MM-DD HH:mm:ss"
                  })(
                    <RangePicker
                      showTime={{ format: "HH:mm:ss" }}
                      format="YYYY-MM-DD HH:mm:ss"
                      style={{
                        width: "100%"
                      }}
                    />
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
                        {this.props.find.recordCount}
                        条数据
                      </span>
                    </h3>
                  </div>
                )}
                pagination={pagination}
                bordered
                columns={columns}
                dataSource={this.props.find.records}
                rowKey={record => record.groupId}
                loading={this.props.getFindListLoading}
              />
            </Col>
          </Row>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Index;
