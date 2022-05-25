import React from 'react';

const CustomInputLoader = () => (
  <>
    {Array.from({ length: 2 }).map(() => (
      <div className="acc-list">
        <div className="">
          <div className="is-flex is-between is-gap-10">
            <span className="skeleton-box" style={{ height: '28px', width: '50%' }} />
            <span className="skeleton-box " style={{ height: '25px', width: '20%' }} />
          </div>
        </div>
        <li className="" style={{ marginTop: '8px' }}>
          <div className="is-flex is-between is-align-start is-gap-10">
            <span className="skeleton-box" style={{ height: '25px', width: '45%' }} />
            <span className="skeleton-box" style={{ height: '25px', width: '20%' }} />
            <span className="skeleton-box" style={{ height: '25px', width: '6%' }} />
            <span className="skeleton-box" style={{ height: '25px', width: '1%' }} />
          </div>
          <ul className="is-list" style={{ marginTop: '8px', marginLeft: '9px' }}>
            {Array.from({ length: 3 }).map(() => (
              <li className="is-flex is-between is-align-start is-gap-10" style={{ marginTop: '8px' }}>
                <span className="skeleton-box" style={{ height: '25px', width: '44%' }} />
                <span className="skeleton-box" style={{ height: '25px', width: '20%' }} />
                <span className="skeleton-box" style={{ height: '25px', width: '6%' }} />
                <span className="skeleton-box" style={{ height: '25px', width: '1%' }} />
              </li>
            ))}
          </ul>
        </li>
      </div>
    ))}
  </>
);

export default CustomInputLoader;
