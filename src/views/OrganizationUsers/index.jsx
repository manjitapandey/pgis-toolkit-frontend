/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Creators } from '@Actions/users';
import CreateUserPopup from '@Components/OrganizationUsers/CreateUserPopup/index';
import UserTable from '@Components/OrganizationUsers/UserTable/index';
import Button from '@Components/common/Button/index';
import AssignUser from '@Components/OrganizationUsers/AssignUser/index';

const { getOrganizationDataRequest, openUserPopup } = Creators;
const OrganizationsUsers = () => {
  const [activeTab, setActiveTab] = useState('users');
  const dispatch = useDispatch();
  const organizationData = useSelector((state) => state.users.organizationData);
  const handleButtonClick = () => {
    dispatch(openUserPopup({ popup: true, type: 'add' }));
  };

  useEffect(() => {
    dispatch(getOrganizationDataRequest());
  }, []);
  return (
    <main className="mt-15 pl-30 pr-30">
      <div className="container-fluid">
        <div className="mb-10">
          <div className="is-flex is-between is-align-start is-grow">
            <h3 className="mr-15 is-trim-2">Users</h3>
            <Button label="Create New" iconName="add_circle_outline" onClick={handleButtonClick} />
          </div>
        </div>
        <CreateUserPopup />
        <ul className="pm-tab pm-tab_border pm-tab_btm-border">
          <li>
            <a onClick={() => setActiveTab('users')} className={activeTab === 'users' ? 'is-active' : ''}>
              users
            </a>
          </li>
          <li>
            <a onClick={() => setActiveTab('assign')} className={activeTab === 'assign' ? 'is-active' : ''}>
              assign users
            </a>
          </li>
        </ul>
        {activeTab === 'users' && <UserTable organizationData={organizationData} />}
        {activeTab === 'assign' && <AssignUser />}
      </div>
    </main>
  );
};

export default OrganizationsUsers;
