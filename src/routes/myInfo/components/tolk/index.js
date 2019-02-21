import React, { Component } from 'react';
import style from './index.css';
import axios from 'axios';
class Tolk extends Component {
    componentDidMount(){
        axios.get("/api/simpleInfo").then((res)=>{
            if(res.data.code!==1){
                alert("请求数据失败，请检查！");
            }else{
               document.getElementById("info").innerHTML=res.data.data;
            }
        }).catch((err)=>{
            alert("请求数据失败，请检查！");
        })
    }
    render() {
        return (
            <div className={style.tolk}>
                <p id="info">   
                </p>
            </div>
        )
    }
}
export default Tolk;