import React, { PureComponent } from "react";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import style from "./style.less";
import { connect } from "dva";
import {
  Form,
  Input,
  Button,
  Radio,
  Tag,
  Upload,
  Icon,
  Modal,
  Card,
  message
} from "antd";
const FormItem = Form.Item;
@connect(({ order, loading }) => ({
  order,
  addTerminalLoading: loading.effects["order/addTerminal"]
}))
@Form.create()
class AddTerminal extends PureComponent {
  constructor() {
    super();
    this.state = {
      formLayout: "horizontal",
      item: "",
      btnName: "确认新增"
    };
  }

  componentDidMount() {
    let state = this.props.history.location.state;
    if (state) {
      this.setState({ item: state });
      this.setState({ btnName: "确认修改" });
      this.props.form.setFieldsValue({
        address: state.address,
        contacts: state.contacts,
        name: state.name,
        tel: state.tel
      });
    }
  }

  handleFormLayoutChange = e => {
    this.setState({ formLayout: e.target.value });
  };

  submit = e => {
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const newdata = {
          data: {
            ...values,
            id: this.state.item ? this.state.item.id : ""
          },
          app_key: "app_id_5",
          format: "json",
          sign: "02168DB3610503E525930DDA9E587378",
          version: "1.0",
          nonce: `bd1ded62-7fca-4585-b39f-42e4759c8b29${new Date().valueOf() +
            Math.random()}`,
          timestamp: `${new Date().valueOf()}`,
          name: "enterprise.updateEnterpriseTerminal",
          token: this.getToken()
        };
        this.props
          .dispatch({ type: "order/addTerminal", ...newdata })
          .then(() => {
            console.log(this.props.order, "3333");

            if (this.props.order.data) {
              message.info(this.props.order.msg);
              this.props.form.resetFields(); //清空所有控件
              this.props.history.push("/order/orderManage");
              return;
            }
            message.info(this.props.props.msg);
          });
      }
    });
  };
  // 获取token
  getToken = () => {
    if (window.localStorage.getItem("token")) {
      return window.localStorage.getItem("token");
    } else {
      this.props.history.push("/user/login");
    }
  };

  render() {
    const {
      form: { getFieldDecorator },
      submitting
    } = this.props;
    const { formLayout } = this.state;
    const formItemLayout =
      formLayout === "horizontal"
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 4 }
          }
        : null;
    const formItemLayout1 =
      formLayout === "horizontal"
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 2 }
          }
        : null;
    const buttonItemLayout =
      formLayout === "horizontal"
        ? {
            wrapperCol: { span: 14, offset: 4 }
          }
        : null;

    return (
      <PageHeaderWrapper>
        <Card title="新增销售终端" bordered={false}>
          <Form layout={formLayout}>
            <FormItem label="销售终端名称" {...formItemLayout}>
              {getFieldDecorator("contacts", {
                rules: [{ required: true, message: "请输入销售终端名称!" }]
              })(<Input placeholder="请输入销售终端名称" />)}
              <Tag color="blue" className={style.tag}>
                提示：终端名称即作为该终端登录账号
              </Tag>
            </FormItem>
            <FormItem label="所在地址" {...formItemLayout}>
              {getFieldDecorator("address", {
                rules: [{ required: true, message: "请输入所在地址!" }]
              })(<Input placeholder="请输入所在地址" />)}
            </FormItem>
            <FormItem label="负责人姓名" {...formItemLayout}>
              {getFieldDecorator("name", {
                rules: [{ required: true, message: "请输入姓名!" }]
              })(<Input placeholder="姓名" />)}
            </FormItem>
            <FormItem label="联系方式" {...formItemLayout}>
              {getFieldDecorator("tel", {
                rules: [{ required: true, message: "请输入手机号码!" }]
              })(<Input placeholder="手机号码" />)}
            </FormItem>
            <FormItem {...buttonItemLayout}>
              <Button onClick={this.submit} type="primary">
                {this.state.btnName}
              </Button>
            </FormItem>
          </Form>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default AddTerminal;
