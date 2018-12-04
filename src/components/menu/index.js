import React,{Component} from 'react';
import { Menu } from 'antd';
import style from './index.css';
import data from '../../config/menu';
import {withRouter} from 'dva/router';
class MenuNav extends Component {
  handleClick=(e)=>{
    this.props.history.push(e.key);
  }
  render() {
    return (
      <div className={style.wrapper}>
      <Menu className={style.menuNav} onClick={this.handleClick}  mode="horizontal">
        {data.map((item)=>{
          return(
            <Menu.Item key={item.key}>
              {item.title}
            </Menu.Item>
          )
        })}
      </Menu>
      </div>
    );
  };
}


export default withRouter(MenuNav);
