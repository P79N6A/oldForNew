import React, { PureComponent } from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import  style from './style.less'
import {
    Form, Input, Button, Radio,Tag, Upload, Icon, Modal,Card,
  } from 'antd';
const FormItem = Form.Item;
class AddTerminal extends PureComponent {
    constructor() {
        super();
        this.state = {
          formLayout: 'horizontal',
        };
      }
      state = {
        previewVisible: false,
        previewImage: '',
        fileList: [{
          uid: '-1',
          name: 'xxx.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        }],
      };
    
      handleFormLayoutChange = (e) => {
        this.setState({ formLayout: e.target.value });
      }
    //   图片上传start
      handleCancel = () => this.setState({ previewVisible: false })

      handlePreview = (file) => {
        this.setState({
          previewImage: file.url || file.thumbUrl,
          previewVisible: true,
        });
      }
    
      handleChange = ({ fileList }) => this.setState({ fileList })
    //   图片上传end
    
    render() {
        const { formLayout } = this.state;
        const formItemLayout = formLayout === 'horizontal' ? {
        labelCol: { span: 4 },
        wrapperCol: { span: 4 },
        } : null;
        const formItemLayout1 = formLayout === 'horizontal' ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 2 },
            } : null;
        const buttonItemLayout = formLayout === 'horizontal' ? {
        wrapperCol: { span: 14, offset: 4 },
        } : null;

        // 图片上传start
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
        <div>
            <Icon type="plus" />
            <div className="ant-upload-text">Upload</div>
        </div>
        );
        // 图片上传end
        return(
        <PageHeaderWrapper   >
            <Card title="新增销售终端"  bordered={false}>
                <Form   layout={formLayout}>
                    <FormItem
                        label="销售终端名称"
                        {...formItemLayout}
                    >
                        <Input  placeholder="请输入销售终端名称" />
                        <Tag  color='blue' className={style.tag} >提示：终端名称即作为该终端登录账号</Tag>
                    </FormItem>
                    <FormItem
                        label="所在地址"
                        {...formItemLayout}
                    >
                        <Input  placeholder="请输入所在地址" />
                    </FormItem>
                    <FormItem
                        label="负责人姓名"
                        {...formItemLayout1}
                    >
                        <Input  placeholder="姓名" />
                    </FormItem>
                    <FormItem
                        label="联系方式"
                        {...formItemLayout1}
                    >
                        <Input  placeholder="手机号码" />
                    </FormItem>
                    <FormItem {...buttonItemLayout}>
                        <Button type="primary">确认新增</Button>
                    </FormItem>
                </Form>
            </Card>

            
        </PageHeaderWrapper>
            
        )
    }



}

export default AddTerminal;