import React from 'react';
import PropTypes from 'prop-types';

const UploadContent = ({ fileName, fileSize, handleDelete }) => (
  <div className="pm-group">
    <div className="pmupload-file is-gap-15 is-border">
      <div className="pmupload-file_content is-flex is-start is-align-center">
        <div className="is-circle is-circle_sm is-bg-white is-border">
          <i className="material-icons-outlined clr-primary-500">description</i>
        </div>
        <div className="pmupload-file_name ml-12">
          <p className="fw-600">{fileName}</p>
          <span className="fs-md">{fileSize}</span>
        </div>
      </div>
      <div className="pmupload-file_icons is-flex">
        {/* <a class="is-circle is-circle_xs is-circle_hover__white">
            <i class="material-icons-outlined">download</i>
  </a> */}
        <a className="is-circle is-circle_xs is-circle_hover__white" onClick={handleDelete}>
          <i className="material-icons-outlined">delete</i>
        </a>
      </div>
    </div>
  </div>
);

UploadContent.defaultProps = {
  fileName: '',
  fileSize: 0,
  handleDelete: () => {},
};

UploadContent.propTypes = {
  fileName: PropTypes.string,
  fileSize: PropTypes.number,
  handleDelete: PropTypes.func,
};

export default UploadContent;
