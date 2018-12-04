import React,{ Component } from 'react';
import style from './index.css';
import myInfo from '../../../../assets/myInfo.jpg';
import {List,Icon} from 'antd';
const data=[
    "杨雨涵",
    "1999-7-9",
    "853654529@qq.com",
    "重庆邮电大学 本科",
]
class MyInfo extends Component{
    showGit=()=>{
        window.open("https://github.com/yuhan0709")
    }
    showWeibo=()=>{
        window.open("https://weibo.com/p/1005055217552068/home?from=page_100505&mod=TAB&display=0&retcode=6102");
    }
    render(){
        return(
            <div className={style.wrapper}>
                <img src={myInfo}/>
                <List
                className={style.listStyle}
                header="just a runner"
                dataSource={data}
                renderItem={item=>(<List.Item>{item}</List.Item>)}
                footer={<div className={style.footer}>
                    <Icon style={{fontSize:"30px",color:'#ffffff'}} onClick={this.showGit} type="github"/>
                    <Icon style={{fontSize:"30px",color:'#ffffff'}} onClick={this.showWeibo} type="weibo-circle"/>
                </div>}>
                </List>
            </div>
        )
    }
}
export default MyInfo;