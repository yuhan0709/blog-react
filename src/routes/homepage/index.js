import React from 'react';
import { connect } from 'dva';
import background from '../../assets/back.jpg';
import style from './index.css';
import MenuNav from '../../components/menu';
import IndexNav from '../../components/indexNav';
function IndexPage(props) {
  if(props.ishome){
    return (
      <div>
        <div className={style.backgroundWrapper}>
          <img className={style.background} src={ background } alt="background" />
        </div>
        <IndexNav history={props.history}/>
      </div>
    )
  }
  else{
    return(
      <MenuNav/>
    )
  }
}

IndexPage.propTypes = {
};
const mapStateToprops=(state)=>{
  return{
    ishome:state.homepage.isHome
  }

}
export default connect(mapStateToprops)(IndexPage);
