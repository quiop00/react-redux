import { Types } from "../constants/message_type";
import { TypeViews } from "../constants/type_view"

const initialState={
    type: TypeViews.NEW,
    todo:null
}
const typeView=(state=initialState,action)=>{
    switch(action.type){
        case TypeViews.EDIT:
            return {...action}
        default:
            return state;    

    }
}
export default typeView;