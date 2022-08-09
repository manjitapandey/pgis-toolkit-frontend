// import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
// import styles from './button.module.scss';

const Button = ({ type, onClick, label, iconName, isLoading, btnClassName, btnStyle }) => (
  <button
    // eslint-disable-next-line react/button-has-type
    type={type}
    onClick={onClick}
    className={`is-btn is-btn_primary is-btn_icon btnClassName ${isLoading && 'is-disable'} ${btnClassName}`}
    modal-link="create-project"
    style={btnStyle}
  >
    {iconName && <i className="material-icons">{iconName}</i>}
    {isLoading ? (
      <span>Saving...</span>
    ) : (
      <p className="fw-500 fs-md" style={{ marginLeft: '0.2rem' }}>
        {label}
      </p>
    )}
  </button>
);

Button.propTypes = {
  isLoading: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  iconName: PropTypes.string,
  btnClassName: PropTypes.string,
  btnStyle: PropTypes.object,
};
Button.defaultProps = {
  type: 'button',
  isLoading: false,
  onClick: () => {},
  btnClassName: '',
  btnStyle: null,
};

export default Button;
