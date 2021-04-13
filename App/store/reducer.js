import { createStore, combineReducers } from 'redux';
import { REST_SRV } from '../config/config';
import store from './store';

export const initialState = { window: null, login: '', password: '', isAuthChecked:false };
export const CORE_ACTIONS_TYPE = Object.freeze({
    SET_PASSWORD: 'SET_PASSWORD',
    SET_LOGIN: 'SET_LOGIN',
    MAKE_AUTHENT: 'MAKE_AUTHENT',
    CHANGE_WINDOW: 'CHANGE_WINDOW',
    SHOW_AUTH:'SHOW_AUTH'
})

export const PRIVATE_ACTIONS_TYPE = Object.freeze({
    DENY_AUTH: 'DENY',
    GRANTED_AUTH: 'GRANTED'
})

export default function reducer(state = initialState, action) {
    console.log(action.type);
    switch (action.type) {

        case PRIVATE_ACTIONS_TYPE.GRANTED_AUTH: return { ...state, isGranted: true };
        case PRIVATE_ACTIONS_TYPE.DENY_AUTH: return { ...state, login: '', password: '' };
        case CORE_ACTIONS_TYPE.CHANGE_WINDOW: return { ...state, window: action.value };
        case CORE_ACTIONS_TYPE.MAKE_AUTHENT:
            const url = `${REST_SRV}/users?login=${state.login}&password=${state.password}`
            console.log(url);
            fetch(url, { method: 'GET' })
                .then(returnedFlow => returnedFlow.json())
                .then(objet => {
                    console.log(objet);
                    if (objet.length > 0) {
                        //props.onConnect(objet[0].login)
                        store.dispatch({ type: PRIVATE_ACTIONS_TYPE.GRANTED_AUTH })
                    }
                    else {
                        // setloginDatas({login:'',password:''})
                        store.dispatch({ type: PRIVATE_ACTIONS_TYPE.DENY_AUTH })

                    }
                    return objet;
                });
            return state;
        case CORE_ACTIONS_TYPE.SET_PASSWORD: return { ...state, password: action.value };
        case CORE_ACTIONS_TYPE.SET_LOGIN: return { ...state, login: action.value };
        default: return state;
    }
}