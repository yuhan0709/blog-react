import React,{ Component } from 'react';
import ArticleItem from '../../components/articleItem';
import axios from 'axios';
import {BackTop} from 'antd';
class LifeArticle extends Component{
    state={
        data:[]
    }
    componentDidMount(){
        axios.get("/api/life").then((res)=>{
            this.setState({
                data:res.data.data
            })
        }).catch((err)=>{
            console.log(err);
        })
    }
    render(){
        return(
            <div>
                <div>
                   {this.state.data.map((item)=>{
                       return(
                            <ArticleItem key={item._id} {...item} history={this.props.history} basepath="/lifeArticle" />
                       )
                       
                   })}
                </div>
                    <BackTop />
            </div>
        )
    }
}
export default LifeArticle;