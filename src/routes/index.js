import React from 'react';
import { connect } from 'dva';
import {Layout} from 'antd';
import style from './index.css';
import Menu from '../components/menu';
import backimg from '../assets/headerpage.jpg';
const {Header,Content,Footer} = Layout;
class IndexPage extends React.Component {
  render(){
    const { isHome } = this.props;
    console.log(this.props.children);
    if (isHome) {
      return (
        <div> {this.props.children}</div>     
      )
    } else {
      return (
          <Layout className={style.Layout}>
            <Header className={style.Header}>
              <div className={style.headerpage}>
                <img src={backimg} alt="backimg" />
                <div className={style.mask} />
              </div>
              <Menu/>
            </Header>
            <Content className={style.mainContent}>            
                {this.props.children}
            </Content>
          </Layout >
      );
    }
  }
}
const mapStateToprops=(state)=>{
  return{
    isHome:state.homepage.isHome
  }

}
export default connect(mapStateToprops)(IndexPage);
