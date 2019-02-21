import React, { Component } from 'react';
import style from './index.css'
import { Form, Input, Button,Icon } from 'antd';
import axios from 'axios';
const { TextArea } = Input;
const FormItem = Form.Item;
class MessageForm extends Component{
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            axios.post("/api/comment",values).then((res)=>{
                if(res.data.code!=1){
                  console.log(res.data.code);
                    alert("评论失败，请检查！");
                }else{
                  alert("评论成功！");
                  window.location.reload();
                }
            })
          }
        });
      }
    
    render(){
        const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className={style.formWrapper}>
      <FormItem>
        {getFieldDecorator("comment",{rules:[{required: true, message: '请输入评论！'}],})(
            <TextArea  autosize={{ minRows: 4, maxRows: 6 }} placeholder="请输入评论"/>
        )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('mail', {
            rules: [{ required: true, message: '必填！非公开' },{
                      type:"email",message:"请输入正确的邮箱格式"
            }],
          })(
            <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入邮箱" />
          )}
        </FormItem>
        <Button type="primary" htmlType="submit" className="login-form-button">
            确定
        </Button>
      </Form>
    )
    }
}
export default Form.create()(MessageForm);