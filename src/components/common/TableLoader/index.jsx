import React from 'react';

const TableLoader = () => (
  <div className="pm-table pm-table_border pm-table_sticky">
    <div className="pm-table">
      <table className="table">
        <thead>
          <tr>
            <th>
              <div className="is-flex is-start is-gap-10">
                <span className="skeleton-box" style={{ height: '22px', width: '35%' }} />
              </div>
            </th>
            <th className="is-active">
              <div className="is-flex is-start is-gap-10">
                <span className="skeleton-box" style={{ height: '22px', width: '75%' }} />
              </div>
            </th>
            <th>
              <div className="is-flex is-start is-gap-10">
                <span className="skeleton-box" style={{ height: '22px', width: '75%' }} />
              </div>
            </th>
            <th>
              <div className="is-flex is-start is-gap-10">
                <span className="skeleton-box" style={{ height: '22px', width: '75%' }} />
              </div>
            </th>
            <th>
              <div className="is-flex is-start is-gap-10">
                <span className="skeleton-box" style={{ height: '22px', width: '65%' }} />
              </div>
            </th>
            <th>
              <div className="is-flex is-start is-gap-10">
                <span className="skeleton-box" style={{ height: '22px', width: '35%' }} />
              </div>
            </th>
            <th>
              <div className="is-flex is-start is-gap-10">
                <span className="skeleton-box" style={{ height: '22px', width: '75%' }} />
              </div>
            </th>
            <th>
              <div className="is-flex is-start is-gap-10">
                <span className="skeleton-box" style={{ height: '22px', width: '55%' }} />
              </div>
            </th>
            <th />
          </tr>
        </thead>
        {Array.from({ length: 5 }).map(() => (
          <tbody>
            <tr>
              <td style={{ height: '60px' }}>
                <span className="skeleton-box" style={{ height: '22px', width: '45%' }} />
              </td>
              <td>
                <span className="skeleton-box" style={{ height: '22px', width: '95%' }} />
              </td>
              <td>
                <span className="skeleton-box" style={{ height: '22px', width: '95%' }} />
              </td>
              <td>
                <span className="skeleton-box" style={{ height: '22px', width: '95%' }} />
              </td>
              <td>
                <span className="skeleton-box" style={{ height: '22px', width: '95%' }} />
              </td>
              <td>
                <span className="skeleton-box" style={{ height: '22px', width: '95%' }} />
              </td>
              <td>
                <span className="skeleton-box" style={{ height: '22px', width: '95%' }} />
              </td>
              <td>
                <span className="skeleton-box" style={{ height: '22px', width: '95%' }} />
              </td>
              <td>
                <span className="skeleton-box" style={{ height: '22px', width: '95%' }} />
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  </div>
);

export default TableLoader;
