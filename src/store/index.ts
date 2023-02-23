import { schoolReducer, selectedSchoolReducer } from "./models/school/reducer";
import { legacy_createStore as createStore, combineReducers } from "redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const reducers = combineReducers({
  schools: schoolReducer,
  selectedSchool: selectedSchoolReducer,
});

type RootState = ReturnType<typeof reducers>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const store = createStore(reducers);
