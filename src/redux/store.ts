import {combineReducers, createStore} from 'redux'
import { counterReducer } from './counter-reducer'

const rootReducer = combineReducers ({
    counter: counterReducer, //how reducers should I create?
})

export type AppRootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)