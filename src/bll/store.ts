import {applyMiddleware, combineReducers, createStore} from 'redux'
import {counterReducer} from './counter-reducer'
import thunk from "redux-thunk";
import {loadState, saveState} from "../utils/localstorage-utils";

export const rootReducer = combineReducers({
    counter: counterReducer
})


export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk),)

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })

})

export type AppRootState = ReturnType<typeof rootReducer> //это типизация стейта
export type AppStoreType = typeof store //это типизация store