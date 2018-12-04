import React, { Component } from 'react';
import style from './index.css'
import { Form, Input, Button } from 'antd';

const { TextArea } = Input;

class MessageForm extends Component{
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div>
                <TextArea rows={4} className={style.message} placeholder="此处输入您的留言" />
                <Form className={style.formWrapper} layout="inline" onSubmit={this.handleSubmit}>
                    <Form.Item label="E-mail">
                        {
                            getFieldDecorator('email', {
                                rules: [{
                                    type: "email", message: "您输入邮箱格式错误"
                                }, {
                                    required: true, message: "必填，非公开"
                                }]
                            })(
                                <input placeholder="请输入邮箱" />
                            )
                        }
                    </Form.Item>
                    <Form.Item label="昵称">
                        {
                            getFieldDecorator('nickname', {
                                rules: [{
                                    required: true, message: "必填，用户昵称"
                                }]
                            })(
                                <input placeholder="请输入昵称" />
                            )
                        }
                    </Form.Item>
                    <Button type="primary">提交</Button>
                </Form>
            </div>
        )
    }
}
export default Form.create()(MessageForm);