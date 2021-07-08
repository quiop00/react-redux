import {
    combineReducers
} from "redux";
import todoReducer from "./todo";
import typeView from "./typeView";

const reducer = combineReducers(
{
    todos: todoReducer,
    typeView: typeView
}
);

export default reducer;