import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ activeTab, options, setTab }) => (
  <ul className="pm-tab pm-tab_border pm-tab_btm-border">
    {options.map(({ id, name }) => (
      <li key={`${id}${name}`}>
        <a className={activeTab === name ? 'is-active' : ''} onClick={() => setTab(`${name}`)}>
          {name}
        </a>
      </li>
    ))}
  </ul>
);

Tab.defaultProps = {
  setTab: () => {},
  activeTab: '',
  options: [],
};

Tab.propTypes = {
  activeTab: PropTypes.string,
  options: PropTypes.object,
  setTab: PropTypes.func,
};

export default Tab;
