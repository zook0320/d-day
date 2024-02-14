import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Modal from "./Modal";

const HeaderWrapper = styled.div`
  background-color: #ff6868;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
`;

const FooterWrapper = styled.div`
  background-color: #ff6868;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const IconLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  margin-left: 10px;
`;

function App() {
  return (
    <>
      <HeaderWrapper>D-DAY Web Mini Project</HeaderWrapper>

      <Modal />
      <FooterWrapper>
        <IconLink href="https://github.com/zook0320/d-day/tree/main" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </IconLink>
      </FooterWrapper>
    </>
  );
}

export default App;
