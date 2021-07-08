import {
    Types
} from "../constants/message_type";
import {
    v4 as uuid
} from "uuid";
const initialState = [];
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_TODOS:
            return [
                ...state,
                ...action.todos
            ]
        case Types.ADD_NEW_TODO:
            return [...state, action.payload];
        case Types.DELETE_TODO:
            return state.filter((e) => e.id !== action.id);
        case Types.TOGGLE_TODO:
            return state.map((e) => {
                if (e.id === action.id) {
                    return {
                        ...e,
                        isCompleted: !e.isCompleted
                    };
                }
                return e;
            });
        default:
            return state;
    }
}
export default todoReducer;