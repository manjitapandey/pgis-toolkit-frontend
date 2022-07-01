/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Popup from '@Components/common/Popup/index';
import { Creators } from '@Actions/individualProject';
import Search from '@Components/common/Search/index';
import Table, { TableHeader } from '@Components/common/Table';
import PropTypes from 'prop-types';
import useDebouncedInput from '@Hooks/useDebouncedInput';
import TableLoader from '@Components/common/TableLoader/index';

const { openDetailPopup, clearDetailData, getFeatureCollectionRequest } = Creators;

const DetailDataPopup = ({ isLoading }) => {
  const dispatch = useDispatch();
  const popup = useSelector((state) => state.detailPopup.detailPopup);
  const layerName = useSelector((state) => state.detailPopup.layerName);
  const layerId = useSelector((state) => state.detailPopup.layerId);
  const featureCollection = useSelector((state) => state.detailPopup.featureCollection);
  const headerData = useSelector((state) => state.detailPopup.headerData);

  const [search, handleSearch] = useDebouncedInput({
    ms: 200,
    init: '',
    onChange: (e) => {
      const { value } = e.target;
      // dispatch(dataActions.setSearchData(value));
      dispatch(getFeatureCollectionRequest({ layer_id: layerId, limit: 5, search: value }));
    },
  });

  const handleCloseClick = () => {
    dispatch(openDetailPopup(false));
    dispatch(clearDetailData());
  };
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
            <Search handleSearch={handleSearch} value={search} />
          </div>
          {isLoading || !featureCollection ? (
            <TableLoader />
          ) : (
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
