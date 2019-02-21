import React, { Component } from 'react';
import style from './index.css';
import * as echarts from 'echarts/src/echarts';
import 'echarts/src/chart/bar';
import axios from 'axios';
var option = {
    title:{
        text:"技能储备",
        subtext:"2018-12-12"
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value',
        axisLabel:{
            show:true,
            textStyle:{
                color:"#ffffff"
            }
        }
    },
    yAxis: {
        type: 'category',
        data: null,
        margin:"25px",
        axisLabel:{
            show:true,
            textStyle:{
                color:"#ffffff"
            }
        }
    },
    series: [
        {
            name:"掌握程度",
            type:"bar",
            barWidth:20,
            stack:"总量",
            label:{
                normal:{
                    show:true,
                    position:'insideRight'
                }
            },
            color:["#aaaaaa"],
            data:null
        },

    ]
}
class Charts extends Component {
    componentDidMount(){
        axios.get("/api/skills").then((res)=>{
            if(res.data.code!==1){
                alert("请求数据失败！请检查");
            }else{
                option.yAxis.data = res.data.obj.yAxis;
                option.series[0].data = res.data.obj.xAxis;
                console.log(option);
            }
            var myChart = echarts.init(document.getElementById('charts'),);
            myChart.setOption(option);  
        })
    }
    render() {
        return (
            <div id="charts" className={style.charts}/>
        )
    }
}
export default Charts;