import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
/* Styled Components */
import {
  CloseButton,
  ModalShade,
  ModalContainer,
  ModalHeader,
  ModalContent,
  ModalBox
} from './styled';

const Modal = ({ children, display, closeModal }) => {
  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp, false);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keyup', handleKeyUp, false);
      document.body.style.overflow = 'unset';
    };
  });

  // Handle the key press event.
  const handleKeyUp = e => {
    const keys = {
      27: () => {
        e.preventDefault();
        closeModal();
        window.removeEventListener('keyup', handleKeyUp, false);
      }
    };
    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
  };

  const shade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modal = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.15 } }
  };

  if (display) {
    return ReactDOM.createPortal(
      <motion.div initial="hidden" animate="visible" exit="hidden">
        <ModalShade variants={shade} transition={{ duration: 0.2 }} className="modal-shade" />
        <ModalContainer>
          <ModalBox variants={modal}>
            <ModalHeader>
              <CloseButton onClick={() => closeModal()}>X</CloseButton>
            </ModalHeader>
            <ModalContent>{children}</ModalContent>
          </ModalBox>
        </ModalContainer>
      </motion.div>,
      document.getElementById('modal-root')
    );
  }
  return null;
};

export default Modal;
