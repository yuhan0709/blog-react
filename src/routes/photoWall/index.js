import React, { Component } from 'react';
import { Pagination } from 'antd';
import style from './index.css';
import ImgItem from './components/imageItem';
import axios from 'axios';
import {Animated} from 'react-animated-css';

class PhotoWall extends Component {
    state ={
        showDetails:false,
        detailsUrl:null,
        data:[]
    }
    componentDidMount(){
        axios.get("/api/cover").then((res)=>{
            this.setState({
                data:res.data.data
            })
            console.log(this.state.data);
        })
    }
    onChange=(pageNumber)=>{
        console.log('Page: ', pageNumber);
    }
    showDetails=(title)=>{
        console.log(title);
    }
    render() {       
       console.log(this.state.data);
        return (
           <div className={style.wrapper}>
            {
                this.state.data.map((item,index)=>{
                    return(
                        <ImgItem 
                            key={index} 
                            url={item.url} 
                            title={item.title}
                            click={this.showDetails.bind(this,item.title)}
                            description={item.description} />
                    )
                })
            }
             {/* <Animated animationIn="fadeInUp" animationOut="fadeOutDown" isVisible={true} className={style.pagination}>
                <Pagination className={style.pagination} showQuickJumper defaultCurrent={2} total={500} onChange={this.onChange} />
            </Animated> */}
           </div>
        )
    }
}
export default PhotoWall;