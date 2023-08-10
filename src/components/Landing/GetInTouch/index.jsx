/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import contactImg from '@Assets/images/spatialAnalysis/get-in-touch.svg';
import Input from '@Components/common/Input/index';
import Spinner from '@Components/common/Spinner/index';
import TextArea from '@Components/common/TextArea/index';
import Button from '@Components/common/Button/index';
import useForm from '@Hooks/useForm';
import getInTouchVaidation from './getInTouchValidation';

const initialState = {
  name: '',
  email: '',
  phone: '',
  organization: '',
  description: '',
};

const GetInTouch = () => {
  const submission = () => {
    // eslint-disable-next-line no-use-before-define
    submitForm();
  };

  const { handleChange, handleSubmit, values, errors } = useForm(initialState, submission, getInTouchVaidation);

  const submitForm = () => {
    // dispatch(signupAction.signupRequest(finalData));
    console.log('val', values);
  };

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
                name="name"
                placeholder="Enter your Name"
                value={values.name}
                onChange={handleChange}
                errorMessage={errors?.name}
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
                type="number"
                name="phone"
                placeholder="Enter your Phone"
                value={values.phone}
                onChange={handleChange}
                errorMessage={errors?.phone}
              />
              <Input
                label="Organization"
                type="text"
                name="organization"
                placeholder="Enter your Organization"
                value={values.organization}
                onChange={handleChange}
                errorMessage={errors?.organization}
              />
            </div>
            <TextArea
              type="text"
              name="description"
              placeholder="Describe to us how you would use Usafiri"
              value={values.description}
              onChange={handleChange}
              errorMessage={errors?.description}
            />
            <button className="is-btn is-btn_primary" type="button" onClick={handleSubmit}>
              {/* {isLoading ? (
                <Spinner
                  style={{
                    width: '18px',
                    height: '18px',
                    border: '3px solid #ffffff',
                    borderTop: '3px solid #0055ff',
                    marginLeft: '6px',
                  }}
                />
              ) : ( */}
              <div className="is-flex is-align-center is-gap-10">
                <span>Send message</span>
                <i className="material-icons-outlined">send</i>
              </div>
              {/* )} */}
            </button>
          </form>
          <p>
            Or for general queries directly mail us at{' '}
            <a href="mailto: hello@usafiri.io" className="clr-primary-500">
              hello@usafiri.io
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
