import React, { Component } from "react";
import { connect } from "dva";
import { formatMessage } from "umi/locale";

import Link from "umi/link";
import { Row, Col, Card, Tabs, DatePicker } from "antd";

import GridContent from "@/components/PageHeaderWrapper/GridContent";
import { getTimeDistance } from "@/utils/utils";
import echarts from "echarts";
import styles from "./Analysis.less";
const { Meta } = Card;

@connect(({ activities, loading }) => ({
  activities,
  loading: loading.effects["chart/fetch"],
  indexDetailListLoading: loading.effects["activities/fetchIndexDetailList"]
}))
@connect(({ login }) => ({
  login
}))
class Analysis extends Component {
  state = {
    salesType: "all",
    currentTabKey: "",
    rangePickerValue: getTimeDistance("year")
  };

  componentDidMount() {
    let data = {
      data: {
        pageBean: {
          pageNumber: 1,
          pageSize: 20
        }
      },
      app_key: "app_id_5",
      format: "json",
      sign: "02168DB3610503E525930DDA9E587378",
      version: "1.0",
      nonce: `bd1ded62-7fca-4585-b39f-42e4759c8b29${new Date().valueOf() +
        Math.random()}`,
      timestamp: `${new Date().valueOf()}`,
      name: "enterprise.EnterpriseProductList",
      token: this.getToken()
    };
    this.props.dispatch({
      type: "activities/fetchIndexDetailList",
      payload: {
        ...data
      }
    });
  }
  componentWillUnmount() {}
  getToken = () => {
    if (window.localStorage.getItem("token")) {
      return window.localStorage.getItem("token");
    } else {
      this.props.history.push("/user/login");
    }
  };

  render() {
    const { loading: propsLoding } = this.state;
    console.log(this.props);
    const { enterpriseProducts } = this.props.activities;

    const topColResponsiveProps = {
      xs: 24,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 6,
      style: { marginBottom: 24 }
    };

    const cardSt = {
      style: { width: 240, marginLeft: "auto", marginRight: "auto" }
    };
    const imgSt = {
      style: { height: 260 }
    };

    return (
      <GridContent>
        <Row gutter={24}>
          <Col {...topColResponsiveProps}>
            <Link to="/dashboard/analysis/addproduct">
              <Card
                hoverable
                {...cardSt}
                cover={
                  <img
                    {...imgSt}
                    alt="example"
                    src="https://img12.360buyimg.com/n1/jfs/t1/941/22/9846/145622/5bacf588E0eb77245/4c7931f6df7b485c.jpg"
                  />
                }
              >
                <Meta title="点击新增" description="新增新产品 " />
              </Card>
            </Link>
          </Col>
          {enterpriseProducts.map((item, index) => {
            return (
              <Col {...topColResponsiveProps} key={index}>
                <Link
                  to={{
                    pathname: "/dashboard/analysis/addproduct",
                    state: item
                  }}
                >
                  <Card
                    hoverable
                    {...cardSt}
                    cover={<img {...imgSt} alt="example" src={item.picUrl} />}
                  >
                    <Meta title={item.name} description="老板油烟机" />
                  </Card>
                </Link>
              </Col>
            );
          })}
          {/* 这个是新增的卡片 */}
        </Row>
      </GridContent>
    );
  }
}

export default Analysis;
