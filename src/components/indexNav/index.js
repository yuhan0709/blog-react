import React,{Component} from 'react';
import style from './index.css';
import {Menu} from 'antd';
import { connect } from 'dva';
import menu from '../../config/menu';
class IndexNav extends Component{
    handleClick=(e)=>{
        this.props.history.push(e.key);
    }
    render(){
        return(
            <Menu className={style.navWrapper} onClick={this.handleClick} mode="horizontal">  
               {menu.map((item)=>{
                   return(
                       <Menu.Item key={item.key}>
                            <img src={item.icon} alt={item.key}/>
                       </Menu.Item>
                   )
               })}
            </Menu>
        )
    }
}
export default connect()(IndexNav);