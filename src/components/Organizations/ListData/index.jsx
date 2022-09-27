import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const ListData = ({ options, onClick }) => {
  const dispatch = useDispatch();
  return (
    <ul className="pm-list pm-list_border is-border is-radius-4 mt-10">
      {options?.map((elem, index) => (
        <li className="is-flex is-between is-align-center is-gap-10">
          <p>{elem}</p>
          <span className="is-circle is-circle_xs is-circle_hover" onClick={() => dispatch(onClick(index))}>
            <i className="material-icons-outlined">close</i>
          </span>
        </li>
      ))}
    </ul>
  );
};
ListData.defaultProps = {
  options: [],
  onClick: () => {},
};
ListData.propTypes = {
  options: PropTypes.array,
  onClick: PropTypes.func,
};

export default ListData;
