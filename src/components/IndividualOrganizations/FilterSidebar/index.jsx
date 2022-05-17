import React from 'react';
import Select from '@Components/common/Select/index';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import individualActions from '@Actions/individualOrganization';
import { selectOptions } from '@src/constants/commonData';

const FilterSidebar = ({ active }) => {
  const dispatch = useDispatch();
  const handleSelect = () => {};

  const handleClick = () => {
    dispatch(individualActions.setActive('map'));
  };
  return (
    <aside
      className={
        active === 'filter' ? 'filter-sidebar pd-15 is-bg filter-sidebar_active' : 'filter-sidebar pd-15 is-bg'
      }
    >
      <div className="filter-sidebar_header">
        <a className="is-circle is-circle_sm" onClick={handleClick}>
          <i className="material-icons">arrow_back</i>
        </a>
      </div>
      <div className="filter-sidebar_body is-overflow" style={{ height: '60vh' }}>
        <div className="pm-group">
          <label className="is-capitalize">Layer</label>
          <Select selected="Choose" onClick={handleSelect} options={selectOptions} className="pm-select_100" />
        </div>
        <div className="pm-group">
          <label className="is-capitalize">Attribute</label>
          <Select selected="Choose" onClick={handleSelect} options={selectOptions} className="pm-select_100" />
        </div>
        <div className="pm-group">
          <label className="is-capitalize">Standard</label>
          <Select selected="Choose" onClick={handleSelect} options={selectOptions} className="pm-select_100" />
        </div>
        <div className="pm-group">
          <label>Custom</label>
          <div className="is-bg-white is-border is-radius-4 pd-15 customicon-list">
            <ul className="is-flex is-start is-align-center is-wrap is-gap-5">
              <li className="is-active is-circle is-circle_sm is-column">
                <i className="material-icons">report_problem</i>
              </li>
              <li className="is-circle is-circle_sm is-column">
                <i className="material-icons">pets</i>
              </li>
              <li className="is-circle is-circle_sm is-column">
                <i className="material-icons">edit_road</i>
              </li>
              <li className="is-circle is-circle_sm" />
              <li className="is-circle is-circle_sm is-column">
                <i className="material-icons">traffic</i>
              </li>
              <li className="is-circle is-circle_sm" />
              <li className="is-circle is-circle_sm" />
              <li className="is-circle is-circle_sm" />
            </ul>
            <div className="mt-15">
              <a className="is-btn is-btn_link">
                <span>custom color</span>
              </a>
            </div>
          </div>
        </div>
        <div className="pm-group">
          <label>Default Color </label>
          <div className="color-list">
            <ul className="is-flex is-start is-align-center is-wrap is-gap-10 ">
              <li style={{ backgroundColor: '#71269C' }} className="is-active" />
              <li style={{ backgroundColor: '#333F99' }} />
              <li style={{ backgroundColor: '#1876D3' }} />
              <li style={{ backgroundColor: '#05786A' }} />
              <li style={{ backgroundColor: '#388E3C' }} />
              <li style={{ backgroundColor: '#F7CE8B' }} />
              <li style={{ backgroundColor: '#FAC02B' }} />
              <li style={{ backgroundColor: '#F47D06' }} />
            </ul>
            <div className="mt-15">
              <a className="is-btn is-btn_link">
                <span>custom color</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="filter-sidebar_footer is-flex is-start is-gap-30">
        <button className="is-btn is-btn_link" type="button">
          Clear
        </button>
        <button className="is-btn is-btn_primary" type="button">
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
