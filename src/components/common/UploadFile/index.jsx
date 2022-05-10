/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';

const UploadFile = ({ onChange, value, name, accept, title, spanDescription }) => (
  <div className="pm-group">
    <div className="pmupload-btn is-flex is-start is-align-center">
      <label htmlFor="upload" className="is-flex is-align-center is-btn is-btn_icon is-btn_link">
        <i className="material-icons">upload</i>
        <span>{title}</span>
        <input type="file" id="upload" onChange={onChange} value={value} name={name} accept={accept} />
      </label>
      <span className="fs-md">{spanDescription}</span>
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
