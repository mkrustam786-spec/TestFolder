import {createStore} from "redux";
import {reducers} from "./redux/reducer/reducerfile";
export const store = createStore(reducers)      
