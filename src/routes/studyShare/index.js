import React,{ Component } from 'react';
import ArticleItem from '../../components/articleItem';
import { BackTop } from 'antd';
import axios from 'axios';
class StudyShare extends Component{
    state={
        data:[]
    }
    componentDidMount(){
        axios.get("/api/study").then((res)=>{
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
                            <ArticleItem key={item._id} {...item} history={this.props.history} basepath="/studyShare" />
                       )
                       
                   })}
                </div>
                    <BackTop />
            </div>
        )
    }
}
export default StudyShare;