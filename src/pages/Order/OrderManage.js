import React, {Component} from 'react';
import {connect} from 'dva';
import {formatMessage, FormattedMessage} from 'umi/locale';
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
  Button
} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import Yuan from '@/utils/Yuan';
import {getTimeDistance} from '@/utils/utils';
import styles from './style.less';
import moment from 'moment';

const {TabPane} = Tabs;
const {RangePicker} = DatePicker;
const Option = Select.Option;

@connect(({ order, loading }) => ({
  order,
  queryOrderListLoading : loading.effects['order/queryOrderList'],
}))@Form.create()

class Index extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  handleSubmit = (e) => {
      e.preventDefault();
      this.queryOrderList();
  };
  queryOrderList(page=1){
      this.props.form.validateFields((err, values) => {
          if (!err) {
              const { fetchData, siteId } = this.props;
              values.bookDate = values.bookDate ? values.bookDate.format('YYYY-MM-DD') : null;
              values.orderDate = values.orderDate ? values.orderDate.format('YYYY-MM-DD') : null;
              this.props.dispatch({type: 'order/queryOrderList',data:{...values,page:page,pageSize:30}})
          }
      });
  }
  exportXls(){
    this.props.history.push('/order/orderManage/addterminal');
    //   this.props.form.validateFields((err, values) => {
    //       if (!err) {
    //           const { fetchData } = this.props;
    //           values.bookDate = values.bookDate ? values.bookDate.format('YYYY-MM-DD') : null;
    //           values.orderDate = values.orderDate ? values.orderDate.format('YYYY-MM-DD') : null;
    //           this.props.dispatch({type: 'order/exportOrderQueryList',data:{...values}})
    //           // fetchData({funcName: 'exportOrderQueryList',params:{...values}});
    //       }
    //   });
  }
  componentDidMount() {}
  render() {
    const {form: {
        getFieldDecorator
      }, submitting} = this.props;
    const dateFormat = 'YYYY/MM/DD';
    var myDate = new Date(); //获取系统当前时间
    const currentDate = myDate.getFullYear() + '/' + (
    myDate.getMonth() + 1) + '/' + myDate.getDate();
    const columns = [
        {
            title: '序号',
            dataIndex: 'customerOrderId',
            key: 'customerOrderId',
            align : 'center'
        },
        {
            title: '终端名称',
            dataIndex: 'orderId',
            key: 'orderId',
            align : 'center'
        },
        {
            title: '所在地址',
            dataIndex: 'orderStatusStr',
            key: 'orderStatusStr',
            align : 'center'
        },
        {
            title: '负责人姓名',
            dataIndex: 'bookingDate',
            key: 'bookingDate',
            align : 'center'
        },
        {
            title: '手机号',
            dataIndex: 'mobile',
            key: 'mobile',
            align : 'center'
        },
        {
            title: '操作',
            render : (status,record,index) => <div>
            </div>,
            align : 'center'
        },
    ];
    const pagination = {
      total:this.props.order.total,
      pageSize: 30,
      onChange :  (page) => {
          this.queryOrderList(page);
      }
    };
    return (<PageHeaderWrapper>
      <Card title="终端查询" className={styles.card} bordered={false}>
        <Form layout="vertical">
        

          <Row gutter={16}>
              <Col span={6}>
                <Form.Item label="名称">
                {getFieldDecorator('orderStatus', {
                    initialValue : [0]
                })(
                    <Select
                        mode="multiple"
                        placeholder="请输入销售终端名称"
                      >
                        {
                            this.props.order.queryStatusList.map((item)=><Option key={item.value} value={item.value}>{item.label}</Option>)
                        }
                     </Select>
                )}
                </Form.Item>
              </Col>
              <Col span={6}>
                  <Form.Item  label='&nbsp;'>
                      <Button type="primary" onClick={this.queryOrderList.bind(this,1)} loading={this.props.queryOrderListLoading} style={{marginRight:'15px'}}>查询</Button>
                     
                      <Button type="primary" onClick={this.exportXls.bind(this)}>新增终端</Button>
                  </Form.Item>
              </Col>
          </Row>
        </Form>
        <Row>
            <Col>
                <Table
                    title={()=><div style={{display:'flex',justifyContent: 'space-between',alignItems: 'center'}}><h3>订单列表 <span style={{fontSize:'12px'}}>共有{this.props.order.total}条数据</span></h3></div>}
                    pagination={pagination}
                    bordered
                    columns={columns}
                    dataSource={this.props.order.orderList}
                    rowKey={record => record.orderId}
                    loading={this.props.queryOrderListLoading}
                    />
            </Col>
        </Row>
      </Card>
    </PageHeaderWrapper>);
  }
}

export default Index;
