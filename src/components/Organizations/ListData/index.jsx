import React from 'react';
import PropTypes from 'prop-types';

const ListData = ({ options, onCLick }) => (
  <ul className="pm-list pm-list_border is-border is-radius-4 mt-10">
    {options.map((elem) => (
      <li className="is-flex is-between is-align-center is-gap-10">
        <p>{elem?.email}</p>
        <span className="is-circle is-circle_xs is-circle_hover" onClick={onCLick}>
          <i className="material-icons-outlined">close</i>
        </span>
      </li>
    ))}
  </ul>
);

ListData.propTypes = {
  options: PropTypes.array.isRequired,
  onCLick: PropTypes.func.isRequired,
};

export default ListData;
