// Actions
const DISPLAY_MODAL = 'DISPLAY_MODAL';
const HIDE_MODAL = 'HIDE_MODAL';

// Initial State
const INTIAL_STATE = {
  displayModal: false,
  modalName: '',
  modalProps: {}
};

// Action Creators
export const displayModal = modalName => {
  return {
    type: DISPLAY_MODAL,
    modalName
  };
};

export const hideModal = () => {
  return {
    type: HIDE_MODAL
  };
};

// Reducer
export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case DISPLAY_MODAL:
      return {
        displayModal: true,
        modalName: action.modalName
      };
    case HIDE_MODAL:
      return INTIAL_STATE;
    default:
      return state;
  }
};
