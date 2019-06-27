import { createStore, combineReducers } from "redux";
import { AlertReducers } from "./reducers/alert";

const allReducers = combineReducers({
  AlertReducers,
});

export const CreateStore = createStore(allReducers);
