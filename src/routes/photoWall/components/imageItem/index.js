import React, { Component } from 'react';
import {Card} from 'antd';
import {Animated} from 'react-animated-css';
import style from './index.css'
const {Meta} = Card;
class ImgItem extends Component {
    render() {
        return (
            <Animated animationIn="fadeInDown" animationOut="zoomOutDown" isVisible={true} style={{width:"33%"}}>
                <Card
                    className={style.cardWrapper}
                    hoverable
                    style={{ width: '100%',height:"99%"}}
                    cover={<img alt={this.props.url} src={this.props.url} />}
                >  
                    <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                />
                </Card>
            </Animated>
        )
    }
}
export default ImgItem;