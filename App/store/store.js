import {createStore,combineReducers} from 'redux';
import reducer, {CORE_ACTIONS_TYPE} from './reducer';
import reducerProduct, {PRODUCTS_ACTIONS_TYPE} from './reducerProduct';

const combinedReducers=combineReducers({core:reducer, stock:reducerProduct})
const store=createStore(combinedReducers);
store.subscribe(()=>{
    console.log(JSON.stringify(store.getState()));
})

// store.dispatch({type:CORE_ACTIONS_TYPE.SET_LOGIN, value: 'elie42'});
// store.dispatch({type:PRODUCTS_ACTIONS_TYPE.ADD_PRODUCT, value:{id:0, name:'toto'}});
export default store;