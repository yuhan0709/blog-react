import React,{Component} from 'react';
import {Card,Tag} from 'antd';
import style from './index.css'
import {Animated} from 'react-animated-css';
const {Meta} = Card;
class ArticleItem extends Component{
    render(){
        console.log(this.props.delay);
        return(
            <Animated animationIn="fadeInUp" animationOut="fadeOutDown" isVisible={true}>
            <div className={style.articleWrapper}>
                <div className={style.wordsWrapper}>
                    <h2>这里是个标题把</h2>
                    <p>之前在知乎上看到过这样一个问题：“你会选择再去已离职的公司继续上班吗？” 回答的人各自有各自的想法。其实，回答这个问题并不是很难，看你当初为什么...</p>
                    <div className={style.tag}>
                        <Tag color="#000000">随笔</Tag>
                        <Tag color="#000000">日记</Tag>
                    </div>
                </div>
                <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" alt="example"/>
             </div>
            </Animated>
        )
    }
}
export default ArticleItem;