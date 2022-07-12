/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Popup from '@Components/common/Popup/index';
import { Creators } from '@Actions/individualProject';
import { Creators as PaginationCreators } from '@Actions/pagination';
import Search from '@Components/common/Search/index';
import Table, { TableHeader } from '@Components/common/Table';
import PropTypes from 'prop-types';
import useDebouncedInput from '@Hooks/useDebouncedInput';
import TableLoader from '@Components/common/TableLoader/index';
import Pagination from '@Components/common/Pagination/index';
import { paginationOptions } from '@src/constants/commonData';

const { openDetailPopup, clearDetailData, getFeatureCollectionRequest } = Creators;
const { getCurrentPage } = PaginationCreators;

const DetailDataPopup = ({ isLoading }) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(5);
  const popup = useSelector((state) => state.detailPopup.detailPopup);
  const layerName = useSelector((state) => state.detailPopup.layerName);
  const layerId = useSelector((state) => state.detailPopup.layerId);
  const featureCollection = useSelector((state) => state.detailPopup.featureCollection);
  const headerData = useSelector((state) => state.detailPopup.headerData);
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const totalPage = Math.ceil(+featureCollection?.counts / +selected);
  const [search, handleSearch] = useDebouncedInput({
    ms: 200,
    init: '',
    onChange: (e) => {
      const { value, name } = e.target;
      // dispatch(dataActions.setSearchData(value));
      dispatch(getFeatureCollectionRequest({ layer_id: +name, limit: selected, search: value }));
    },
  });

  const handleCloseClick = () => {
    dispatch(openDetailPopup(false));
    dispatch(clearDetailData());
  };

  const prevPage = () => {
    if (currentPage > 1) dispatch(getCurrentPage(+currentPage - 1));
    dispatch(getFeatureCollectionRequest({ layer_id: +layerId, limit: selected, page: +currentPage - 1 }));
  };

  const nextPage = () => {
    if (currentPage < totalPage) dispatch(getCurrentPage(+currentPage + 1));
    dispatch(getFeatureCollectionRequest({ layer_id: +layerId, limit: selected, page: +currentPage + 1 }));
  };

  const jumpTo = (val) => {};

  useEffect(() => {
    dispatch(getFeatureCollectionRequest({ layer_id: +layerId, limit: selected, page: +currentPage }));
  }, [selected]);
  return (
    <Popup
      tagId="explore"
      className="pm-modal_cntr_xxl"
      header={layerName}
      popup={popup}
      handleCloseClick={handleCloseClick}
      body={
        <>
          <div className="is-flex is-start is-align-center is-gap-15 mt-15 mb-15">
            <Search handleSearch={handleSearch} value={search} name={layerId} />
          </div>
          {isLoading || !featureCollection ? (
            <TableLoader />
          ) : (
            <>
              <Table data={featureCollection?.results}>
                {headerData &&
                  headerData?.map((elem) => (
                    <TableHeader
                      dataField={elem}
                      dataFormat={(row, _, index) => <p>{row[elem]}</p>}
                      dataHeader={
                        <div className="is-flex is-start is-gap-10">
                          <span>{elem}</span>
                          <div className="pm-table_arrow">
                            <div className="updown-arrow">
                              <i className="material-icons">unfold_more</i>
                            </div>
                          </div>
                        </div>
                      }
                    />
                  ))}
                {/* <TableHeader dataFormat={(row, _, index) => <TableDropdown />} /> */}
              </Table>
              <Pagination
                nextPage={nextPage}
                previousPage={prevPage}
                currentPage={currentPage}
                rowPerPage={paginationOptions}
                jumpTo={jumpTo}
                paginatedCounts={`${currentPage * selected - (selected - 1)}-${
                  currentPage * selected > featureCollection?.counts
                    ? featureCollection?.counts
                    : currentPage * selected
                }`}
                paginatedCountsTotal={featureCollection?.counts}
                selected={selected}
                onClick={setSelected}
                totalPage={totalPage}
              />
            </>
          )}
        </>
      }
    />
  );
};

DetailDataPopup.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default DetailDataPopup;
