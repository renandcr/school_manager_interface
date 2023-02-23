import { VARIABLES } from "../../../styles/global";
import CloseIcon from "@mui/icons-material/Close";
import { OptionsModalComponent } from "./style";
import DefaultButton from "../../DefaultButton";
import { useHistory } from "react-router-dom";
import DefaultModal from "../DefaultModal";
import * as React from "react";

interface IOptionsModal {
  showModal: boolean;
  setShowModal: React.Dispatch<boolean>;
}

const OptionsModal: React.FC<IOptionsModal> = ({ showModal, setShowModal }) => {
  const history = useHistory();

  return (
    <>
      {showModal && (
        <DefaultModal backgroundColor="transparent">
          <OptionsModalComponent>
            <div>
              <CloseIcon
                className="icon_close"
                onClick={() => setShowModal?.(false)}
              />
            </div>
            <ul>
              <li onClick={() => history.push("/school_page")}>
                <DefaultButton
                  backgroundColor={VARIABLES.blueColor5}
                  color={VARIABLES.grayColor4}
                  border={"solid 1px"}
                  width="180px"
                  height="55px"
                >
                  {"Escola"}
                </DefaultButton>
              </li>

              <li>
                <DefaultButton
                  backgroundColor={VARIABLES.blueColor5}
                  color={VARIABLES.grayColor4}
                  border={"solid 1px"}
                  width="180px"
                  height="55px"
                >
                  {"Cursos"}
                </DefaultButton>
              </li>

              <li>
                <DefaultButton
                  backgroundColor={VARIABLES.blueColor5}
                  color={VARIABLES.grayColor4}
                  border={"solid 1px"}
                  width="180px"
                  height="55px"
                >
                  {"Alunos"}
                </DefaultButton>
              </li>
            </ul>
          </OptionsModalComponent>
        </DefaultModal>
      )}
    </>
  );
};

export default OptionsModal;
