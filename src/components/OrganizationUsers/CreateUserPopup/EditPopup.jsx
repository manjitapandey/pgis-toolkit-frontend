/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Input from '@Components/common/Input/index';
import { Creators } from '@Actions/users';

const { setEditUserData } = Creators;

const EditPopup = ({ data }) => {
  const dispatch = useDispatch();
  const { full_name, email, username, address, contact } = data;
  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(setEditUserData({ name, value }));
  };
  return (
    <>
      <Input name="full_name" placeholder="Full name" label="Full Name" onChange={handleChange} value={full_name} />
      <Input name="email" placeholder="**********@gmail.com" label="Email" onChange={handleChange} value={email} />
      <div className="is-flex is-wrap is-gap-15">
        <Input
          className1="is-grow"
          name="address"
          label="Address"
          placeholder="address"
          onChange={handleChange}
          value={address}
        />
        <Input
          type="number"
          className1="is-grow"
          name="contact"
          label="Phone Number"
          placeholder="98********"
          onChange={handleChange}
          value={contact}
        />
      </div>
    </>
  );
};

EditPopup.propTypes = {
  data: PropTypes.object.isRequired,
};

export default EditPopup;
