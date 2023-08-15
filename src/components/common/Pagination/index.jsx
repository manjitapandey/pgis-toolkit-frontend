/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Creators } from '@Actions/pagination';
import DropdownSelect from '../DropdownSelect/index';

const { getCurrentPage } = Creators;

export default function Pagination({
  rowPerPage,
  setRowPerPage,
  paginatedCounts,
  paginatedCountsTotal,
  nextPage,
  previousPage,
  currentPage,
  jumpTo,
  onClick,
  selected,
  totalPage,
}) {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const { value } = event.target;
    dispatch(getCurrentPage(value));
    jumpTo(value);
  };
  return (
    <div className="table-pagination is-flex is-between mt-30">
      <div className="paging-left is-flex is-start">
        <span className="row-text">Row per page</span>
        <DropdownSelect options={rowPerPage} onClick={onClick} selected={selected} />
      </div>
      <div className="paging-right is-flex is-end">
        <p className="is-flex is-start row-count">
          <span className="show-row">{paginatedCounts}</span>
          <span>of</span>
          <span className="total-row">{paginatedCountsTotal}</span>
        </p>
        <p className="is-flex is-start next-prev">
          <span
            className="prev"
            tabIndex={0}
            style={{ outline: 0 }}
            role="button"
            onKeyPress={() => previousPage()}
            onClick={() => previousPage()}
          >
            <i className="material-icons">chevron_left</i>
          </span>
          <span className="next" tabIndex={0} role="button" onKeyPress={() => nextPage()} onClick={() => nextPage()}>
            <i className="material-icons">chevron_right</i>
          </span>
        </p>
        <p className="is-flex is-end jumps">
          <span>Jumps to</span>
          <input
            type="number"
            className="form-control"
            value={currentPage}
            onChange={handleChange}
            max={totalPage}
            min="1"
          />
        </p>
      </div>
    </div>
  );
}

Pagination.propTypes = {
  rowPerPage: PropTypes.object,
  setRowPerPage: PropTypes.func,
  paginatedCounts: PropTypes.number,
  paginatedCountsTotal: PropTypes.number,
  nextPage: PropTypes.func,
  previousPage: PropTypes.func,
  currentPage: PropTypes.number,
  jumpTo: PropTypes.func,
  onClick: PropTypes.func,
  selected: PropTypes.string,
  totalPage: PropTypes.number,
};

Pagination.defaultProps = {
  rowPerPage: [],
  setRowPerPage: () => {},
  paginatedCounts: null,
  paginatedCountsTotal: null,
  nextPage: () => {},
  previousPage: () => {},
  currentPage: 1,
  jumpTo: () => {},
  onClick: () => {},
  selected: '',
  totalPage: null,
};
