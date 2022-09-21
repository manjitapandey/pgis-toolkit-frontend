import React from 'react';
import ListData from '@Components/Organizations/ListData/index';
import { checkboxData } from '@src/constants/commonData';
import AssignTable from '../AssignTable/index';

const AssignUser = () => {
  const handleSearch = () => {};
  return (
    <div className="dbd-body">
      <div className="container-fluid container-sm">
        <form className="pd-15 mt-15 mb-15">
          <div className="pm-group">
            <label className="fw-bold">Asign Users</label>
            <div className="custom-input-group">
              <span className="span-group pl-10">
                <i className="material-icons-outlined">email</i>
              </span>
              <input type="email" className="pm-control" placeholder="ST-34536" autoComplete="off" />
            </div>
            <ListData />
          </div>
          <div className="is-flex is-start is-align-start is-wrap mt-15 is-gap-15">
            <AssignTable title="Assign as" handleSearch={handleSearch} options={checkboxData} type="radio" />
            <AssignTable title="Assign to" handleSearch={handleSearch} options={checkboxData} />
          </div>
          <div className="is-flex is-center is-align-center mt-15">
            <button className="is-btn is-btn_primary" type="button">
              Assign
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssignUser;
