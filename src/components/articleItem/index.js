import React,{Component} from 'react';
import {Card,Tag} from 'antd';
import style from './index.css'
import {Animated} from 'react-animated-css';
class ArticleItem extends Component{
    showDetail(url){
        this.props.history.push(url);
    }
    render(){
        return(
            <Animated animationIn="fadeInUp" animationOut="fadeOutDown" isVisible={true}>   
                <div className={style.articleWrapper} onClick={this.showDetail.bind(this,this.props.basepath+"/articleDetail/"+this.props._id)}>
                    <div className={style.wordsWrapper}>
                        <h2>{this.props.title}</h2>
                        <p>{this.props.description}</p>
                        <div className={style.tag}>
                            <Tag color="#000000">{this.props.atype}</Tag>
                        </div>
                    </div>
                    <div className={style.imgWrapper}>
                        <img src={this.props.cover} alt="example"/>
                    </div>  
                </div>
            </Animated>
        )
    }
}
export default ArticleItem;