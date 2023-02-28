import { VARIABLES } from "../../styles/global";
import styled from "styled-components";
import { motion } from "framer-motion";

export const DarkBackgroundContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 99;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: ${VARIABLES.colorDarkBackground};
`;
