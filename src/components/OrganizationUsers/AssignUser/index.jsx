/* eslint-disable prefer-regex-literals */
/* eslint-disable no-control-regex */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import ListData from '@Components/Organizations/ListData/index';
import { checkboxData } from '@src/constants/commonData';
import { Creators } from '@Actions/users';
import { useDispatch, useSelector } from 'react-redux';
import AssignTable from '../AssignTable/index';

const {
  getEmailList,
  setAddAssignData,
  filterEmailList,
  getUserGroupListRequest,
  getSelectedData,
  getIndividualOrganizationDataRequest,
  clearOrganizationList,
  getSelectedOrganization,
  getSelectedProject,
  postAssignUserDataRequest,
} = Creators;

const AssignUser = () => {
  const dispatch = useDispatch();
  const [validMail, setValidMail] = useState(false);
  const emailList = useSelector((state) => state.users.emailList);
  const addAssignData = useSelector((state) => state.users.addAssignData);
  const groupList = useSelector((state) => state.users.groupList);
  const individualOrganizationData = useSelector((state) => state.users.individualOrganizationData);
  const finalData = useSelector((state) => state.users.finalData);
  const finalGroupData = useSelector((state) => state.users.finalGroupData);
  console.log(finalData, finalGroupData, 'datas');
  const regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])",
  );
  const { email } = addAssignData;

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setValidMail(regex.test(value));
    }
    dispatch(setAddAssignData({ name, value }));
  };

  const handleCheckboxChange = (event) => {
    const { name, checked, id } = event.target;
    if (name === 'PGIS_WEB_APP_ADMINISTRATOR') dispatch(clearOrganizationList());
    if (name === 'ORGANIZATION_ADMIN') {
      dispatch(getIndividualOrganizationDataRequest({ organization: id, name: 'ORGANIZATION_ADMIN' }));
    }
    if (name === 'DATA_COLLECTOR' || name === 'PROJECT_MANAGER') {
      dispatch(getIndividualOrganizationDataRequest({ organization: id, name: 'OTHER' }));
    }
    dispatch(getSelectedData(id));
  };

  const handleCheckboxChange1 = (event) => {
    const { name, checked, id } = event.target;
    dispatch(getSelectedOrganization({ name, id }));
  };
  const handleChildCheckBoxChange = (event, orgName, orgId) => {
    const { name, checked, id } = event.target;
    dispatch(getSelectedProject({ name, id, orgName, orgId }));
  };

  const handleSearch = () => {};
  const handleAddClick = () => {
    if (validMail) {
      dispatch(getEmailList([...emailList, email]));
      dispatch(setAddAssignData({ name: 'email', value: '' }));
    }
  };

  const handlAssignClick = () => {
    dispatch(
      postAssignUserDataRequest({
        finalData: {
          group: finalGroupData?.id,
          organization: finalData?.id,
          project: finalData?.options || null,
          email: emailList,
        },
      }),
    );
  };

  useEffect(() => {
    dispatch(getUserGroupListRequest());
  }, []);
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
              <input
                type="email"
                className="pm-control"
                placeholder="ST-34536"
                autoComplete="off"
                name="email"
                onChange={handleChange}
              />
              <div className="is-circle is-circle_xs is-circle_hover" onClick={handleAddClick}>
                <i className="material-icons-outlined">add_circle_outline</i>
              </div>
            </div>
            {emailList?.length ? <ListData options={emailList} onClick={filterEmailList} /> : <></>}
          </div>
          <div className="is-flex is-start is-align-start is-wrap mt-15 is-gap-15">
            <AssignTable
              title="Assign as"
              handleSearch={handleSearch}
              options={groupList}
              type="radio"
              onChange={handleCheckboxChange}
            />
            <AssignTable
              title="Assign to"
              handleSearch={handleSearch}
              options={individualOrganizationData}
              onChange={handleCheckboxChange1}
              onChangeChild={handleChildCheckBoxChange}
              type="radio"
            />
          </div>
          <div className="is-flex is-center is-align-center mt-15">
            <button
              className={
                !emailList.length || !finalData || !finalGroupData
                  ? 'is-btn is-btn_primary is-disable'
                  : 'is-btn is-btn_primary'
              }
              type="button"
              onClick={handlAssignClick}
            >
              Assign
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssignUser;
