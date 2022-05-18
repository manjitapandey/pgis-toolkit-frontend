/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-no-useless-fragment */
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
          <Search handleSearch={handleSearch} className="search_sm" />
          <div className="is-flex is-start is-align-center is-gap-10">
            <Select
              className="pm-select_sm"
              className1="is-radius-24"
              selected="Choose"
              onClick={handleSelect}
              options={options}
            />
            <Select
              className="pm-select_sm"
              className1="is-radius-24"
              selected="Choose"
              onClick={handleSelect}
              options={options}
            />
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
                <div className="content flex-1">{row.user}</div>
              </div>
            )}
            dataHeader={
              <div className="is-flex is-start is-gap-10">
                <span>Users</span>
                <div className="pm-table_arrow">
                  <div className="updown-arrow">
                    <i className="material-icons">expand_more</i>
                  </div>
                </div>
              </div>
            }
            // headerClassName="is-active"
          />
          <TableHeader
            dataField="Phone"
            dataFormat={(row, _, index) => <p>{row.phone}</p>}
            dataHeader={
              <div className="is-flex is-start is-gap-10">
                <span>Phone</span>
                <div className="pm-table_arrow">
                  <div className="updown-arrow">
                    <i className="material-icons">unfold_more</i>
                  </div>
                </div>
              </div>
            }
            // headerClassName="table-header-align-start"
          />
          <TableHeader
            dataField="Email"
            dataFormat={(row, _, index) => <span className="is-break">{row.email}</span>}
            dataHeader={
              <div className="is-flex is-start is-gap-10">
                <span>Email</span>
                <div className="pm-table_arrow">
                  <div className="updown-arrow">
                    <i className="material-icons">unfold_more</i>
                  </div>
                </div>
              </div>
            }
            // headerClassName="table-header-align-start"
          />
          <TableHeader
            dataField="Role"
            dataFormat={(row, _, index) => <>{row.role}</>}
            dataHeader={
              <div className="is-flex is-start is-gap-10">
                <span>Role</span>
                <div className="pm-table_arrow">
                  <div className="updown-arrow">
                    <i className="material-icons">unfold_more</i>
                  </div>
                </div>
              </div>
            }
            // headerClassName="table-header-align-start"
          />
          <TableHeader dataFormat={(row, _, index) => <TableDropdown />} />
        </Table>
      </div>
    </div>
  );
};

export default UsersData;
