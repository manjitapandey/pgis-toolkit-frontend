/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Checkbox from '@Components/common/Checkbox/index';
import Dropdown from '@Components/IndividualOrganizations/Dropdown/index';
import { Creators } from '@Actions/individualProject';
import popupAction from '@Actions/popup';
import { capitalize } from '@Utils/commonUtils';

const {
  setLayerFilterActive,
  setLayerDeleteData,
  setEditLayerData,
  setZoomToLayerId,
  openDetailPopup,
  getFeatureCollectionRequest,
  selectLayerData,
  setLayerIdHavingSubLayer,
  getIndividualLayerDataRequest,
} = Creators;

const ListCustomInput = ({ uniqueId, catName, isSelected, onChange, icon, onListChange, options, themeId, type }) => {
  const dispatch = useDispatch();
  const [showList, setShowList] = useState(false);
  const layerData = useSelector((state) => state.individualProject.layerData);
  const handleEdit = (layId, layName, theId, types, unId) => {
    if (!unId && layId && types === 'group') dispatch(getIndividualLayerDataRequest({ id: layId, layerData }));
    dispatch(setEditLayerData({ id: layId, name: layName, theId, type: types, unId }));
    dispatch(setLayerFilterActive('layerFilter'));
    if (types === 'subLayer') dispatch(setLayerIdHavingSubLayer(unId));
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

  const handleClick = () => {
    setShowList(!showList);
  };

  return (
    <>
      <li className="" key={`${catName},${uniqueId}`}>
        <div className="is-flex is-between is-align-start is-gap-10">
          <Checkbox
            id={uniqueId}
            name={capitalize(catName)}
            checked={isSelected}
            label={capitalize(catName)}
            onChange={onChange}
            icon={icon}
            className="is-flex is-grow"
          />
          <div className="is-flex is-end is-icon_list is-align-center">
            {type !== 'group' && (
              <button
                type="button"
                className="is-btn is-btn_link is-btn_sm"
                onClick={() => handleExploreClick(uniqueId, catName)}
              >
                <span>Explore</span>
              </button>
            )}
            {type !== 'group' && isSelected && (
              <div className="pm-dropdown pm-dropdown_option">
                <a
                  href="#"
                  className="is-circle is-circle_xs"
                  onClick={() => handleEdit(uniqueId, catName, themeId, type)}
                >
                  <i className="material-icons-outlined">edit</i>
                </a>
              </div>
            )}
            <Dropdown
              handleDeleteClick={() => handleDeleteClick(uniqueId, catName)}
              handleZoomClick={() => handleZoomClick(uniqueId)}
              layerId={uniqueId}
            />
            {type === 'group' || options.length ? (
              showList ? (
                <a href={() => {}} className="is-circle is-circle_xs is-circle_hover__white" onClick={handleClick}>
                  <i className="material-icons-outlined">remove_circle_outline</i>
                </a>
              ) : (
                <a href={() => {}} className="is-circle is-circle_xs is-circle_hover__white" onClick={handleClick}>
                  <i className="material-icons-outlined">add_circle_outline</i>
                </a>
              )
            ) : (
              <></>
            )}
          </div>
        </div>
        <ul className="is-list" style={!showList ? { display: 'none' } : { display: 'block' }}>
          {options?.length ? (
            options?.map((item) => (
              <li className="is-flex is-between is-align-start is-gap-10" key={`${item.name}${item.id}`}>
                <Checkbox
                  id={item.id}
                  name={capitalize(item.name)}
                  checked={item.isSelected}
                  label={capitalize(item.name)}
                  onChange={onListChange}
                  icon={item.icon}
                  className="is-flex is-grow"
                />
                <div className="is-flex is-end is-icon_list is-align-center">
                  {type === 'group' && (
                    <button
                      type="button"
                      className="is-btn is-btn_link is-btn_sm"
                      onClick={() => handleExploreClick(item?.id, item?.name)}
                    >
                      <span>Explore</span>
                    </button>
                  )}
                  {item.isSelected && (
                    <div className="pm-dropdown pm-dropdown_option">
                      <a
                        href="#"
                        className="is-circle is-circle_xs"
                        onClick={() =>
                          handleEdit(
                            item.id,
                            item?.name,
                            themeId,
                            type === 'group' ? type : 'subLayer',
                            type === 'group' ? null : uniqueId,
                          )
                        }
                      >
                        <i className="material-icons-outlined">edit</i>
                      </a>
                    </div>
                  )}
                  <Dropdown
                    handleDeleteClick={() => handleDeleteClick(item?.id, item?.name)}
                    handleZoomClick={() => handleZoomClick(item.id)}
                    display={type !== 'group'}
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
