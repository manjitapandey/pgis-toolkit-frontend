import React from 'react';
import PropTypes from 'prop-types';
import Search from '../Search/index';

const Sidebar = ({ handleSearch, handleClick, children, buttonTitle, onButtonClick }) => (
  <aside className="dbd-map_sidebar pd-15">
    <div className="dbd-sidebar_header">
      <Search className="search_100" handleSearch={handleSearch} />
      <div className="is-flex is-between is-align-center is-gap-15 mb-15 mt-15">
        <button className="is-btn is-btn_link is-btn_icon is-btn_sm is-btn_filter" type="button" onClick={handleClick}>
          <i className="material-icons">tune</i>
          <span>Filters</span>
        </button>
        <a className="is-btn is-btn_primary is-btn_sm is-btn_icon" modal-link="create-project" onClick={onButtonClick}>
          <i className="material-icons">add_circle_outline</i>
          {buttonTitle}
        </a>
      </div>
    </div>
    {children}
  </aside>
);

Sidebar.propTypes = {
  handleSearch: PropTypes.func,
  handleClick: PropTypes.func,
  onButtonClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  buttonTitle: PropTypes.string,
};

Sidebar.defaultProps = {
  handleSearch: () => {},
  handleClick: () => {},
  onButtonClick: () => {},
  buttonTitle: '',
};

export default Sidebar;
