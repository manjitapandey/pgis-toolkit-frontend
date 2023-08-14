/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
/* eslint-disable camelcase */
function getInTouchVaidation(values) {
  // eslint-disable-next-line no-console
  const errors = {};
  if (!values?.full_name) {
    errors.full_name = 'Name is Required.';
  }
  if (!values?.email) {
    errors.email = 'Email is Required.';
  }
  if (!values?.phone) {
    errors.phone = 'Phone is Required.';
  }
  if (!values?.organization_name) {
    errors.organization_name = 'Organisation is Required.';
  }
  if (!values?.description) {
    errors.description = 'Description is Required.';
  }
  if (values?.phone) {
    const pattern = /^[0-9\b]+$/;
    const result = pattern.test(values.phone);
    let error;
    if (!result) {
      error = true;
    } else {
      values.phone.toString().length < 7 || values.phone.toString().length > 13 ? (error = true) : (error = false);
    }
    const message = !error ? '' : !values.phone ? 'Contact number is required' : 'Enter a valid contact number';
    if (message !== '') {
      errors.phone = message;
    }
  }
  if (values?.email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const result = pattern.test(values.email);
    if (!result) {
      errors.email = 'Enter a valid email';
    }
  }
  return errors;
}

export default getInTouchVaidation;
