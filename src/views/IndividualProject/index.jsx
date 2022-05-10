import ProjectHeader from '@Components/common/ProjectHeader/index';
import MapSidebar from '@Components/IndividualProject/MapSidebar/index';
import OlMap from '@Components/IndividualProject/OlMap/index';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';
import AddProjectPopup from '@Components/IndividualProject/AddDatasetPopup/index';
import AddLayerPopup from '@Components/IndividualProject/AddLayerPopup/index';
import FilterSidebar from '@Components/IndividualProject/FilterSidebar/index';

const IndividualProject = () => {
  const { id } = useParams();
  const history = useHistory();
  const mapToggle = useSelector((state) => state.individualProject.mapToggle);
  const handleClick = () => {
    history.push(`/organizations/${id}`);
  };
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
