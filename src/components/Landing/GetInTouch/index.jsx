/* eslint-disable import/no-named-as-default */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import contactImg from '@Assets/images/spatialAnalysis/get-in-touch.svg';
import Input from '@Components/common/Input/index';
import Spinner from '@Components/common/Spinner/index';
import TextArea from '@Components/common/TextArea/index';
import Creators, { Types as LandingTypes } from '@Actions/landing';
import Button from '@Components/common/Button/index';
import useForm from '@Hooks/useForm';
import { loadingSelector } from '@src/selectors/loader';
import getInTouchVaidation from './getInTouchValidation';

const initialState = {
  name: '',
  email: '',
  phone: '',
  organization: '',
  description: '',
};

const { postRequestForDemoRequest, setAddRequestData } = Creators;

const GetInTouch = () => {
  const dispatch = useDispatch();
  const addRequestData = useSelector((state) => state.landing.addRequestData);

  const submission = () => {
    // eslint-disable-next-line no-use-before-define
    submitForm();
  };

  const { handleChange, handleSubmit, values, errors } = useForm(addRequestData, submission, getInTouchVaidation);

  const submitForm = () => {
    dispatch(postRequestForDemoRequest(values));
  };

  const isLoading = useSelector(loadingSelector([LandingTypes.POST_REQUEST_FOR_DEMO_REQUEST]));

  return (
    <section className="usafiri-get-in-touch pt-pb-100" id="usafiri-get-in-touch">
      <div className="container">
        <div className="form-container">
          <p className="clr-primary-500">Request Access</p>
          <h3 className="pb-20 pt-10">Get in Touch With Us</h3>
          <form className="pb-20">
            <div className="form-fields">
              <Input
                label="Name"
                type="text"
                name="full_name"
                placeholder="Enter your Name"
                value={values.full_name}
                onChange={handleChange}
                errorMessage={errors?.full_name}
              />
              <Input
                label="Email"
                type="email"
                name="email"
                placeholder="Enter your Email"
                value={values.email}
                onChange={handleChange}
                errorMessage={errors?.email}
              />
              <Input
                label="Phone"
                type="text"
                name="phone"
                placeholder="Enter your Phone"
                value={values.phone}
                onChange={handleChange}
                errorMessage={errors?.phone}
              />
              <Input
                label="Organisation"
                type="text"
                name="organization_name"
                placeholder="Enter your Organisation"
                value={values.organization_name}
                onChange={handleChange}
                errorMessage={errors?.organization_name}
              />
            </div>
            <TextArea
              type="text"
              name="description"
              placeholder="Tell us how you would use Usafiri"
              value={values.description}
              onChange={handleChange}
              errorMessage={errors?.description}
            />
            <button className="is-btn is-btn_primary" type="button" onClick={handleSubmit}>
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
                <div className="is-flex is-align-center is-gap-10">
                  <span>Send message</span>
                  <i className="material-icons-outlined">send</i>
                </div>
              )}
            </button>
          </form>
          <p>
            Or for general queries, directly mail us at{' '}
            <a href="mailto: hello.usafiri@gmail.com" className="clr-primary-500">
              hello.usafiri@gmail.com
            </a>
          </p>
        </div>
        <div className="image-container is-flex is-align-center">
          <img src={contactImg} alt="" className="image" />
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
