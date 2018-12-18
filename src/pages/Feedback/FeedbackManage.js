import React, {Component} from 'react';
import {connect} from 'dva';
import {formatMessage, FormattedMessage} from 'umi/locale';
import Link from 'umi/link';
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
} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import Yuan from '@/utils/Yuan';
import {getTimeDistance} from '@/utils/utils';
import styles from './style.less';
import moment from 'moment';

const {TabPane} = Tabs;
const {RangePicker} = DatePicker;
const Option = Select.Option;

@connect(({ feedback, loading }) => ({
  feedback,
  getFeedbackListLoading : loading.effects['feedback/getFeedbackList'],
}))@Form.create()

class Index extends Component {
  constructor(props) {
    super(props);


  }
  componentDidMount() {

  }
  getFeedbackList(page=1){
      this.props.form.validateFields((err, values) => {
          if (!err) {
              console.log(this.props);
              values.addDate = values.addDate ? values.addDate.format('YYYY-MM-DD') : null;
              this.props.dispatch({type: 'feedback/getFeedbackList',data:{...values,page:page,pageSize:30}})
          }
      });
  }
  updateEventStatus(id,status){
      const { fetchData } = this.props;
      this.props.dispatch({type: 'feedback/updateEventStatus',data:{id,status}})
      setTimeout(()=>{
          this.getFeedbackList()
      },1000)
  }
  deldteEventStatus(id){
      const { fetchData } = this.props;
      this.props.dispatch({type: 'feedback/deldteEventStatus',data:{id}})
      setTimeout(()=>{
          this.getFeedbackList()
      },1000)
  }
  render() {
    const {form: {
        getFieldDecorator
      }, submitting} = this.props;
    const dateFormat = 'YYYY/MM/DD';
    var myDate = new Date(); //获取系统当前时间
    const currentDate = myDate.getFullYear() + '/' + (
    myDate.getMonth() + 1) + '/' + myDate.getDate();

    const dataSource = [{
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
    tel:'1888888888',
    product:'2018款最流行的油烟机',
    rmb:'1195元',
    payTime:'2018-08-08 12:59:59'
    }, {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
    tel:'1888888888',
    product:'2019款最流行的油烟机（超级版）',
    rmb:'1195元',
    payTime:'2018-08-08 12:59:59'

    }];
    const columns = [
        {
            title: '序号',
            dataIndex: 'key',
            key: 'customerOrderId',
            align : 'center'
        },
        {
            title: '购买时间',
            dataIndex: 'payTime',
            key: 'addTime',
            align : 'center'
        },
        {
            title: '购买者姓名',
            dataIndex: 'name',
            key: 'content',
            align : 'center'
        },
        {
            title: '购买者手机号',
            dataIndex: 'tel',
            key: 'mobile',
            align : 'center'
        },
        {
            title: '购买者产品名称',
            dataIndex: 'product',
            key: 'contactNo5',
            align : 'center'
        },
        {
            title: '补贴金额',
            dataIndex: 'rmb',
            key: 'statusStr',
            align : 'center'
        },
        {
            title: '操作',
            render : (status,record,index) => <div>
                {
                    record.status===0? <div>
                     <Popconfirm title="再次确认更改状态为处理完成" onConfirm={this.updateEventStatus.bind(this,record.id,1)} okText="确认" cancelText="取消">
                        <a className="text-btn" href="javascript:;">处理完成</a>
                     </Popconfirm>
                     {/* <Popconfirm title="是否删除?" onConfirm={this.deldteEventStatus.bind(this,record.id)} okText="确认" cancelText="取消">
                        <a className="text-btn" href="javascript:;">查看详情</a>
                     </Popconfirm> */}
                     </div>
                     : <div>
                         <Link to='/feedback/feedbackManage/datainfo'>
                            <a className="text-btn" href="javascript:;">查看详情</a>
                         </Link>
                        
                    </div>
                }
            </div>,
            align : 'center'
        },
    ];
    const pagination = {
      total:this.props.feedback.total,
      pageSize: 30,
      onChange :  (page) => {
          this.getFeedbackList(page);
      }
    };
    return (<PageHeaderWrapper>
      <Card title="数据管理" className={styles.card} bordered={false}>
        <Form layout="vertical">
          <Row gutter={16}>
            <Col span={6}>
            <Form.Item label="购买日期">
                {
                getFieldDecorator('addDate', {
                    initialValue: moment(currentDate, dateFormat),
                    format: dateFormat
                })(<DatePicker style={{
                    width: '100%'
                    }}/>)
                }
            </Form.Item> ·
            </Col>
            <Col lg={6} md={12} sm={24}>
                <Form.Item label="补贴领取状态">
                {getFieldDecorator('feedBackType', {
                    initialValue : -1
                })(
                    <Select
                      >
                        <Option key={1} value={-1}>全部</Option>
                        <Option key={2} value={1}>已领取补贴金额</Option>
                        <Option key={3} value={2}>未领取补贴金额</Option>
                     </Select>
                )}
                </Form.Item>
            </Col>
            <Col span={6}>
                <Form.Item  label='&nbsp;'>
                    <Button type="primary" onClick={this.getFeedbackList.bind(this,1)} loading={this.props.getFeedbackListLoading} style={{marginRight:'15px'}}>查询</Button>
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

          <Row gutter={16}>

              
          </Row>
        </Form>
        <Row>
            <Col>
                <Table
                    title={()=><div style={{display:'flex',justifyContent: 'space-between',alignItems: 'center'}}><h3>订单列表 <span style={{fontSize:'12px'}}>共有{this.props.feedback.total}条数据</span></h3></div>}
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
    </PageHeaderWrapper>);
  }
}

export default Index;
