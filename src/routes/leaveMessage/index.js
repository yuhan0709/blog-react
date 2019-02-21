import React, { Component } from 'react';
import style from './index.css'
import { List } from 'antd';
import MessageForm from './components/messageForm';
import {Animated} from 'react-animated-css';
import axios from 'axios';
class LeaveMessage extends Component {
    state={
        comments:[]
    }
    componentDidMount(){
        axios.get("/api/comment").then((res)=>{
            this.setState({
                comments:res.data.obj
            }      
            )
        })
    }
    render() {
        return (
            <Animated animationIn="fadeInUp" animationOut="fadeOutDown" isVisible={true}>
            <div className={style.wrapper}>
                <MessageForm/>
                <List
                    itemLayout="horizontal"
                    dataSource={this.state.comments}
                    className={style.messageList}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={item.mail}
                                description={<div style={{color:'#555555',padding:'10px 15px 0px 15px'}}>{item.comment}</div>}
                            />
                        </List.Item>
                    )}
                />,
            </div>
            </Animated>
        )
    }
}
export default LeaveMessage;