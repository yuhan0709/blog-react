import React,{ Component } from 'react';
import ArticleItem from '../../components/articleItem';
import { BackTop } from 'antd';
class StudyShare extends Component{
    render(){
        return(
            <div>
                <div>
                    <ArticleItem/>
                    <ArticleItem/>
                    <ArticleItem/>
                    <ArticleItem/>
                    <ArticleItem/>
                </div>
                    <BackTop />
            </div>
        )
    }
}
export default StudyShare;