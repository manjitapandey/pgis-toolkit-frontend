/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Table, { TableHeader } from '@Components/common/Table';
import TableDropdown from '@Components/Organizations/OrganizationsTableDropdown/index';
import CreateOrganizationPopup from '@Components/Organizations/CreateOrganizarionPopup/index';
import Search from '@Components/common/Search/index';
import { Creators } from '@Actions/organizations';

const { getOrganizationDataRequest } = Creators;

const Organizations = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [openPopup, setOpenPopup] = useState(false);
  const organizationData = useSelector((state) => state.organizations.organizationData);

  const handleRowClick = (row) => {
    history.push(`/organizations/${row.id}`);
  };

  const handleClick = () => {
    setOpenPopup(true);
  };

  const handleSearch = () => {};

  useEffect(() => {
    dispatch(getOrganizationDataRequest());
  }, []);

  return (
    <main className="mt-30 pl-30 pr-30">
      <div className="container-fluid">
        <div className="mb-15">
          <div className="is-flex is-between is-align-start is-grow">
            <h3 className="mr-15 is-trim-2">Organizations</h3>
            {/* <button
              type="button"
              className="is-btn is-btn_primary is-btn_icon"
              modal-link="create-organization"
              onClick={handleClick}
            >
              <i className="material-icons-outlined">add_circle_outline</i>
              <span>Create New</span>
  </button> */}
          </div>
          <Search className="mt-15" handleSearch={handleSearch} />
        </div>
        <CreateOrganizationPopup openPopup={openPopup} setOpenPopup={setOpenPopup} />
        <div className="dbd-body">
          <div className="container-fluid">
            <Table data={organizationData} onRowClick={handleRowClick}>
              <TableHeader
                dataField="S.N"
                dataFormat={(row, _, index) => <span>{row.id}</span>}
                dataHeader={
                  <div className="is-flex is-start is-gap-10">
                    <span>S.N</span>
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
                dataField="Organization Name"
                dataFormat={(row, _, index) => <p className="fw-bold">{row.name}</p>}
                dataHeader={
                  <div className="is-flex is-start is-gap-10">
                    <span>Organization name</span>
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
                dataField="Admin"
                dataFormat={(row, _, index) => <span className="is-break">{row.email}</span>}
                dataHeader={
                  <div className="is-flex is-start is-gap-10">
                    <span>Admin</span>
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
                dataField="Projects"
                dataFormat={(row, _, index) => <>{row.projects}</>}
                dataHeader={
                  <div className="is-flex is-start is-gap-10">
                    <span>Projects</span>
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
                dataFormat={(row, _, index) => (
                  <div
                    className="is-flex is-end"
                    onClick={(event) => {
                      event.stopPropagation();
                    }}
                  >
                    {/* <TableDropdown /> */}
                  </div>
                )}
              />
            </Table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Organizations;
