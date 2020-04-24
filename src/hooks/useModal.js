import { useDispatch } from 'react-redux';
/* Redux */
import {
  displayModal as displayModalAction,
  hideModal as hideModalAction
} from 'redux/modules/modals';

const useModal = () => {
  const dispatch = useDispatch();
  const displayModal = modalName => {
    dispatch(displayModalAction(modalName));
  };
  const hideModal = () => dispatch(hideModalAction());
  return {
    displayModal,
    hideModal
  };
};

export default useModal;
