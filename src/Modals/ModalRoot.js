import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
/* Redux */
import { hideModal } from '../redux/modules/modals';
/* Modal Component */
import Modal from 'Modals/Modal';
/* Modals */
import RecoverPassword from 'Modals/RecoverPassword';

const MODAL_TYPES = {
  RECOVER_PASSWORD: RecoverPassword
};

const ModalRoot = () => {
  const modals = useSelector(state => state.modals);
  const dispatch = useDispatch();
  const { displayModal, modalName } = modals;
  if (!modalName) {
    return null;
  }
  const closeModal = () => {
    dispatch(hideModal());
  };
  const SpecifiedModal = MODAL_TYPES[modalName];
  return (
    <AnimatePresence>
      <Modal display={displayModal} closeModal={closeModal}>
        <SpecifiedModal />
      </Modal>
    </AnimatePresence>
  );
};

export default ModalRoot;
