/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Creators } from '@Actions/organizations';
import { Creators as PopupCreator } from '@Actions/popup';
import { Creators as PaginationCreators } from '@Actions/pagination';
import Table, { TableHeader } from '@Components/common/Table';
import TableDropdown from '@Components/Organizations/OrganizationsTableDropdown/index';
import Pagination from '@Components/common/Pagination/index';
import { paginationOptions } from '@src/constants/commonData';
import TableLoader from '@Components/common/TableLoader/index';

const { setOrgData, getOrganizationDataRequest } = Creators;
const { openPopup, setPopupType } = PopupCreator;
const { getCurrentPage } = PaginationCreators;

const OrganizationTable = ({ permissionList, isLoading }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(5);
  const organizationData = useSelector((state) => state.organizations.organizationData);
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const totalPage = Math.ceil(+organizationData?.counts / +selected);
  const handleRowClick = (row) => {
    history.push(`/organizations/${row.id}`);
  };
  const handleDelete = (orgId, orgName) => {
    dispatch(openPopup(true));
    dispatch(setPopupType('Delete'));
    dispatch(setOrgData({ name: orgName, id: orgId }));
  };

  const prevPage = () => {
    if (currentPage > 1) dispatch(getCurrentPage(+currentPage - 1));
    dispatch(getOrganizationDataRequest({ limit: selected, page: +currentPage - 1 }));
  };

  const nextPage = () => {
    if (currentPage < totalPage) dispatch(getCurrentPage(+currentPage + 1));
    dispatch(getOrganizationDataRequest({ limit: selected, page: +currentPage + 1 }));
  };

  const jumpTo = (val) => {};

  useEffect(() => {
    dispatch(getOrganizationDataRequest({ limit: selected, page: +currentPage }));
  }, [selected]);

  return (
    <div className="dbd-body">
      <div className="container-fluid">
        {isLoading || !organizationData ? (
          <TableLoader />
        ) : (
          <>
            <Table data={organizationData?.results} onRowClick={handleRowClick}>
              <TableHeader
                dataField="S.N"
                dataFormat={(row, _, index) => <span>{index + 1}</span>}
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
                    {permissionList?.includes('delete_organization') && (
                      <TableDropdown handleDelete={handleDelete} data={row} />
                    )}
                  </div>
                )}
              />
            </Table>
            <Pagination
              nextPage={nextPage}
              previousPage={prevPage}
              currentPage={currentPage}
              rowPerPage={paginationOptions}
              jumpTo={jumpTo}
              paginatedCounts={`${currentPage * selected - (selected - 1)}-${
                currentPage * selected > organizationData?.counts ? organizationData?.counts : currentPage * selected
              }`}
              paginatedCountsTotal={organizationData?.counts}
              selected={selected}
              onClick={setSelected}
              totalPage={totalPage}
            />
          </>
        )}
      </div>
    </div>
  );
};

OrganizationTable.propTypes = {
  permissionList: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default OrganizationTable;
