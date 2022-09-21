/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import PropTypes from 'prop-types';
import Search from '@Components/common/Search/index';
import Checkbox from '@Components/common/Checkbox/index';

const AssignTable = ({ title, handleSearch, options, onChange, childOptions, onChangeChild, type }) => (
  <div className="pm-group flex-1">
    <label className="fw-bold is-capitalise">{title}</label>
    <Search className="search_100 mb-05 search_sm" handleSearch={handleSearch} />
    <ul className="is-list is-border is-radius-6 pd-15">
      {options?.map((elem) => (
        <li>
          <Checkbox onChange={onChange} label={elem.name} name={elem.name} id={elem.id} spanClassname="" type={type} />
          {childOptions.length ? (
            <ul className="is-list pl-30">
              {childOptions.map((item) => (
                <li>
                  <Checkbox onChange={onChangeChild} label={item.name} name={item.name} id={item.id} spanClassname="" />
                </li>
              ))}
            </ul>
          ) : (
            <></>
          )}
        </li>
      ))}
    </ul>
  </div>
);

AssignTable.defaultProps = {
  options: [],
  childOptions: [],
  onChange: () => {},
  onChangeChild: () => {},
  type: 'checkbox',
};

AssignTable.propTypes = {
  title: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  options: PropTypes.array,
  childOptions: PropTypes.array,
  onChange: PropTypes.func,
  onChangeChild: PropTypes.func,
  type: PropTypes.string,
};

export default AssignTable;
