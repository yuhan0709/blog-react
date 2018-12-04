import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import homePage from './routes/homepage';
import LeaveMessage from './routes/leaveMessage';
import LifeArticle from './routes/lifeArticle';
import MyInfo from './routes/myInfo';
import PhotoWall from './routes/photoWall';
import StudyShare from './routes/studyShare';
import Index from './routes'; 
const RouterConfig=({history})=>{
  return(
      <Router history={history}>
        <Switch>
        <Index>
          <Route path="/" exact component={homePage} />
          <Route path="/leaveMessage" exact component={LeaveMessage} />
          <Route path="/lifeArticle" exact component={LifeArticle} />
          <Route path="/myInfo" exact component={MyInfo} />
          <Route path="/photoWall" exact component={PhotoWall} />
          <Route path="/studyShare" exact component={StudyShare} />
        </Index>
      </Switch>
      </Router>
    )
}
export default RouterConfig
