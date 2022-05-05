import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import individualProjectAction from '@Actions/individualProject';

const FilterSidebar = ({ active }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(individualProjectAction.setActive('map'));
  };
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
          <div className="pm-select pm-select_100">
            <div className="pm-select_item">
              <span>obstacles Datasets </span>
            </div>
            <ul className="pm-select_list left-dropdown">
              <li data-value="Bagmati pardesh">Bagmati Pardesh</li>
              <li data-value="Gandaki">Gandaki</li>
              <li data-value="Lumbini">Lumbini</li>
              <li data-value="Bagmati">Gandaki</li>
            </ul>
          </div>
        </div>
        <div className="pm-group">
          <label>Layers</label>
          <div className="pm-select pm-select_100">
            <div className="pm-select_item">
              <span>Road Crash/ Accident Data </span>
            </div>
            <ul className="pm-select_list left-dropdown">
              <li data-value="Bagmati pardesh">Bagmati Pardesh</li>
              <li data-value="Gandaki">Gandaki</li>
              <li data-value="Lumbini">Lumbini</li>
              <li data-value="Bagmati">Gandaki</li>
            </ul>
          </div>
        </div>
        <div className="pm-group">
          <label>attribute</label>
          <div className="pmsearch">
            <div className="search search_100">
              <div className="search-wrap">
                <span className="search-wrap_icon">
                  <i className="material-icons">search</i>
                </span>
                <input className="pm-control" type="search" autoComplete="off" placeholder="search" />
              </div>
            </div>
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
            <div className="search search_100">
              <div className="search-wrap">
                <span className="search-wrap_icon">
                  <i className="material-icons">search</i>
                </span>
                <input className="pm-control" type="search" autoComplete="off" placeholder="search" />
              </div>
            </div>
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
          <label>Filter</label>
          <input type="text" placeholder="Road length=40" className="pm-control pm-control_white" />
        </div>
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
