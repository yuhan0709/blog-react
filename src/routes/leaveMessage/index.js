import React, { Component } from 'react';
import style from './index.css'
import { List } from 'antd';
import MessageForm from './components/messageForm';
import {Animated} from 'react-animated-css';

const data = [
    {
        title: "nickname",
        message: "哈哈哈哈哈哈哈互踩互踩互踩"
    }, {
        title: "nickname",
        message: "好饿好饿好饿好饿好饿好饿哈哈哈哈哈哈哈哈哈哈哈哈哈哈我饿我饿我饿我饿我饿"
    }, {
        title: "nickname",
        message: "好饿好饿好饿好饿好饿好饿哈哈哈哈哈哈哈哈哈哈哈哈哈哈我饿我饿我饿我饿我饿好饿好饿好饿好饿好饿好饿哈哈哈哈哈哈哈哈哈哈哈哈哈哈我饿我饿我饿我饿我饿"
    }, {
        title: "nickname",
        message: "哈哈哈哈哈哈哈互踩互踩互踩"
    }, {
        title: "nickname",
        message: "哈哈哈哈哈哈哈互踩互踩互踩"
    }, {
        title: "nickname",
        message: "好饿好饿好饿好饿好饿好饿哈哈哈哈哈哈哈哈哈哈哈哈哈哈我饿我饿我饿我饿我饿"
    }, {
        title: "nickname",
        message: "哈哈哈哈哈哈哈互踩互踩互踩"
    }
]
class LeaveMessage extends Component {
    render() {
        return (
            <Animated animationIn="fadeInUp" animationOut="fadeOutDown" isVisible={true}>
            <div className={style.wrapper}>
                <MessageForm/>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    className={style.messageList}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={item.title}
                                description={<div style={{color:'#555555',padding:'10px 15px 0px 15px'}}>{item.message}</div>}
                            />
                        </List.Item>
                    )}
                />,
            </div>
            </Animated>
        )
    }
}
export default LeaveMessage