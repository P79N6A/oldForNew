import React, { Component } from "react";
import { connect } from "dva";
import { Card, Badge, Table, Divider } from "antd";
import DescriptionList from "@/components/DescriptionList";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import styles from "./DataInfo.less";

const { Description } = DescriptionList;

@connect(({ profile, loading }) => ({
  profile,
  loading: loading.effects["profile/getDetails"]
}))
class DataInfo extends Component {
  componentDidMount() {
    const { state } = this.props.history.location;
    if (state) {
      const { dispatch } = this.props;
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
        name: "enterprise.enterpriseCodeDetil",
        token: this.getToken()
      };
      dispatch({
        type: "profile/getDetails",
        ...newdata
      });
    }
  }

  // 获取token
  getToken = () => {
    if (window.localStorage.getItem("token")) {
      return window.localStorage.getItem("token");
    } else {
      this.props.history.push("/user/login");
    }
  };

  render() {
    const { profile, loading } = this.props;
    const { data } = profile;

    console.log(data, "777777");

    return (
      <PageHeaderWrapper title="数据详情页">
        <Card bordered={false}>
          <DescriptionList
            size="large"
            title="用户信息"
            style={{ marginBottom: 32 }}
          >
            <Description term="购买者姓名">{data.customer_name}</Description>
            <Description term="手机号">{data.customer_tel}</Description>
            <Description term="身份证号">{data.customer_idcard}</Description>
            <Description term="购买日期">{data.create_date}</Description>
          </DescriptionList>
          <Divider style={{ marginBottom: 32 }} />
          <DescriptionList
            size="large"
            title="产品信息"
            style={{ marginBottom: 32 }}
          >
            <Description term="产品名称">
              {data.product_name} CXW-200-63D1
            </Description>
            <Description term="销售终端名称">{data.name_}</Description>
            <Description term="产品售价">{data.price}</Description>
            <Description term="以旧换新补贴金额">
              {data.is_use == "2" ? data.price + "（已领取）" : data.price}
            </Description>
            <Description term="购买发票号">5356565656565556565</Description>
            <Description term="备注">无</Description>
          </DescriptionList>
          <Divider style={{ marginBottom: 32 }} />
          <div className={styles.title}>发票照片</div>
          <Card
            style={{ width: 240 }}
            bordered={false}
            bodyStyle={{ padding: 0 }}
          >
            <div className="custom-image">
              <img alt="example" width="100%" src={data.invoice_pic} />
            </div>
          </Card>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default DataInfo;
