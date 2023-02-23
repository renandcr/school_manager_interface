import { legacy_createStore as createStore, combineReducers } from "redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import schoolReducer from "./models/school/reducer";

const reducers = combineReducers({ school: schoolReducer });

type RootState = ReturnType<typeof reducers>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const store = createStore(reducers);
