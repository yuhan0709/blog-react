import React,{ Component } from 'react';
import style from './index.css';
import SampleInfo from './components/sampleInfo';
import Tolk from './components/tolk';
import Charts from './components/charts';
import {Animated} from 'react-animated-css';
class MyInfo extends Component{
    render(){
        return(
            <Animated animationIn="fadeIn" animationOut="zoomOutDown" animationInDelay ="2s" isVisible="true" style={{width:"100%"}}>
            <div className={style.wrapper}>
                <SampleInfo/>
                <div className={style.more}>
                    <Tolk />
                    <Charts />
                </div>
            </div>
            </Animated>
        )
    }
}
export default MyInfo;