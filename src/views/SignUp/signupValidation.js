/* eslint-disable camelcase */
function signupVaidation(values) {
  // eslint-disable-next-line no-console
  const errors = {};
  console.log(errors, values, 'values');
  if (!values?.full_name) {
    errors.full_name = 'Full name is Required.';
  }
  if (!values?.username) {
    errors.username = 'Username is Required.';
  }
  if (!values?.password) {
    errors.password = 'Password is Required.';
  }
  if (!values?.address) {
    errors.address = 'Address is Required.';
  }
  if (!values?.email) {
    errors.email = 'Email is Required.';
  }
  if (values.phone_no && values.phone_no.length !== 10 && !values.phone_no.match('^[0-9]*$')) {
    errors.phone_no = 'Phone number must be of 10 characters and should not contain alphabets.';
  }
  return errors;
}

export default signupVaidation;
