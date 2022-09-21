/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Creators, Types as OrganizationTypes } from '@Actions/organizations';
import { Creators as PopupCreator } from '@Actions/popup';
import { checkIfLoading } from '@Utils/loaderSelector';
import CreateOrganizationPopup from '@Components/Organizations/CreateOrganizarionPopup/index';
import Search from '@Components/common/Search/index';
import OrganizationTable from '@Components/Organizations/OrganizationTable/index';
import Loader from '@Components/common/Loader/index';

const { getOrganizationDataRequest } = Creators;
const { openPopup, setPopupType } = PopupCreator;

const Organizations = () => {
  const dispatch = useDispatch();
  const permissionList = useSelector((state) => state.permission.permissionList);
  const popup = useSelector((state) => state.popup.popup);
  const popupType = useSelector((state) => state.popup.popupType);
  const orgId = useSelector((state) => state.organizations.orgId);

  const isTableLoading = useSelector((state) => checkIfLoading(state, OrganizationTypes.GET_ORGANIZATION_DATA_REQUEST));

  const handleClick = () => {
    dispatch(openPopup(true));
    dispatch(setPopupType('Add'));
  };

  const handleSearch = () => {};

  useEffect(() => {
    dispatch(getOrganizationDataRequest({ limit: 5 }));
  }, []);

  useEffect(() => {
    if (orgId) {
      dispatch(getOrganizationDataRequest({ limit: 5 }));
    }
  }, [orgId]);

  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <main className="mt-30 pl-30 pr-30">
      <div className="container-fluid">
        <div className="mb-15">
          <div className="is-flex is-between is-align-start is-grow">
            <h3 className="mr-15 is-trim-2">Organizations</h3>
            {permissionList?.includes('add_organization') && (
              <button
                type="button"
                className="is-btn is-btn_primary is-btn_icon"
                modal-link="create-organization"
                onClick={handleClick}
              >
                <i className="material-icons-outlined">add_circle_outline</i>
                <span>Create New</span>
              </button>
            )}
          </div>
          <Search className="mt-15 search_sm " handleSearch={handleSearch} />
        </div>
        <CreateOrganizationPopup openPopup={popup} setOpenPopup={openPopup} popupType={popupType} />
        <OrganizationTable permissionList={permissionList} isLoading={isTableLoading} />
      </div>
    </main>
  );
};

export default Organizations;
