import { actionSelectedCourse } from "../../store/models/course/actions";
import { IDatabaseCourse } from "../../store/models/course/actions";
import { CourseInformationContainer } from "./style";
import DefaultTextBox from "../DefaultTextBox";
import { useDispatch } from "react-redux";
import * as React from "react";

export interface ICourseInformation {
  setShowCourseInformationModal?: React.Dispatch<boolean>;
  editable?: boolean;
}

const CourseInformation: React.FC<
  { current: IDatabaseCourse } & ICourseInformation
> = ({ setShowCourseInformationModal, current, editable = false }) => {
  const dispatch = useDispatch();

  return (
    <DefaultTextBox>
      <CourseInformationContainer
        editable={editable}
        onClick={() => {
          dispatch(actionSelectedCourse(current.name));
          setShowCourseInformationModal?.(true);
        }}
      >
        <li>
          <h2>{current.name}</h2>
        </li>
        <li className="text_area">
          <p>{current.description}</p>
        </li>
      </CourseInformationContainer>
    </DefaultTextBox>
  );
};

export default CourseInformation;
