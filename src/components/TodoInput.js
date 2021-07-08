import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, addTodo, showEdit } from "../redux/actions";
import { MessageType } from "../redux/constants/message_type";
import { TypeViews } from "../redux/constants/type_view";
const TodoInput=(props)=>{
  const [title,setTitle]= useState(props.typeView.todo?.title||'');
  const dispatch=useDispatch();
  
  const onChangeHandler=(e)=>{
    setTitle(e.target.value);
  }
  const addTask=()=>{
    if(title=='') return;
    dispatch(add(title));
  }
  return(
        <div className="container">
        <div className="row">
           <div className="col-md-6 offset-md-3">
                   <div className="card ">
                       <div className="card-header bg-primary text-white">
                             New task
                       </div>
                   <div className="card-body">
                        <div className="form-group">
                            <label for="content">Task</label>
                            <input type="text" onChange={onChangeHandler} value={title} name="content" className="form-control" placeholder=""/>
                        </div>
                        {
                          (props.typeView.type==TypeViews.NEW)?
                          <button onClick={addTask} className="btn btn-primary">+ Add Task</button>:
                          <button className="btn btn-primary">+ Edit Task</button>
                        }
                        
                   </div>
                   </div>
                   {(props.type===MessageType.INSERT_FAIL)?(
                     <div className="alert alert-danger" role="alert">
                     Please input todo!
                   </div>
                   ):<></>
                   }
                   {(props.type===MessageType.INSERT_SUCCESS)?(
                     <div className="alert alert-success" role="alert">
                     Insert success!
                   </div>
                   ):<></>
                   }
                    {(props.type===MessageType.DELETE_SUCCESS)?(
                     <div className="alert alert-success" role="alert">
                     Delete success!
                   </div>
                   ):<></>
                   }
                   
            </div>
            
           </div>
           
       </div>
    );
}

export default TodoInput;