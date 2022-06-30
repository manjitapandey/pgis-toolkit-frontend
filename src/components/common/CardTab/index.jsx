/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

const CardTab = ({ id, heading, description, selected, setSelectedCard }) => {
  const handleClick = () => {
    setSelectedCard(id);
  };
  return (
    <li className={selected ? 'is-border pd-15 is-active' : 'is-border pd-15'} onClick={handleClick}>
      <div className="tab-header">
        <h4>{heading}</h4>
      </div>
      <div className="tab-body mt-05 fs-lg">
        <p>{description}</p>
      </div>
    </li>
  );
};

CardTab.propTypes = {
  id: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  setSelectedCard: PropTypes.func.isRequired,
};

export default CardTab;
