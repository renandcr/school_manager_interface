import styled from "styled-components";
import { motion } from "framer-motion";

export const MainHomeScreenContainer = styled(motion.main)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const HomeScreenContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  width: 90%;
`;
