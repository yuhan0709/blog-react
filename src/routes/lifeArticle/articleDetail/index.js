import React,{Component} from 'react';
import axios from 'axios';
import 'highlight.js/styles/a11y-light.css';
import style from './index.css';
class ArticleDetail extends Component{
    state={
       title:null
    }
    componentDidMount(){
        var { match } = this.props;
        var id = match.params.id;
        axios.get("/api/life/"+id).then((res)=>{
            document.getElementById("container").innerHTML=res.data.data.body;
            this.setState({
                title:res.data.data.title
            })
        }).catch((err)=>{
            console.log(err);
        })
    }
    render(){
        return(
            <div id="articleWrapper" className={style.wrapper}>
                <h1 className={style.title}>{this.state.title}</h1>
                <div id="container" className={style.container}>
                </div>
            </div>
        )
    }
}
export default ArticleDetail;