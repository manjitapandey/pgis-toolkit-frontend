import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = ({ label }) => (
  <th>
    <div className="is-flex is-start is-gap-10">
      <span>{label}</span>
      <div className="pm-table_arrow">
        <div className="updown-arrow">
          <i className="material-icons">unfold_more</i>
        </div>
      </div>
    </div>
  </th>
);

TableHeader.propTypes = {
  label: PropTypes.string.isRequired,
};

export default TableHeader;
