import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import TodoInput from "../components/TodoInput"

const InputContainer = ()=>{
    const typeView= useSelector((state)=>state.typeView);
    return(
        <TodoInput typeView={typeView}/>
    )
    
}

export default InputContainer;