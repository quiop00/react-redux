import { v4 } from "uuid";
import callApi, { fetchTodos } from "../../service/Api";
import { Types } from "../constants/message_type";
import { TypeViews } from "../constants/type_view";
export const getAllTodos=()=>{
    return (dispatch) => {
        callApi("todos", "GET", null).then((res) => {
          dispatch(getTodos(res.data));
        });
    };
}
export const getTodos=(todos)=>{
    return {
        type: Types.FETCH_TODOS,
        todos: todos
    }
}
export const add=(title)=>dispatch=>{
    let todo={id: v4(),title:title,isCompleted:false};
    callApi('todos','POST',todo).then((res)=>{
        console.log(res.data);
        dispatch(addTodo(res.data));
    });
}
export const addTodo= (todo)=>{
    return {
        type: Types.ADD_NEW_TODO,
        payload: todo
    }
}
export const complete=(id)=>(dispatch)=>{
    dispatch(toggleTodo(id));
}
export const toggleTodo= (id)=>{
    return {
        type: Types.TOGGLE_TODO,
        id
    }
}
export const deleteTodo=(id)=>dispatch=>{
    dispatch(deleteTodoById(id));
}
export const deleteTodoById= (id)=>{
    return {
        type: Types.DELETE_TODO,
        id
    }
}
export const changeType=(todo)=>{
    return {
        type: TypeViews.EDIT,
        todo
    }
}