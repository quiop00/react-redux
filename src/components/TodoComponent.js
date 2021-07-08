import { useDispatch } from "react-redux";
import { changeType, deleteTodoById, showEdit, toggleTodo } from "../redux/actions";

const TodoComponent=(props)=>{
  const dispatch = useDispatch();
  const toggle=()=>{
    dispatch(toggleTodo(props.todo.id));
  }
  const deleteTodo=()=>{
    dispatch(deleteTodoById(props.todo.id));
    alert('Delete success');
  }
  const showEditField=()=>{
    dispatch(changeType(props.todo));
  }
    return(
        <>
          <tr>
            <td><input type='checkbox' onChange={toggle} defaultChecked={props.todo.isCompleted}/>&nbsp;{props.todo.isCompleted?(<s>{props.todo.title}</s>):(<>{props.todo.title}</>)}</td>
            <td id="edit-btn" onClick={showEditField}>
                <button class="btn btn-info">
                    <i class="fa fa-edit"></i> Edit
                </button>
            </td>
            <td id="delete-btn">
                <button class="btn btn-danger" onClick={deleteTodo}>
                    <i class="fa fa-trash-o"></i> Delete
                </button>
            </td>
          </tr>
        </>
    );
}
export default TodoComponent;