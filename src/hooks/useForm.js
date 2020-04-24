import { useState } from 'react';
/* Utils */
import { validateField } from 'utils/formValidations';

const useForm = (initialState, callback) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const onChange = event => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const onBlur = event => {
    const { name, value } = event.target;
    const validationError = validateField(name, value);
    setErrors({ ...errors, [name]: validationError });
  };

  const onSubmit = event => {
    event.preventDefault();
    callback();
  };

  return {
    onChange,
    onBlur,
    onSubmit,
    values,
    errors
  };
};

export default useForm;
