/* eslint-disable react/no-unstable-nested-components */

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Search from '@Components/common/Search/index';
import { tableHeaderData } from '@src/constants/commonData';
import { Creators } from '@Actions/users';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const { getOrganizationUsersDataRequest } = Creators;

const UserTable = ({ organizationData }) => {
  const dispatch = useDispatch();
  const handleClick = (data) => {
    dispatch(getOrganizationUsersDataRequest({ organization: data?.id }));
  };
  return (
    <div className="dbd-body">
      <div className="container-fluid">
        <div className="is-flex is-start is-align-center is-gap-15 mt-15 mb-15">
          <Search />
        </div>
        <div className="pm-table pm-table_border">
          <table className="table mb-0">
            <thead>
              <tr>
                {tableHeaderData.map((item) => (
                  <TableHeader label={item} />
                ))}
                <th />
              </tr>
            </thead>
            <tbody>
              {organizationData?.map((elem) => (
                <TableBody label={elem?.name} options={elem?.options} handleClick={() => handleClick(elem)} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

UserTable.propTypes = {
  organizationData: PropTypes.array.isRequired,
};

export default UserTable;
