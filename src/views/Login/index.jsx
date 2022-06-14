/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useRef, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import loginActions, { Types } from '@Actions/login';
import Loader from '@Components/common/Loader';
import { useDispatch, useSelector } from 'react-redux';
import LoaderImage from '@Assets/images/login-cover.png';
import LoginLogo from '@Assets/images/login-logo.png';
import Profile from '@Assets/images/admin/profile.jpg';
import useForm from '@Hooks/useForm';
import { loadingSelector } from '@src/selectors/loader';

const initialState = {
  username: '',
  password: '',
  // user_type: 'ODP',
};

const Login = () => {
  const dispatch = useDispatch();
  const loginbodyRef = useRef();
  const submitButtonRef = useRef();
  const [showPassword, setShowPassword] = useState(false);

  const isLoading = useSelector(loadingSelector([Types.LOGIN_REQUEST]));

  const { values, meta, inputProps, handleChange, handleSubmit } = useForm({
    initialValues: initialState,
    required: ['username', 'password'],
    onSubmit: (data) => {
      dispatch(loginActions.loginRequest(data));
    },
  });

  const onSubmitEnter = (event) => {
    if (event.key === 'Enter') {
      submitButtonRef?.current?.click();
    }
  };

  useEffect(() => {
    loginbodyRef?.current?.addEventListener('keypress', onSubmitEnter);
    return () => {
      loginbodyRef?.current?.removeEventListener('keypress', onSubmitEnter);
    };
  }, []);

  if (isLoading) {
    return <Loader />;
  }
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
                <h3>Sign in</h3>
              </div>
              <div className="login-form_body mt-30" ref={loginbodyRef}>
                {/* <div className="pm-group">
                  <button
                    type="button"
                    className="is-flex is-center is-align-center is-btn is-btn_secondary is-btn_full is-gap-10"
                  >
                    <svg
                      id="search"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24.049"
                      height="24.049"
                      viewBox="0 0 24.049 24.049"
                    >
                      <path
                        id="Path_3168"
                        data-name="Path 3168"
                        d="M5.33,146.307l-.837,3.125-3.06.065a12.046,12.046,0,0,1-.089-11.228h0l2.724.5,1.193,2.708a7.176,7.176,0,0,0,.067,4.832Z"
                        transform="translate(0 -131.773)"
                        fill="#fbbb00"
                      />
                      <path
                        id="Path_3169"
                        data-name="Path 3169"
                        d="M273.178,208.176a12.02,12.02,0,0,1-4.286,11.623h0l-3.431-.175-.486-3.031a7.167,7.167,0,0,0,3.083-3.66h-6.43v-4.757h11.55Z"
                        transform="translate(-249.339 -198.398)"
                        fill="#518ef8"
                      />
                      <path
                        id="Path_3170"
                        data-name="Path 3170"
                        d="M48.628,316.277h0A12.028,12.028,0,0,1,30.509,312.6l3.9-3.19a7.152,7.152,0,0,0,10.305,3.661Z"
                        transform="translate(-29.076 -294.876)"
                        fill="#28b446"
                      />
                      <path
                        id="Path_3171"
                        data-name="Path 3171"
                        d="M46.979,2.768l-3.9,3.189A7.15,7.15,0,0,0,32.542,9.7L28.625,6.495h0A12.027,12.027,0,0,1,46.979,2.768Z"
                        transform="translate(-27.28)"
                        fill="#f14336"
                      />
                    </svg>
                    <span>Sign in with Google</span>
                  </button>
  </div> 
                <div className="pm-group">
                  <div className="or is-flex is-start is-align-center is-gap-10">
                    <span className="t-border is-grow" />
                    <span>Or</span>
                    <span className="t-border is-grow" />
                  </div>
                </div> */}
                <div className="pm-group">
                  <label className="fw-bold">Email</label>
                  <input
                    type="email"
                    className={`pm-control ${meta.username.error && meta.password.touched ? 'is-invalid' : ''}`}
                    placeholder="Email"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    {...inputProps}
                  />
                </div>
                <div className="pm-group">
                  <label className="fw-bold"> password</label>
                  <div className="custom-input-group">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className={`pm-control ${meta.username.error && meta.password.touched ? 'is-invalid' : ''}`}
                      placeholder="passowrd"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      {...inputProps}
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
                <div className="pm-group">
                  <div className="is-flex is-between is-align-center is-wrap">
                    <div className="pm-checkbox mb-0">
                      <input type="checkbox" id="signin" />
                      <label htmlFor="signin" className="fs-md">
                        Keep me signed in
                      </label>
                    </div>
                    <a href="#" className="is-forgot is-underline">
                      Forgot Your Password?
                    </a>
                  </div>
                </div>
              </div>
              <div className="login-form_footer is-flex is-center is-align-center mt-30">
                <button
                  ref={submitButtonRef}
                  type="button"
                  className="is-btn is-btn_primary is-btn_full is-center"
                  onClick={handleSubmit}
                >
                  Sign in
                </button>
              </div>
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

export default Login;
