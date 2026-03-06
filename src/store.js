import {createStore} from "redux";
import { inputReducer } from "./redux/reducer/reducers";
export const store = createStore(inputReducer)      
