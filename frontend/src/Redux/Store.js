import { createStore } from "redux";
import {rootReducers} from '../Redux/RootReducer'

export const Store = 
    createStore(rootReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default Store ;
