/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Checkbox from '@Components/common/Checkbox/index';
import Dropdown from '@Components/IndividualOrganizations/Dropdown/index';
import { Creators } from '@Actions/individualProject';
import popupAction from '@Actions/popup';

const {
  setLayerFilterActive,
  setLayerDeleteData,
  setEditLayerData,
  setZoomToLayerId,
  openDetailPopup,
  getFeatureCollectionRequest,
  selectLayerData,
} = Creators;

const ListCustomInput = ({ uniqueId, catName, isSelected, onChange, icon, onListChange, options, themeId, type }) => {
  const dispatch = useDispatch();
  const handleEdit = (layId, layName, theId) => {
    dispatch(setEditLayerData({ id: layId, name: layName, theId }));
    dispatch(setLayerFilterActive('layerFilter'));
  };
  const handleDeleteClick = (layId, layName) => {
    dispatch(setLayerDeleteData({ id: layId, name: layName }));
    dispatch(popupAction.openDeletePopup(true));
  };
  const handleZoomClick = (layId) => {
    dispatch(setZoomToLayerId(layId));
  };
  const handleExploreClick = (id, name) => {
    dispatch(selectLayerData({ name, id }));
    dispatch(getFeatureCollectionRequest({ layer_id: id, limit: 5 }));
    dispatch(openDetailPopup(true));
  };

  return (
    <>
      <li className="" key={`${catName},${uniqueId}`}>
        <div className="is-flex is-between is-align-start is-gap-10">
          <Checkbox
            id={uniqueId}
            name={catName}
            checked={isSelected}
            label={catName}
            onChange={onChange}
            icon={icon}
            className="is-flex is-grow"
          />
          <div className="is-flex is-end is-icon_list is-align-center">
            <button
              type="button"
              className="is-btn is-btn_link is-btn_sm"
              onClick={() => handleExploreClick(uniqueId, catName)}
            >
              <span>Explore</span>
            </button>
            {type !== 'group' && isSelected && (
              <div className="pm-dropdown pm-dropdown_option">
                <a href="#" className="is-circle is-circle_xs" onClick={() => handleEdit(uniqueId, catName, themeId)}>
                  <i className="material-icons">edit</i>
                </a>
              </div>
            )}
            <Dropdown
              handleDeleteClick={() => handleDeleteClick(uniqueId, catName)}
              handleZoomClick={() => handleZoomClick(uniqueId)}
              layerId={uniqueId}
            />
          </div>
        </div>
        <ul className="is-list">
          {options.length ? (
            options.map((item) => (
              <li className="is-flex is-between is-align-start is-gap-10" key={`${item.name}${item.id}`}>
                <Checkbox
                  id={item.id}
                  name={item.name}
                  checked={item.isSelected}
                  label={item.name}
                  onChange={type === 'group' ? onChange : onListChange}
                  icon={item.icon}
                  className="is-flex is-grow"
                />
                <div className="is-flex is-end is-icon_list is-align-center">
                  {/* <button type="button" className="is-btn is-btn_link is-btn_sm" onClick={handleEdit}>
                  <span>Explore</span>
          </button> */}
                  {type === 'group' && item.isSelected && (
                    <div className="pm-dropdown pm-dropdown_option">
                      <a
                        href="#"
                        className="is-circle is-circle_xs"
                        onClick={() => handleEdit(item.id, item?.name, themeId)}
                      >
                        <i className="material-icons">edit</i>
                      </a>
                    </div>
                  )}
                  <Dropdown
                    handleDeleteClick={() => handleDeleteClick(uniqueId, catName)}
                    handleZoomClick={() => handleZoomClick(item.id)}
                  />
                </div>
              </li>
            ))
          ) : (
            <></>
          )}
        </ul>
      </li>
    </>
  );
};

ListCustomInput.propTypes = {
  uniqueId: PropTypes.number,
  catName: PropTypes.string,
  type: PropTypes.string,
  isSelected: PropTypes.bool,
  onChange: PropTypes.func,
  icon: PropTypes.string,
  onListChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object),
  themeId: PropTypes.number.isRequired,
};

ListCustomInput.defaultProps = {
  uniqueId: '',
  catName: '',
  isSelected: false,
  onChange: () => {},
  icon: '',
  onListChange: () => {},
  options: [],
  type: '',
};

export default ListCustomInput;
