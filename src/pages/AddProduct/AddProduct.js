import React, { PureComponent } from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './style.less';
import {
    Form, Input, Button, Radio,Tag, Upload, Icon, Modal
  } from 'antd';
const FormItem = Form.Item;
@Form.create()
class AddProduct extends PureComponent {
    constructor() {
        super();
        this.state = {
          formLayout: 'horizontal',
        };
      }
      state = {
        previewVisible: false,
        previewImage: '',
        fileList: [],
      };

      handleSubmit = (e) => {
        alert(1)
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }
    
    
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
      getToken = () => {

        return window.localStorage.getItem('token')
    
      };
     
      
      handleChange = ({ fileList }) => {

        this.setState({ fileList })

        console.log(fileList,"9999")
      
      }
    //   图片上传end
    
    render() {
        const {
            form: { getFieldDecorator },
            submitting,
        } = this.props;
        const { formLayout } = this.state;
        const formItemLayout = formLayout === 'horizontal' ? {
        labelCol: { span: 4 },
        wrapperCol: { span: 6 },
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

            <Form  className={styles.contentPP} layout={formLayout}>
                <FormItem
                    label="产品名称"
                    {...formItemLayout}
                >
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: '请输入产品名称!' }],
                    })(
                        <Input  placeholder="请输入产品名称" />
                    )}
                </FormItem>
                <FormItem
                    label="产品售价"
                    {...formItemLayout1}
                >
                    {getFieldDecorator('price', {
                        rules: [{ required: true, message: '金额!' }],
                    })(
                        <Input  placeholder="金额" />
                    )}
                    
                </FormItem>
                <FormItem
                    label="以旧换新补贴金额"
                    {...formItemLayout1}
                >
                    {getFieldDecorator('subsidiesPrice', {
                        rules: [{ required: true, message: '金额!' }],
                    })(
                        <Input  placeholder="金额" />
                    )}
                    <Tag>提示：该金额为用户购买此产品后，完成回收时的补贴金额</Tag>
                </FormItem>
                <FormItem
                    label="产品图片"
                    {...formItemLayout1}
                >
                    <div className="clearfix">
                        <Upload
                        action="http://open.mayishoubei.com/ali/api"
                        name='headImg'
                        accept = 'image'
                        data = { (file) => {
                            console.log(file,"文件")


                            let data = {
                                'name':"util.uploadImageTwo",
                                'format' :"json",
                                'version':"1.0",
                                'nonce' :`11fb0dbe-3816-467d-80a3-7c35558a94ef${new Date().getTime()}`,
                                'timestamp':`${new Date().getTime()}`,
                            }

                            return data
                        }}
                        listType="picture-card"
                        onPreview={this.handlePreview}
                        onChange={this.handleChange}
                        >
                        {/* {fileList.length >= 3 ? null : uploadButton} */}
                        点击上传

                        </Upload>
                        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                        </Modal>
                    </div>
                    <Tag>提示：请上传图片大小为220*240px，不大于500kb，格式为jpg,png</Tag>
                </FormItem>

                
                <FormItem {...buttonItemLayout}>
                    <Button type="primary" onClick={this.handleSubmit}  >确认提交</Button>
                </FormItem>
            </Form>
        </PageHeaderWrapper>
            
        )
    }



}

export default AddProduct;