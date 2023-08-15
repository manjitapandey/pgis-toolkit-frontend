/* eslint-disable camelcase */
import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '@Components/common/Input/index';

const BasicInfo = ({ handleChange }) => {
  const addBasicData = useSelector((state) => state.individualOrganizations.addBasicData);

  const { name, start_date, end_date, description } = addBasicData;

  return (
    <div className="mt-15">
      <Input label="Name" placeholder="Name" id="phone" name="name" onChange={handleChange} value={name} />
      <div className="is-flex  is-gap-15 is-wrap">
        <Input
          type="date"
          className1="is-grow"
          labelClassName="fw-bold is-capitalize"
          // icon="calendar_today"
          label="Project start Date"
          onChange={handleChange}
          id="start date"
          name="start_date"
          placeholder="start Date"
          value={start_date}
        />
        <Input
          type="date"
          className1="is-grow"
          labelClassName="fw-bold is-capitalize"
          // icon="calendar_today"
          name="end_date"
          label="Project end Date"
          onChange={handleChange}
          id="end date"
          placeholder="end Date"
          value={end_date}
        />
      </div>
      <div className="pm-group">
        <label className="fw-bold">Description</label>
        <textarea
          type="text"
          className="pm-control"
          placeholder="Description"
          name="description"
          value={description}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

BasicInfo.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default BasicInfo;
