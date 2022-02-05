import styled from "@emotion/styled";
import React, { ReactNode, useState, MouseEvent } from "react";
import colors from "../styles/design-tokens/colors";
import Fader from "./fader";

const ModalContainer = styled("div")`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;

  & > .e-modal__overlay {
    background-color: ${colors.overlay};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    position: absolute;

    & > .e-modal__close {
      position: absolute;
      top: 50px;
      right: 50px;
      z-index: 6;
      text-decoration: none;

      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }
  }

  & > .e-modal__inner {
    width: 900px;
    max-width: 75%;
    height: 90vh;
    position: relative;
  }
`;

type ModalProps = {
  children: ReactNode;
  handleClose: Function;
};

const Modal: React.FC<ModalProps> = ({ children, handleClose }) => {
  const [exit, setExit] = useState(false);

  const exitClick = (e: MouseEvent) => {
    e.preventDefault();
    setTimeout(() => {
      handleClose();
    }, 600);
    setExit(true);
  };

  return (
    <ModalContainer className="e-modal">
      <Fader
        variant="opacity"
        className="e-modal__overlay"
        delay={exit ? 3 : 0}
        exit={exit}
      >
        <a href="" className="e-modal__close e-link" onClick={exitClick}>
          Close
        </a>
      </Fader>
      <Fader
        exit={exit}
        variant={exit ? "opacity" : ""}
        className="e-modal__inner"
        delay={exit ? 0 : 2}
      >
        {children}
      </Fader>
    </ModalContainer>
  );
};

export default Modal;
