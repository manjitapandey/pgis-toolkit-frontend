/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProjectHeader from '@Components/common/ProjectHeader/index';
import MapSidebar from '@Components/IndividualProject/MapSidebar/index';
import OlMap from '@Components/IndividualProject/OlMap/index';
import AddProjectPopup from '@Components/IndividualProject/AddDatasetPopup/index';
import AddLayerPopup from '@Components/IndividualProject/AddLayerPopup/index';
import FilterSidebar from '@Components/IndividualProject/FilterSidebar/index';
import { Creators } from '@Actions/individualProject';

const { getProjectLayerDataRequest } = Creators;

const IndividualProject = () => {
  const { id, uniqueId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const mapToggle = useSelector((state) => state.individualProject.mapToggle);
  const handleClick = () => {
    history.push(`/organizations/${id}`);
  };

  useEffect(() => {
    dispatch(getProjectLayerDataRequest(uniqueId));
  }, [dispatch]);
  return (
    <>
      <ProjectHeader title="Transportation mapping Kenya 1" handleClick={handleClick} />
      <main className="dbd-main">
        <div className="dbd-body">
          <div className={mapToggle ? 'dbd-map is-flex dbd-map_active' : 'dbd-map is-flex'}>
            <MapSidebar />
            <AddLayerPopup />
            <AddProjectPopup />
            <OlMap />
          </div>
        </div>
      </main>
    </>
  );
};

export default IndividualProject;
