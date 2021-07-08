import TodoComponent from "./TodoComponent";
const TodoList=({todos})=>{
    return(
        <>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
               <div className="card ">
                   <div className="card-header bg-primary text-white">
                         Current task
                   </div> 
                    <div className="card-body">
                      <table>
                        <thead>
                          <tr>
                            <th>Task</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          { todos && todos.map((todo)=>(
                              <TodoComponent key={todo.id} todo={todo} />
                          ))
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          </>
    );
}
export default TodoList;