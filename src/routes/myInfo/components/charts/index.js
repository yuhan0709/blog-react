import React, { Component } from 'react';
import style from './index.css';
import * as echarts from 'echarts/src/echarts';
import 'echarts/src/chart/bar';

const option = {
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
        data: ["HTML/HTML5","CSS/CSS3","JavaScript","es6","webpack/gulp","React大礼包","Vue","node"],
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
            data:[90,90,80,70,50,70,60,60]
        },

    ]
}
class Charts extends Component {
    componentDidMount(){
        var myChart = echarts.init(document.getElementById('charts'),);
        myChart.setOption(option);  
    }
    render() {
        return (
            <div id="charts" className={style.charts}/>
        )
    }
}
export default Charts;