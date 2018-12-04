import React, { Component } from 'react';
import { Pagination } from 'antd';
import style from './index.css';
import ImgItem from './components/imageItem';
import {Animated} from 'react-animated-css';

class PhotoWall extends Component {
    state ={
        showDetails:false,
        detailsUrl:null
    }
    onChange=(pageNumber)=>{
        console.log('Page: ', pageNumber);
    }

    render() {       
        var arr = [
            "https://goss.veer.com/creative/vcg/veer/800water/veer-326814874.jpg",
            "https://goss.veer.com/creative/vcg/veer/1600water/veer-151525545.jpg",
            "https://goss.veer.com/creative/vcg/veer/800water/veer-152363886.jpg",
            "https://goss.veer.com/creative/vcg/veer/800water/veer-150270509.jpg",
            "https://goss.veer.com/creative/vcg/veer/800water/veer-153077761.jpg",
            "https://goss.veer.com/creative/vcg/veer/800water/veer-326814874.jpg",
            "https://goss.veer.com/creative/vcg/veer/1600water/veer-151525545.jpg",
            "https://goss.veer.com/creative/vcg/veer/800water/veer-152363886.jpg",
            "https://goss.veer.com/creative/vcg/veer/800water/veer-150270509.jpg"
        ]
        return (
           <div className={style.wrapper}>
            {
                arr.map((item,index)=>{
                    return(
                        <ImgItem key={index} url={item}/>
                    )
                })
            }
             <Animated animationIn="fadeInUp" animationOut="fadeOutDown" isVisible={true} className={style.pagination}>
                <Pagination className={style.pagination} showQuickJumper defaultCurrent={2} total={500} onChange={this.onChange} />
            </Animated>
           </div>
        )
    }
}
export default PhotoWall;