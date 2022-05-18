/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';

const UploadFile = ({ onChange, value, name, accept, title, spanDescription }) => (
  <div className="pm-group">
    <div className="upload">
      <input type="file" id="upload" onChange={onChange} value={value} name={name} accept={accept} />
      <label htmlFor="upload">
        <div className="upload-icon">
          <i className="material-icons">backup</i>
        </div>
        <p className="opacity-5">{spanDescription}</p>
      </label>
    </div>
  </div>
);

UploadFile.defaultProps = {
  value: '',
  name: '',
  accept: '',
  title: '',
  spanDescription: '',
};

UploadFile.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  name: PropTypes.string,
  accept: PropTypes.string,
  title: PropTypes.string,
  spanDescription: PropTypes.string,
};

export default UploadFile;
