import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Accordion = ({
  collapsed,
  description,
  header,
  body,
  ClassName,
  onHeaderClick,
  headerClassName,
  handleButtonClick,
  h4Header,
}) => {
  const [collapse, setCollapse] = useState(null);

  useEffect(() => {
    setCollapse(collapsed);
  }, [collapsed]);

  const handleToggle = () => {
    setCollapse((prevState) => !prevState);
    onHeaderClick();
  };

  return (
    <div className={`acc-list ${collapse ? '' : 'acc-list_active'}`} key={`${body}${header}`}>
      <div className="acc-list_header " onClick={handleToggle} onKeyDown={handleToggle} role="button" tabIndex={0}>
        {header && (
          <div className="is-flex is-between is-gap-10">
            {header}
            <button
              type="button"
              className="is-btn is-btn_icon is-btn_link is-btn_sm"
              modal-link="add-layer"
              onClick={handleButtonClick}
            >
              <i className="material-icons">add_circle_outline</i>
              <span>add</span>
            </button>
          </div>
        )}
        {h4Header && <h4 className="is-grow">{h4Header}</h4>}
        {description && <p className="mt-05">{description}</p>}
      </div>
      {!collapse && <div className="acc-list_body">{body}</div>}
    </div>
  );
};

Accordion.defaultProps = {
  collapsed: false,
  ClassName: '',
  headerClassName: '',
  onHeaderClick: () => {},
  handleButtonClick: () => {},
  description: '',
  h4Header: '',
};

Accordion.propTypes = {
  collapsed: PropTypes.bool,
  ClassName: PropTypes.string,
  headerClassName: PropTypes.string,
  header: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  onHeaderClick: PropTypes.func,
  handleButtonClick: PropTypes.func,
  description: PropTypes.string,
  h4Header: PropTypes.string,
};

export default Accordion;
