import { useEffect, useState } from 'react';

const useForm = (initialState, callback, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleCustomChange = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleUploadChange = (event) => {
    const { name, files } = event.target;
    setValues({
      ...values,
      [name]: files[0],
    });
  };
  const handleAllValues = (value) => {
    // const { name, value } = event.target;
    setValues(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (values?.bulk_id) {
      setErrors({});
      setIsSubmitting(true);
    } else {
      setErrors(validate(values));
      setIsSubmitting(true);
    }

    // eslint-disable-next-line no-console

    // callback();
    // submit();
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
      setValues(initialState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);
  useEffect(() => {
    setValues(initialState);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialState]);
  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    handleCustomChange,
    handleUploadChange,
    handleAllValues,
    setValues,
    setErrors,
  };
};

export default useForm;
