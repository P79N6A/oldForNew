import React, { PureComponent } from "react";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import styles from "./style.less";
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
  message
} from "antd";
const FormItem = Form.Item;
@Form.create()
@connect(({ add }) => ({
  add
}))
class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formLayout: "horizontal",
      previewVisible: false,
      previewImage: "",
      fileList: "",
      item: ""
    };
  }
  componentDidMount() {
    const { state } = this.props.history.location;

    if (state) {
      this.setState({ item: state });
      this.setState({
        fileList: [
          {
            uid: -1,
            name: "xxx.png",
            status: "done",
            url: state.picUrl
          }
        ]
      });
      this.props.form.setFieldsValue({
        name: state.name,
        price: state.price,
        subsidiesPrice: state.subsidiesPrice
      });
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const url = this.state.fileList[0].response;
        let newdata = {
          data: {
            id: this.state.item ? this.state.item.id : "", //有值为更新，无值为新增
            name: values.name,
            picUrl: url ? url.data.bigPicture : this.state.fileList[0].url,
            price: values.price,
            subsidiesPrice: values.subsidiesPrice
          },
          app_key: "app_id_5",
          format: "json",
          sign: "02168DB3610503E525930DDA9E587378",
          version: "1.0",
          nonce: `bd1ded62-7fca-4585-b39f-42e4759c8b29${new Date().valueOf() +
            Math.random()}`,
          timestamp: `${new Date().valueOf()}`,
          name: "enterprise.updateEnterpriseProduct",
          token: this.getToken()
        };

        console.log(newdata, "9999999");
        this.props
          .dispatch({
            type: "add/addproduct",
            payload: {
              ...newdata
            }
          })
          .then(data => {
            if (this.props.add.response.data == "操作成功") {
              message.info(this.props.add.response.msg);
              this.props.form.resetFields(); //清空所有控件
              this.props.history.push("/");
              return;
            }
            message.info(this.props.add.response.msg);
          });
      }
    });
  };

  // 图片上传start
  handleCancel = () => this.setState({ previewVisible: false });
  //上传图片之前钩子
  handBeforeUpload = () => {
    if (this.state.fileList) {
      this.setState({ fileList: "" });
    }
  };
  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
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
  // 上传文件改变时的状态
  handleChange = ({ fileList }) => {
    console.log(fileList, "yyyyyyy");

    this.setState({ fileList: fileList });
  };
  // 图片上传end

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
            wrapperCol: { span: 6 }
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

    // 图片上传start
    const { previewVisible, previewImage, fileList } = this.state;

    console.log(fileList, "yyyyyyy");

    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );

    // 图片上传end

    return (
      <PageHeaderWrapper>
        <Form className={styles.contentPP} layout={formLayout}>
          <FormItem label="产品名称" {...formItemLayout}>
            {getFieldDecorator("name", {
              rules: [{ required: true, message: "请输入产品名称!" }]
            })(<Input placeholder="请输入产品名称" />)}
          </FormItem>
          <FormItem label="产品售价" {...formItemLayout1}>
            {getFieldDecorator("price", {
              rules: [{ required: true, message: "请输入产品售价!" }]
            })(<Input placeholder="产品售价" />)}
          </FormItem>
          <FormItem label="以旧换新补贴金额" {...formItemLayout1}>
            {getFieldDecorator("subsidiesPrice", {
              rules: [{ required: true, message: "请输入补贴金额!" }]
            })(<Input placeholder="补贴金额" />)}
            <Tag>提示：该金额为用户购买此产品后，完成回收时的补贴金额</Tag>
          </FormItem>

          <FormItem label="产品图片" {...formItemLayout1}>
            <div className="clearfix">
              <Upload
                action="http://open.mayishoubei.com/ali/api"
                name="headImg"
                disabled={fileList.length >= 2}
                accept="image"
                fileList={fileList}
                data={file => {
                  let data = {
                    name: "util.uploadImageTwo",
                    format: "json",
                    version: "1.0",
                    nonce: `11fb0dbe-3816-467d-80a3-7c35558a94ef${new Date().getTime()}`,
                    timestamp: `${new Date().getTime()}`
                  };
                  return data;
                }}
                listType="picture-card"
                onPreview={this.handlePreview}
                onChange={this.handleChange}
                beforeUpload={this.handBeforeUpload}
              >
                {fileList.length >= 1 ? null : uploadButton}
                点击上传
              </Upload>
              <Modal
                visible={previewVisible}
                footer={null}
                onCancel={this.handleCancel}
              >
                <img
                  alt="example"
                  style={{ width: "100%" }}
                  src={previewImage}
                />
              </Modal>
            </div>
            <Tag>
              提示：请上传图片大小为220*240px，不大于500kb，格式为jpg,png
            </Tag>
          </FormItem>

          <FormItem {...buttonItemLayout}>
            <Button type="primary" onClick={this.handleSubmit}>
              确认提交
            </Button>
          </FormItem>
        </Form>
      </PageHeaderWrapper>
    );
  }
}

export default AddProduct;
