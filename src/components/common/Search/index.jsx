import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ handleSearch, children, className, value, insideWrap, color, name }) => (
  // console.log(value, 'searchValue');
  <div className={`search ${className}`}>
    <div className="search-wrap">
      <span className="search-wrap_icon">
        <i className="material-icons-outlined">search</i>
      </span>
      <input
        className="pm-control"
        placeholder="search"
        value={value}
        onChange={(event) => {
          handleSearch(event);
        }}
        name={name}
        style={{ color }}
      />
      {insideWrap && children}
    </div>
    {!insideWrap && children}
  </div>
);
Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  value: PropTypes.string,
  insideWrap: PropTypes.bool,
  color: PropTypes.string,
  name: PropTypes.string,
};

Search.defaultProps = {
  children: null,
  className: '',
  value: '',
  insideWrap: false,
  color: 'black',
  name: '',
};

export default Search;
