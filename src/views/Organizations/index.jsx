/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Table, { TableHeader } from '@Components/common/Table';
import TableDropdown from '@Components/Organizations/OrganizationsTableDropdown/index';
import { tableData } from '@src/constants/commonData';
import OrganizationPopup from '@Components/Organizations/OrganizarionPopup/indes';
import Search from '@Components/common/Search/index';

const Organizations = () => {
  const history = useHistory();
  const [openPopup, setOpenPopup] = useState(false);

  const handleRowClick = (row) => {
    history.push(`/organizations/${row.id}`);
  };

  const handleClick = () => {
    setOpenPopup(true);
  };

  const handleSearch = () => {};

  return (
    <main className="mt-30">
      <div className="container-fluid">
        <div className="mb-15">
          <div className="is-flex is-between is-align-start is-grow">
            <h3 className="mr-15 is-trim-2">Organizations</h3>
            <button
              type="button"
              className="is-btn is-btn_primary is-btn_icon"
              modal-link="create-organization"
              onClick={handleClick}
            >
              <i className="material-icons">add_circle_outline</i>
              <span>Create New</span>
            </button>
          </div>
          <Search className="mt-15" handleSearch={handleSearch} />
        </div>
        <OrganizationPopup openPopup={openPopup} setOpenPopup={setOpenPopup} />
        <div className="dbd-body">
          <div className="container-fluid">
            <Table data={tableData} onRowClick={handleRowClick}>
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
                dataFormat={(row, _, index) => <span className="is-break">{row.admin}</span>}
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
              <TableHeader dataFormat={(row, _, index) => <TableDropdown />} />
            </Table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Organizations;
