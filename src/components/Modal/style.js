import styled, { keyframes } from "styled-components";

export const ModalBackground = styled.div.attrs((props) => ({
  className: props.className,
}))`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 9999;

  background-color: rgba(0, 0, 0, 0.2);
`;

const ModalFadeInKeyframes = keyframes`
  0% {
    transform: scale3d(0.1, 0.1, 1);
  }

  55% {
    transform: scale3d(0.55, 0.55, 1);
  }

  75% {
    transform: scale3d(0.75, 0.75, 1);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
`;

export const ModalContainer = styled.div.attrs((props) => ({
  className: props.className,
}))`
  background: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 10px;
  width: 70%;
  max-width: 800px;
  animation: ${ModalFadeInKeyframes} 250ms linear;
  overflow-x: hidden;
  max-height: 90%;
`;
