import TodoList from "../components/TodoList";
import { complete, deleteTodo } from "../redux/actions";
import { connect, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllTodos } from "../redux/actions";
const TodoListContainer = ({todos,toggle,deleteTodo})=>{
    const dispatch = useDispatch()
    const dataTodo = useSelector(state => state.todos)
    // console.log(user);
    useEffect(() => {
        dispatch(getAllTodos())
    }, [])
    return(
    <TodoList todos={dataTodo} 
        />
    )
}

export default TodoListContainer;