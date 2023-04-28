/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useRef, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import signupAction, { Types } from '@Actions/signup';
import Loader from '@Components/common/Loader';
import { useDispatch, useSelector } from 'react-redux';
import LoaderImage from '@Assets/images/login-cover.png';
import LoginLogo from '@Assets/images/login-logo.png';
import useForm from '@Hooks/useForm';
import Spinner from '@Components/common/Spinner';
import { loadingSelector } from '@src/selectors/loader';
import Input from '@Components/common/Input/index';
import signupVaidation from './signupValidation';

const initialState = {
  full_name: '',
  username: '',
  password: '',
  address: '',
  phone_no: '',
  email: '',
  // user_type: 'ODP',
};

const SignUp = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const emailVerificationToken = useSelector((state) => state.verifyUser.emailVerificationToken);
  const userData = useSelector((state) => state.verifyUser.userData);

  const isLoading = useSelector(loadingSelector([Types.SIGNUP_REQUEST]));

  const submission = () => {
    // eslint-disable-next-line no-use-before-define
    submitForm();
  };

  const { handleChange, handleCustomChange, handleUploadChange, handleSubmit, values, errors, setValues } = useForm(
    initialState,
    submission,
    signupVaidation,
  );

  const finalData = {
    ...values,
    email_verification_token: userData?.email_verification_token,
    organization: userData?.organization,
    project: userData?.project,
    group: userData?.group,
    email: userData?.email,
  };

  const submitForm = () => {
    dispatch(signupAction.signupRequest(finalData));
  };
  // if (isLoading) {
  //   return <Loader />;
  // }
  return (
    <main className="login-page">
      <div className="container-fluid">
        <div className="is-flex is-wrap">
          <div className="login-cover bg-image" style={{ background: `url(${LoaderImage})` }}>
            <div className="loing-cover_header">
              <a href="#">
                <img src={LoginLogo} alt="" />
              </a>
            </div>
            <div className="login-cover_body mt-30">
              <h3 className="mb-30">Integrated Mapping tool for Spatial Data-driven Interventions Planning</h3>
              <p>Piloting the tool for Transport Mobility Assessment</p>
            </div>
          </div>
          <div className="login-form flex-1 is-flex is-center is-column is-align-center">
            <div className="login-form_content">
              <div className="login-form_header is-text-center">
                <figure className="is-circle is-circle_md is-bg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
                    <g id="Group_6707" data-name="Group 6707" transform="translate(-1295 -94)">
                      <circle
                        id="Ellipse_1266"
                        data-name="Ellipse 1266"
                        cx="40"
                        cy="40"
                        r="40"
                        transform="translate(1295 94)"
                        fill="#ff5a5f"
                      />
                      <path
                        id="Path_11325"
                        data-name="Path 11325"
                        d="M24-36a4.061,4.061,0,0,1,4.031,4.031A4.043,4.043,0,0,1,24-28.031a4.043,4.043,0,0,1-4.031-3.937A4.061,4.061,0,0,1,24-36Zm0,19.969c5.438,0,11.625,2.625,12,4.031H12C12.469-13.406,18.656-16.031,24-16.031Zm0-24a8.043,8.043,0,0,0-7.969,8.063A7.962,7.962,0,0,0,24-24a7.962,7.962,0,0,0,7.969-7.969A8.043,8.043,0,0,0,24-40.031Zm0,20.063c-5.344,0-16.031,2.625-16.031,7.969v4.031H40.031V-12C40.031-17.344,29.344-19.969,24-19.969Z"
                        transform="translate(1311 158)"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                </figure>
                <h3>Sign Up</h3>
              </div>
              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                <div className="login-form_body mt-30">
                  <Input
                    type="text"
                    placeholder="Full name"
                    name="full_name"
                    value={values.full_name}
                    onChange={handleChange}
                    errorMessage={errors?.full_name}
                    label="Full name"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={userData?.email}
                    onChange={handleChange}
                    // errorMessage={errors?.email}
                    label="Email"
                    readOnly
                  />

                  {/* <div className="pm-group">
                  <label className="fw-bold">Email</label>
                  <input
                    type="email"
                    className={`pm-control ${meta.username.error && meta.password.touched ? 'is-invalid' : ''}`}
                    placeholder="Email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    {...inputProps}
                    readOnly
                  />
  </div> */}
                  <div className="is-flex is-start is-align-center is-gap-10">
                    <Input
                      type="text"
                      placeholder="Username"
                      name="username"
                      value={values?.username}
                      onChange={handleChange}
                      errorMessage={errors?.username}
                      label="Username"
                    />
                    <div className="pm-group">
                      <label className="fw-bold">password</label>
                      <div className="custom-input-group">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          className="pm-control"
                          placeholder="passowrd"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                        />
                        <span
                          className="span-group pr-10"
                          onClick={() => setShowPassword(!showPassword)}
                          onKeyDown={() => {}}
                        >
                          <i className="material-icons">{`${showPassword ? 'visibility' : 'visibility_off'}`}</i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="is-flex is-start is-align-center is-gap-10">
                    <Input
                      type="text"
                      placeholder="address"
                      name="address"
                      value={values?.address}
                      onChange={handleChange}
                      errorMessage={errors?.address}
                      label="Address"
                    />
                    <Input
                      type="number"
                      placeholder="98********"
                      name="phone_no"
                      value={values?.phone_no}
                      onChange={handleChange}
                      errorMessage={errors?.phone_no}
                      label="Phone number"
                    />
                  </div>
                </div>
                <div className="login-form_footer is-flex is-center is-align-center mt-30">
                  <button type="submit" className="is-btn is-btn_primary is-btn_full is-center">
                    {isLoading ? (
                      <Spinner
                        style={{
                          width: '18px',
                          height: '18px',
                          border: '3px solid #ffffff',
                          borderTop: '3px solid #0055ff',
                          marginLeft: '6px',
                        }}
                      />
                    ) : (
                      'Sign Up'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
// Login.propTypes = {
//   loginRequest: PropTypes.func.isRequired,
//   loading: PropTypes.bool.isRequired,
// };

export default SignUp;
