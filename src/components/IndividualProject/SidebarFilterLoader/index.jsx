import React from 'react';

const SidebarFilterLoader = () => (
  <aside className="filter-sidebar pd-15 is-bg filter-sidebar_active">
    <div className="filter-sidebar_header">
      <a className="is-circle is-circle_sm" />
    </div>
    <div className="filter-sidebar_body is-overflow" style={{ height: '60vh' }}>
      <div className={`pm-group `}>
        <span className="skeleton-box mt-05" style={{ height: '30px', width: '50%' }} />
        <span className="skeleton-box mt-05" style={{ height: '45px', width: '100%' }} />
      </div>
      <div className="pm-group">
        <span className="skeleton-box mt-05" style={{ height: '25px', width: '30%' }} />
        <div className="options is-flex is-start is-align-center mt-10">
          <div className="options-btn" style={{ width: '33%' }}>
            <span className="skeleton-box mt-05" style={{ height: '20px', width: '100%' }} />
          </div>
          <div className="options-btn" style={{ width: '33%' }}>
            <span className="skeleton-box mt-05" style={{ height: '20px', width: '100%' }} />
          </div>
          <div className="options-btn" style={{ width: '33%' }}>
            <span className="skeleton-box mt-05" style={{ height: '20px', width: '100%' }} />
          </div>
        </div>
        <span className="skeleton-box mt-10" style={{ height: '20px', width: '100%' }} />
      </div>
      <div className="pm-group">
        <span className="skeleton-box mt-05" style={{ height: '25px', width: '30%' }} />
        <div className="options is-flex is-start is-align-center mt-10">
          <div className="options-btn" style={{ width: '33%' }}>
            <span className="skeleton-box mt-05" style={{ height: '20px', width: '100%' }} />
          </div>
          <div className="options-btn" style={{ width: '33%' }}>
            <span className="skeleton-box mt-05" style={{ height: '20px', width: '100%' }} />
          </div>
        </div>
      </div>
      <div className={`pm-group `}>
        <span className="skeleton-box mt-05" style={{ height: '22px', width: '50%' }} />
      </div>
    </div>
    <div className="filter-sidebar_footer is-flex is-start is-gap-30">
      <span className="skeleton-box mt-05" style={{ height: '40px', width: '30%' }} />
      <span className="skeleton-box mt-05" style={{ height: '40px', width: '30%' }} />
    </div>
  </aside>
);

export default SidebarFilterLoader;
