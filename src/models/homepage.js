import { CALL_HISTORY_METHOD } from "react-router-redux";

export default {
    namespace: 'homepage',
    state: {
        isHome: true
    },
    subscriptions: { 
        setup({ dispatch, history }) { 
            history.listen((history) => { 
               if(history.pathname==="/"){
                   console.log("1");
                   dispatch({type:"showHome"})
               }else{
                   dispatch({type:"hideHome"})
               }
            }) 
        } 
    },

    reducers: {
        showHome() {
            return {isHome:true}
        },
        hideHome() {
            return {isHome:false}
        }
    }

}