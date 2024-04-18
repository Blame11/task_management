"use client";
import { useGlobalState } from "@/app/context/globalProvider";
import React from "react";
import styled from "styled-components";

interface Props {
  content: React.ReactNode;
}

/**
 * A Modal component that renders a fullscreen overlay with a content passed to it.
 * The user can close the modal by clicking on the overlay or pressing the ESC key.
 */
function Modal({ content }: Props) {
  const { closeModal } = useGlobalState();

  const { theme } = useGlobalState();

  // Render the Modal with the content passed to it
  return (
    <ModalStyled theme={theme}>
      {/* The overlay that closes the modal when clicked */}
      <div className="modal-overlay" onClick={closeModal}></div>
      {/* The content of the modal */}
      <div className="modal-content">{content}</div>
    </ModalStyled>
  );
}

const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;

  .modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.45);
    filter: blur(4px);
  }

  .modal-content {
    margin: 0 1rem;

    padding: 2rem;
    position: relative;
    max-width: 630px;
    width: 100%;
    z-index: 100;

    border-radius: 1rem;
    background-color: ${(props) => props.theme.colorBg2};
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
    border-radius: ${(props) => props.theme.borderRadiusMd2};

    @media screen and (max-width: 450px) {
      font-size: 90%;
    }
  }
`;

export default Modal;
