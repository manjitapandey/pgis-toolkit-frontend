/* eslint-disable import/no-named-as-default */
import React, { useState } from 'react';
import ctaImage from '@Assets/images/CTA-img.jpg';
import useForm from '@Hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import Input from '@Components/common/Input';
import Creators from '@Actions/landing';

const { postRequestForDemoRequest, setAddRequestData } = Creators;

const RequestForDemo = () => {
  const dispatch = useDispatch();
  const [checkState, setCheckState] = useState({ name: false, email: false });
  const addRequestData = useSelector((state) => state.landing.addRequestData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'full_name') {
      setCheckState({ name: true, email: false });
    }
    if (name === 'email') {
      setCheckState({ name: false, email: true });
    }
    dispatch(setAddRequestData({ name, value }));
  };
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    dispatch(setAddRequestData({ name, value: checked }));
  };

  const handleSubmit = () => {
    if (addRequestData?.full_name === '' || addRequestData?.email === '') return;
    dispatch(postRequestForDemoRequest({ ...addRequestData }));
    setCheckState({ name: false, email: false });
  };
  return (
    <section className="usafiri-request" id="usafiri-request">
      <div className="container">
        <div className="usafiri-request-wrap">
          <div className="usafiri-request-content">
            <div className="row">
              <div className="grid-lg-7 grid-sm-12">
                <figure className="request-image">
                  <img src={ctaImage} alt="cta" />
                </figure>
              </div>
              <div className="grid-lg-5 grid-sm-12">
                <form className="pd-25">
                  <Input
                    type="text"
                    placeholder="Full name"
                    name="full_name"
                    value={addRequestData?.full_name}
                    onChange={handleChange}
                    errorMessage={checkState.name && addRequestData?.full_name === '' ? 'Cannot be empty' : ''}
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={addRequestData?.email}
                    onChange={handleChange}
                    errorMessage={checkState.email && addRequestData?.email === '' ? 'Cannot be empty' : ''}
                  />
                  <Input
                    type="number"
                    placeholder="Phone"
                    name="phone"
                    value={addRequestData?.phone}
                    onChange={handleChange}
                  />
                  <Input
                    type="text"
                    placeholder="Organization Name"
                    name="organization_name"
                    value={addRequestData?.organization_name}
                    onChange={handleChange}
                  />
                  <div className="pm-group">
                    <div className="pm-checkbox mb-0">
                      <input
                        type="checkbox"
                        // id="signin"
                        name="marketing_communications"
                        onChange={handleCheckboxChange}
                        value={addRequestData?.marketing_communications}
                        checked={addRequestData?.marketing_communications}
                      />
                      <label htmlFor="signin" className="fs-md">
                        Yes, I would like to receive marketing communications regarding USAFIRI.
                      </label>
                    </div>
                  </div>
                  <button className="is-btn is-btn_primary" type="button" onClick={handleSubmit}>
                    <span>Request for demo</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestForDemo;
