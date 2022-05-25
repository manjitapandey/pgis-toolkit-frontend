import React from 'react';

const CardLoader = () => (
  <>
    {Array.from({ length: 2 }).map(() => (
      <div className="project-list_item project-list_item-active is-flex is-between is-align-start  pd-15">
        <div className="flex-content is-grow mr-15">
          <span className="skeleton-box" style={{ height: '25px', width: '80%' }} />
          <br />
          <span className="skeleton-box mt-05" style={{ height: '25px', width: '50%' }} />
        </div>
        <span className="skeleton-box" style={{ height: '25px', width: '1%' }} />
      </div>
    ))}
  </>
);

export default CardLoader;
