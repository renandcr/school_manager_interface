import { actionSelectedUser } from "../../store/models/user/actions";
import { CourseInformationContainer } from "./style";
import DefaultTextBox from "../DefaultTextBox";
import { useDispatch } from "react-redux";
import * as React from "react";

import {
  actionSelectedCourse,
  IDatabaseCourse,
} from "../../store/models/course/actions";

export interface ICourseInformation {
  setShowWarningModalOnCoursePage?: React.Dispatch<boolean>;
  setShowCourseInformationModal?: React.Dispatch<boolean>;
  setRemoveInstructorFromCourse?: React.Dispatch<boolean>;
  removeOption?: boolean;
  coursePage?: boolean;
  editable?: boolean;
  fontsize?: string;
}

const CourseInformation: React.FC<
  { current: IDatabaseCourse } & ICourseInformation
> = ({
  setShowWarningModalOnCoursePage,
  setShowCourseInformationModal,
  setRemoveInstructorFromCourse,
  removeOption = false,
  editable = false,
  coursePage,
  fontsize,
  current,
}) => {
  const dispatch = useDispatch();

  return (
    <DefaultTextBox>
      <CourseInformationContainer
        removeOption={removeOption}
        editable={editable}
        fontsize={fontsize}
        onClick={() => {
          dispatch(actionSelectedCourse(current.name));
          setShowCourseInformationModal?.(true);
        }}
      >
        <li>
          <h2 className="ci_name">{current.name}</h2>
        </li>
        <li className="text_area">
          <p>{current.description}</p>
        </li>
        {coursePage && (
          <li className="ci_instructors">
            {current.instructors.length > 0 && (
              <>
                <h3>Instrutores(as)</h3>
                {current.instructors.map((current, index) => (
                  <div key={index}>
                    <h4>{`${current.first_name + " " + current.last_name}`}</h4>
                    <span
                      className="ci_remove_option"
                      onClick={() => {
                        dispatch(actionSelectedUser(current.email));
                        setShowWarningModalOnCoursePage?.(true);
                        setRemoveInstructorFromCourse?.(true);
                      }}
                    >
                      Remover instrutor do curso
                    </span>
                  </div>
                ))}
              </>
            )}
          </li>
        )}
      </CourseInformationContainer>
    </DefaultTextBox>
  );
};

export default CourseInformation;
