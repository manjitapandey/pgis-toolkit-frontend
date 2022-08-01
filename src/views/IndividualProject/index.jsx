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
import Loader from '@Components/common/Loader/index';
import DetailDataPopup from '@Components/IndividualProject/DetailDataPopup/index';

const {
  getProjectLayerDataRequest,
  getProjectThemeRequest,
  getIndividualProjectDataRequest,
  getLayerTemplateListRequest,
  getThemeListRequest,
  deleteLayerDataRequest,
  getStandardIconsRequest,
} = Creators;

const IndividualProject = () => {
  const { id, uniqueId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const mapToggle = useSelector((state) => state.individualProject.mapToggle);
  const layerId = useSelector((state) => state.individualProject.layerId);
  const individualProjectData = useSelector((state) => state.individualProject.individualProjectData);
  const selectedLayerName = useSelector((state) => state.individualProject.selectedLayerName);
  const selectedLayerId = useSelector((state) => state.individualProject.selectedLayerId);
  const deletePopup = useSelector((state) => state.popup.deletePopup);
  const layerDeleteSuccess = useSelector((state) => state.individualProject.layerDeleteSuccess);
  const postSuccess = useSelector((state) => state.individualProject.postSuccess);
  const openPopup = useSelector((state) => state.individualProject.openDatasetPopup);

  const isLoading = useSelector((state) =>
    checkIfLoading(
      state,
      IndividualProjectTypes.GET_PROJECT_LAYER_DATA_REQUEST,
      IndividualProjectTypes.GET_STANDARD_ICONS_REQUEST,
    ),
  );
  const isProjectLoading = useSelector((state) =>
    checkIfLoading(state, IndividualProjectTypes.GET_INDIVIDUAL_PROJECT_DATA_REQUEST),
  );
  const isDetailLoading = useSelector((state) =>
    checkIfLoading(state, IndividualProjectTypes.GET_FEATURE_COLLECTION_REQUEST),
  );
  const isGroupLoading = useSelector((state) => checkIfLoading(state, IndividualProjectTypes.GET_GROUP_LIST_REQUEST));
  const handleClick = () => {
    history.push(`/organizations/${id}`);
  };

  const isLayerDataLoading = useSelector((state) =>
    checkIfLoading(state, IndividualProjectTypes.GET_INDIVIDUAL_LAYER_DATA_REQUEST),
  );

  const handleCloseClick = () => {
    dispatch(popupAction.openDeletePopup(false));
  };

  const handleButtonClick = () => {
    dispatch(deleteLayerDataRequest({ id: selectedLayerId, isDelete: true }));
  };

  useEffect(() => {
    dispatch(getLayerTemplateListRequest());
    dispatch(getThemeListRequest({ project: uniqueId }));
    dispatch(getStandardIconsRequest());
    dispatch(getIndividualProjectDataRequest({ project: uniqueId }));
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getProjectLayerDataRequest(uniqueId));
  // }, [dispatch, layerId,  layerDeleteSuccess, openPopup, postSuccess]);

  if (isProjectLoading) {
    return <Loader />;
  }

  return (
    <>
      <ProjectHeader title={individualProjectData?.name} handleClick={handleClick} />
      <main className="dbd-main">
        <div className="dbd-body">
          <div className={mapToggle ? 'dbd-map is-flex dbd-map_active' : 'dbd-map is-flex'}>
            <MapSidebar isLoading={isLoading} isGroupLoading={isGroupLoading} isLayerLoading={isLayerDataLoading} />
            <DetailDataPopup isLoading={isDetailLoading} />
            <DeletePopup
              name={selectedLayerName}
              popup={deletePopup}
              header="Delete Layer Data"
              handleCloseClick={handleCloseClick}
              handleButtonClick={handleButtonClick}
            />
            <AddLayerPopup />
            <AddProjectPopup id={uniqueId} isLoading={isGroupLoading} />
            <OlMap />
          </div>
        </div>
      </main>
    </>
  );
};

export default IndividualProject;
