import React, { useState } from 'react';
import PropTypes from 'prop-types';

const textLimit = 112;

const CaseboxWrapper = ({ heading, title, image, date, description }) => {
  const [hideText, setHideText] = useState(false);

  return (
    <div className="casebox-wrapper slick-slide slick-current slick-active" style={{ width: '348px' }}>
      <div className="casebox-item mt-15">
        <figure className="casebox-item_image">
          <img src={image} alt="" />
        </figure>
        <div className="casebox-item_header mt-15">
          <p className="fw-bold is-uppercase fs-md">{heading}</p>
          <h4 className="mb-12 mt-05" style={{ fontWeight: 600 }}>
            {title}
          </h4>
          <date className="fs-md">{date}</date>
        </div>
        <div className="casebox-item_body mt-15 fs-lg">
          <p>
            {!hideText ? description.slice(0, textLimit) : description}{' '}
            {!hideText && description.length > textLimit ? (
              <span style={{ display: 'inline-flex', gap: '2px' }}>
                ...
                <span
                  style={{ color: '#009686', cursor: 'pointer' }}
                  onClick={() => setHideText(!hideText)}
                  onKeyUp={() => {}}
                >
                  {' '}
                  See more
                </span>
              </span>
            ) : (
              ''
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

CaseboxWrapper.propTypes = {
  heading: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CaseboxWrapper;
