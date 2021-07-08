import InputContainer from './Input';
import TodoListContainer from './Todo';
const AppContainer=()=>{
    return(
        <div>
            <InputContainer/>
            <hr/>
            <TodoListContainer />
        </div>
    )
}
export default AppContainer;