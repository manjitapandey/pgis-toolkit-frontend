/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import Table, { TableHeader } from '@Components/common/Table';
import { userTableData } from '@src/constants/commonData';
import Search from '@Components/common/Search/index';
import Select from '@Components/common/Select/index';
import image from '@Assets/images/admin/profile.jpg';
import TableDropdown from './Dropdown';

const options = ['Bagmati Pradesh', 'Gandaki', 'Lumbini'];

const UsersData = () => {
  const handleSearch = () => {};
  const handleSelect = () => {};
  return (
    <div className="dbd-body">
      <div className="container-fluid">
        <div className="is-flex is-start is-align-center is-gap-15 mt-15 mb-15">
          <Search handleSearch={handleSearch} />
          <div className="is-flex is-start is-align-center is-gap-10">
            <Select className1="is-radius-24" selected="Choose" onClick={handleSelect} options={options} />
            <Select className1="is-radius-24" selected="Choose" onClick={handleSelect} options={options} />
          </div>
        </div>
        <Table data={userTableData}>
          <TableHeader
            dataField="User"
            dataFormat={(row, _, index) => (
              <div className="is-flex is-start is-align-center is-wrap">
                <figure className="is-circle is-circle_xs is-circle_img mr-10">
                  <img src={image} alt="" />
                </figure>
                <span>{row.user}</span>
              </div>
            )}
            // headerClassName="table-header-align-start"
          />
          <TableHeader
            dataField="Phone"
            dataFormat={(row, _, index) => <span>{row.phone}</span>}
            // headerClassName="table-header-align-start"
          />
          <TableHeader
            dataField="Email"
            dataFormat={(row, _, index) => <span>{row.email}</span>}
            // headerClassName="table-header-align-start"
          />
          <TableHeader
            dataField="Role"
            dataFormat={(row, _, index) => <span>{row.role}</span>}
            // headerClassName="table-header-align-start"
          />
          <TableHeader dataFormat={(row, _, index) => <TableDropdown />} />
        </Table>
      </div>
    </div>
  );
};

export default UsersData;
