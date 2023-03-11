import { schoolReducer, selectedSchoolReducer } from "./models/school/reducer";
import { courseReducer, selectedCourseReducer } from "./models/course/reducer";
import { legacy_createStore as createStore, combineReducers } from "redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";

import {
  selectedUserReducer,
  tokenReducer,
  userReducer,
} from "./models/user/reducer";

import {
  selectedStudentReducer,
  studentReducer,
} from "./models/student/reducer";

const reducers = combineReducers({
  selectedStudent: selectedStudentReducer,
  selectedSchool: selectedSchoolReducer,
  selectedCourse: selectedCourseReducer,
  selectedUser: selectedUserReducer,
  students: studentReducer,
  schools: schoolReducer,
  courses: courseReducer,
  token: tokenReducer,
  users: userReducer,
});

type RootState = ReturnType<typeof reducers>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const store = createStore(reducers);
