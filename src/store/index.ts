import { schoolReducer, selectedSchoolReducer } from "./models/school/reducer";
import { legacy_createStore as createStore, combineReducers } from "redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { tokenReducer } from "./models/user/reducer";

const reducers = combineReducers({
  selectedSchool: selectedSchoolReducer,
  schools: schoolReducer,
  token: tokenReducer,
});

type RootState = ReturnType<typeof reducers>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const store = createStore(reducers);
