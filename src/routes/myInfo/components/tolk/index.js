import React, { Component } from 'react';
import style from './index.css';
class Tolk extends Component {
    render() {
        return (
            <div className={style.tolk}>
                <ul>
                    <li>目前是大三程序媛，浮浮沉沉学习前端已经两年多，经济管理学院极客网技术工作室前端组组长</li>
                    <li>是一个生活神经大条，大大咧咧但是工作认真严谨，积极向上的女汉子</li>
                    <li>不看剧，不追星，不怎么听歌，看知乎、刷微博、看综艺</li>
                    <li>时间管理者，一直在追逐，从未停止脚步，just a runner</li>
                    <li>很喜欢何炅的一句话：“我感谢那些抛弃我，放弃我，丢下我，看不起我的人，因为你们让我努力把自己蜕变成优秀而且无坚不摧的模样”</li>
                    <b>共勉，加油</b>
                    <i>2018-12-2</i>
                </ul>
            </div>
        )
    }
}
export default Tolk;