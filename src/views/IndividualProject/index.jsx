/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProjectHeader from '@Components/common/ProjectHeader/index';
import MapSidebar from '@Components/IndividualProject/MapSidebar/index';
import OlMap from '@Components/IndividualProject/OlMap/index';
import AddProjectPopup from '@Components/IndividualProject/AddDatasetPopup/index';
import AddLayerPopup from '@Components/IndividualProject/AddLayerPopup/index';
import DeletePopup from '@Components/common/DeletePopup/index';
import FilterSidebar from '@Components/IndividualProject/FilterSidebar/index';
import popupAction from '@Actions/popup';
import { Creators, Types as IndividualProjectTypes } from '@Actions/individualProject';
import { checkIfLoading } from '@Utils/loaderSelector';

const { getProjectLayerDataRequest, getLayerTemplateListRequest, deleteLayerDataRequest } = Creators;

const IndividualProject = () => {
  const { id, uniqueId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const mapToggle = useSelector((state) => state.individualProject.mapToggle);
  const layerId = useSelector((state) => state.individualProject.layerId);
  const selectedLayerName = useSelector((state) => state.individualProject.selectedLayerName);
  const selectedLayerId = useSelector((state) => state.individualProject.selectedLayerId);
  const deletePopup = useSelector((state) => state.popup.deletePopup);
  const themeAddSuccess = useSelector((state) => state.individualProject.themeAddSuccess);
  const isLoading = useSelector((state) =>
    checkIfLoading(
      state,
      IndividualProjectTypes.GET_PROJECT_LAYER_DATA_REQUEST,
      // IndividualProjectTypes.GET_LAYER_TEMPLATE_LIST_REQUEST,
    ),
  );
  const handleClick = () => {
    history.push(`/organizations/${id}`);
  };

  const handleCloseClick = () => {
    dispatch(popupAction.openDeletePopup(false));
  };

  const handleButtonClick = () => {
    dispatch(deleteLayerDataRequest({ id: selectedLayerId, isDelete: true }));
  };

  useEffect(() => {
    dispatch(getLayerTemplateListRequest());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProjectLayerDataRequest(uniqueId));
  }, [dispatch, layerId, themeAddSuccess]);

  return (
    <>
      <ProjectHeader title="Transportation mapping Kenya 1" handleClick={handleClick} />
      <main className="dbd-main">
        <div className="dbd-body">
          <div className={mapToggle ? 'dbd-map is-flex dbd-map_active' : 'dbd-map is-flex'}>
            <MapSidebar isLoading={isLoading} />
            <DeletePopup
              name={selectedLayerName}
              popup={deletePopup}
              header="Delete Layer Data"
              handleCloseClick={handleCloseClick}
              handleButtonClick={handleButtonClick}
            />
            <AddLayerPopup />
            <AddProjectPopup id={uniqueId} />
            <OlMap />
          </div>
        </div>
      </main>
    </>
  );
};

export default IndividualProject;
