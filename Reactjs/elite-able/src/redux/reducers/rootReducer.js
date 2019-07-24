// import external modules
import { combineReducers } from "redux";
import todoReducer from "./todo/";
import Notes from "./note/";
import chatReducer from "./chat/";
import emailReducer from "./email/";
import Icons from "./icons/";

const rootReducer = combineReducers({
  todoApp: todoReducer,
  noteApp: Notes,
  chatApp: chatReducer,
  emailApp: emailReducer,
  Icons
});

export default rootReducer;
