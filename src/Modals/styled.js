import { motion } from 'framer-motion';
import styled from 'styled-components';
/* Device */
import { device } from 'config/media';

export const CloseButton = styled.button`
  background: #191919;
  border-radius: 50%;
  border: none;
  color: #bbbebf;
  font-size: 1.5rem;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
`;

export const ModalShade = styled(motion.div)`
  /* Positioning */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => props.theme.modal.backdrop};
  will-change: opacity;
  z-index: 2;
`;

export const ModalContainer = styled(motion.div)`
  /* Positioning */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;

export const ModalBox = styled(motion.div)`
  /* Positioning */
  position: relative;
  width: 90%;
  min-height: 35rem;
  /* Styling */
  background: ${props => props.theme.modal.background};
  border-radius: 2rem;
  z-index: 99999;
  /* Laptop/Desktop devices */
  @media ${device.laptop} {
    /* Display & Box Model */
    width: 50%;
  }
`;
export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`;

export const ModalContent = styled(motion.div)`
  padding: 0 2rem;
`;
