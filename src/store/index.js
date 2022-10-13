import { combineReducers} from "redux";
import todoReducer from "./reducers/todoReducer";

const rootReducer = combineReducers({
    myTodos: todoReducer
})

export default rootReducer