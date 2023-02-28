import styled from "styled-components";
import { motion } from "framer-motion";

export const MainHomePageContainer = styled(motion.main)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-top: 70px;
  width: 90%;
`;

export const HomePageSchoolsContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 20px;
  .schools_container {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 30px;
  }
  .buttons_container {
    max-width: 100%;
  }
`;
