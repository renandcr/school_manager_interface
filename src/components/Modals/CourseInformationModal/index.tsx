import { IDatabaseCourse } from "../../../store/models/course/actions";
import { HorizontalButtonContainer } from "../../DefaultButton/style";
import { CloseModalContainer } from "../DefaultModal/style";
import CourseInformation from "../../CourseInformation";
import { dateHandler } from "../../../assets/utils";
import { VARIABLES } from "../../../styles/global";
import CloseIcon from "@mui/icons-material/Close";
import DefaultButton from "../../DefaultButton";
import { AnimatePresence } from "framer-motion";
import { useHistory } from "react-router-dom";
import DefaultModal from "../DefaultModal";
import * as React from "react";

interface ICourseInformationModal {
  setShowCourseInformationModal: React.Dispatch<boolean>;
  setShowCourseForm: React.Dispatch<boolean>;
  setCourseUpdate: React.Dispatch<boolean>;
  showCourseInformationModal: boolean;
}

const CourseInformationModal: React.FC<
  { current: IDatabaseCourse } & ICourseInformationModal
> = ({
  setShowCourseInformationModal,
  showCourseInformationModal,
  setShowCourseForm,
  setCourseUpdate,
  current,
}) => {
  const history = useHistory();

  return (
    <AnimatePresence>
      {showCourseInformationModal && (
        <DefaultModal key="course_information_modal">
          <CloseModalContainer
            onClick={() => setShowCourseInformationModal(false)}
          >
            <span>{`Desde ${dateHandler(new Date(current.created_at))}`}</span>
            <CloseIcon className="icon_close" />
          </CloseModalContainer>
          <CourseInformation current={current} />
          <HorizontalButtonContainer>
            <DefaultButton
              height="47px"
              onClick={() => {
                setShowCourseInformationModal(false);
                history.push("/course_page");
              }}
            >
              {"Gerenciar"}
            </DefaultButton>
            <DefaultButton
              border={`solid 1px ${VARIABLES.blueColor}`}
              backgroundcolor="transparent"
              color={VARIABLES.blueColor}
              height="47px"
              onClick={() => {
                setShowCourseInformationModal(false);
                setShowCourseForm(true);
                setCourseUpdate(true);
              }}
            >
              {"Editar"}
            </DefaultButton>
          </HorizontalButtonContainer>
        </DefaultModal>
      )}
    </AnimatePresence>
  );
};

export default CourseInformationModal;
