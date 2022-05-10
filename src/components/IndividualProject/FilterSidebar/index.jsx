import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import individualProjectAction from '@Actions/individualProject';
import Select from '@Components/common/Select/index';
import { selectOptions } from '@src/constants/commonData';
import Search from '@Components/common/Search/index';
import Text from '@Components/common/Text/index';

const FilterSidebar = ({ active }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(individualProjectAction.setActive('map'));
  };
  const handleSearch = () => {};
  const onTextChangeHandler = () => {};
  return (
    <aside
      className={
        active === 'filter' ? 'filter-sidebar pd-15 is-bg filter-sidebar_active' : 'filter-sidebar pd-15 is-bg'
      }
    >
      <div className="filter-sidebar_header">
        <a onClick={handleClick} className="is-circle is-circle_sm">
          <i className="material-icons">arrow_back</i>
        </a>
      </div>
      <div className="filter-sidebar_body is-overflow" style={{ height: '80vh' }}>
        <div className="pm-group">
          <label>Themes</label>
          <Select options={selectOptions} selected="obstacles Datasets " className="pm-select_100" />
        </div>
        <div className="pm-group">
          <label>Layers</label>
          <Select selected="Road Crash/ Accident Data" options={selectOptions} className="pm-select_100" />
        </div>
        <div className="pm-group">
          <label>attribute</label>
          <div className="pmsearch">
            <Search className="search_100" handleSearch={handleSearch} />
            <ul className="pm-list ">
              <li>
                <a href="">Id</a>
              </li>
              <li>
                <a href="">Name</a>
              </li>
              <li className="is-selected">
                <a href="">Raod Length</a>
              </li>
              <li>
                <a href="">Type of road obstacle</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pm-group">
          <ul className="mathmetic-symbols is-flex is-start is-wrap is-gap-10">
            <li className="is-active">=</li>
            <li className="">{'>'}</li>
            <li className="">{' < '}</li>
            <li className=""> {'>= '}</li>
            <li className=""> {'<= '}</li>
            <li className=""> Like </li>
            <li className="">And</li>
            <li className="">Or</li>
          </ul>
        </div>
        <div className="pm-group">
          <label>value</label>
          <div className="pmsearch">
            <Search className="search_100" handleSearch={handleSearch} />
            <ul className="pm-list ">
              <li>
                <a href="">Id</a>
              </li>
              <li>
                <a href="">Name</a>
              </li>
              <li className="is-selected">
                <a href="">Raod Length</a>
              </li>
              <li>
                <a href="">Type of road obstacle</a>
              </li>
            </ul>
          </div>
        </div>
        <Text
          label="Filter"
          placeholder="Road length=40"
          className="pm-control pm-control_white"
          name="filter"
          onChange={onTextChangeHandler}
        />
      </div>
      <div className="filter-sidebar_footer is-flex is-start is-gap-30">
        <button type="button" className="is-btn is-btn_link">
          Clear
        </button>
        <button type="button" className="is-btn is-btn_primary">
          Done
        </button>
      </div>
    </aside>
  );
};

FilterSidebar.defaultProps = {
  active: '',
};

FilterSidebar.propTypes = {
  active: PropTypes.string,
};

export default FilterSidebar;
