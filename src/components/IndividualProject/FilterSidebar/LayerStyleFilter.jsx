/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from 'react';
import Select from '@Components/common/Select/index';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectOptions, selectSizeOptions, optionTypeList, optionStyleList } from '@src/constants/commonData';
import { Creators, Types as IndividualProjectTypes } from '@Actions/individualProject';
import Input from '@Components/common/Input/index';
import RangeSlider from '@Components/common/RangeSlider/index';
import OptionsButton from '@Components/common/OptionsButton/index';
import { selectedLayerStyleSelector, finalLayerStyleSelector } from '@Selectors/individualProject';
import useDebouncedInput from '@Hooks/useDebouncedInput';
import Spinner from '@Components/common/Spinner/index';
import SVGImageIcon from '@Components/common/SVGImageIcon/index';
import { svgIcons } from '@src/constants/icons';

const {
  setLayerFilterActive,
  setEditLayerData,
  handleStyleInput,
  clearData,
  clearLayerData,
  getGroupListRequest,
  openDatasetPopup,
  setAddUploadDataFile,
  getIndividualLayerDataRequest,
  getAttributeAliasRequest,
  postLayerDataRequest,
  postSubLayerDataRequest,
  setActiveTypeTab,
  setAddUpdatedData,
  clearLayerStyleData,
  setSelectedData,
} = Creators;

const LayerStyleFilter = ({ active, isGroupLoading }) => {
  const dispatch = useDispatch();
  const [activeStyleTab, setActiveStyleTab] = useState('Standard');
  const [type, setType] = useState(null);
  const selectedLayerName = useSelector((state) => state.individualProject.selectedLayerName);
  const themeId = useSelector((state) => state.individualProject.themeId);
  const groupList = useSelector((state) => state.layerStyle.groupList);
  const attributeAlias = useSelector((state) => state.layerStyle.attributeAlias);
  const activeTypeTab = useSelector((state) => state.layerStyle.activeTypeTab);
  const layerIdHavingSubLayer = useSelector((state) => state.layerStyle.layerIdHavingSubLayer);
  const selectedData = useSelector((state) => state.layerStyle.selectedData);
  const selectedLayerId = useSelector((state) => state.individualProject.selectedLayerId);
  const selectedType = useSelector((state) => state.individualProject.selectedType);
  const individualLayerData = useSelector((state) => state.individualProject.individualLayerData);
  const standardIcons = useSelector((state) => state.individualProject.standardIcons);
  const layerData = useSelector((state) => state.individualProject.layerData);
  const openPopup = useSelector((state) => state.individualProject.openDatasetPopup);
  const finalData = useSelector(finalLayerStyleSelector);
  const selectedLayerStyle = useSelector(selectedLayerStyleSelector);
  const [layerStyle, handleChange] = useDebouncedInput({
    ms: 70,
    init: selectedLayerStyle,
    onChange: (debouncedEvent) => {
      const { name, value } = debouncedEvent.target;
      dispatch(handleStyleInput({ name, value }));
    },
  });
  const { lineColor, fillColor, lineOpacity, fillOpacity, lineThickness, dashline, circleRadius, bgColor, layerName } =
    layerStyle;
  const handleSelect = (value) => {
    dispatch(handleStyleInput({ name: 'icon_size', value: { ...value.size, type: value.name } }));
  };

  const handleSelect1 = (value) => {
    dispatch(setSelectedData(value.name));
    dispatch(handleStyleInput({ name: 'group', value: value.id }));
  };

  const handleSubLayerSelect = (value) => {
    dispatch(setSelectedData(value.name));
    dispatch(handleStyleInput({ name: 'sub_layers_mapping_field', value: value.name }));
  };

  const handleClick = () => {
    dispatch(setLayerFilterActive('map'));
    dispatch(clearData());
    dispatch(clearLayerData());
    dispatch(clearLayerStyleData());
  };

  const handleIconClick = (value) => {
    dispatch(handleStyleInput({ name: 'icon', value: { url: value.icon, color: value.color, id: value.id } }));
    dispatch(setAddUploadDataFile({ value: null }));
  };

  const onChangeHandler = (event) => {
    const { files } = event.target;
    dispatch(setAddUploadDataFile({ value: files[0] }));
    dispatch(handleStyleInput({ name: 'icon', value: { url: '', color: '' } }));
  };

  const handleAddClick = () => {
    dispatch(openDatasetPopup({ value: true, name: 'group' }));
  };

  const onSubmitClick = () => {
    if (selectedType === 'subLayer') {
      dispatch(postSubLayerDataRequest({ id: selectedLayerId, finalData, type, layerData, themeId }));
      dispatch(
        setAddUpdatedData({
          layerId: layerIdHavingSubLayer,
          subId: selectedLayerId,
          themeId,
          type: activeTypeTab,
          group: finalData?.group || '',
          layerName: selectedLayerName,
        }),
      );
    } else {
      dispatch(
        setAddUpdatedData({
          layerId: selectedLayerId,
          themeId,
          type: activeTypeTab,
          group: finalData?.group || '',
          layerName: selectedLayerName,
        }),
      );
      dispatch(postLayerDataRequest({ id: selectedLayerId, finalData, type, layerData, themeId }));
    }
  };

  useEffect(() => {
    setType(activeTypeTab);
  }, []);

  useEffect(() => {
    if (activeTypeTab === 'Sub-layer' && selectedLayerId)
      dispatch(getAttributeAliasRequest({ layer: selectedLayerId }));
  }, [activeTypeTab]);

  useEffect(() => {
    if (themeId) dispatch(getGroupListRequest({ theme: themeId }));
  }, [themeId, openPopup]);

  return (
    <aside
      className={
        active === 'layerFilter' ? 'filter-sidebar pd-15 is-bg filter-sidebar_active' : 'filter-sidebar pd-15 is-bg'
      }
    >
      <div className="filter-sidebar_header">
        <a className="is-circle is-circle_sm" onClick={handleClick}>
          <i className="material-icons">arrow_back</i>
        </a>
      </div>
      <div className="filter-sidebar_body is-overflow" style={{ height: '60vh' }}>
        {selectedType !== 'subLayer' && (
          <>
            <Input
              label="Layer Name"
              name="layerName"
              value={layerName || selectedLayerName}
              onChange={handleChange}
              placeholder="Layer Name"
            />
            <OptionsButton
              options={optionTypeList}
              selected={activeTypeTab}
              setActiveTab={setActiveTypeTab}
              label="Type"
              description="You can assign these layer to an existing data group or you can create a new."
            />
            {activeTypeTab === 'Group' && (
              <div className="pm-group">
                <label className="is-capitalize">Data Group</label>
                <div className="is-flex is-start is-align-center is-gap-10">
                  {isGroupLoading ? (
                    <Spinner
                      style={{
                        width: '18px',
                        height: '18px',
                        border: '3px solid #ffffff',
                        borderTop: '3px solid #0055ff',
                        marginLeft: '6px',
                      }}
                    />
                  ) : (
                    <Select
                      selected={selectedData || 'Choose'}
                      handleSelect={handleSelect1}
                      options={groupList}
                      className="pm-select_100"
                    />
                  )}
                  <button
                    type="button"
                    className="is-btn is-btn_secondary is-btn_icon"
                    modal-link="add-layer"
                    onClick={handleAddClick}
                  >
                    <i className="material-icons-outlined">add_circle_outline</i>
                    <span>add</span>
                  </button>
                </div>
              </div>
            )}
            {activeTypeTab === 'Sub-layer' && (
              <div className="pm-group">
                <label className="is-capitalize">Attribute</label>
                <Select
                  selected={selectedData || 'Choose'}
                  handleSelect={handleSubLayerSelect}
                  options={attributeAlias}
                  className="pm-select_100"
                />
              </div>
            )}
          </>
        )}
        <OptionsButton
          options={optionStyleList}
          selected={activeStyleTab}
          setActiveTab={setActiveStyleTab}
          label="Styling"
        />
        {/* individualLayerData?.geom_type === 'Point' && activeStyleTab === 'Standard' && (
          <>
            <div className="pm-group">
              <label>Placemark</label>
              <div className="is-bg-white is-border is-radius-4 pd-15 customicon-list">
                <ul className="is-flex is-start is-align-center is-wrap is-gap-5">
                  {standardIcons?.length &&
                    standardIcons?.map((item) => (
                      <li
                        className="is-active is-circle is-circle_sm is-column"
                        style={{ background: bgColor || `${item.color}`, padding: '5px' }}
                        onClick={() => handleIconClick(item)}
                      >
                        <SVGImageIcon id={item.id} src={item.icon} color={item.color} />
                      </li>
                    ))}
                </ul>
                <div className="mt-15 is-flex is-start is-align-center">
                  <a className="is-btn is-btn_link">
                    <span>see more icons</span>
                  </a>
                  <button className="pmupload-btn is-btn is-btn_link is-btn_icon" type="button">
                    <label>
                      <input type="file" onChange={onChangeHandler} accept="image/svg" />
                      <span>Upload Custom Icon</span>
                    </label>
                  </button>
                </div>
              </div>
            </div>
            <div className="pm-group">
              <label>Default Color </label>
              <div className="color-list">
                <ul className="is-flex is-start is-align-center is-wrap is-gap-10 " style={{ cursor: 'pointer' }}>
                  <li style={{ backgroundColor: '#71269C' }} className="is-active" />
                  <li style={{ backgroundColor: '#333F99' }} />
                  <li style={{ backgroundColor: '#1876D3' }} />
                  <li style={{ backgroundColor: '#05786A' }} />
                  <li style={{ backgroundColor: '#388E3C' }} />
                  <li style={{ backgroundColor: '#F7CE8B' }} />
                  <li style={{ backgroundColor: '#FAC02B' }} />
                  <li style={{ backgroundColor: '#F47D06' }} />
                </ul>
                <div className="mt-15">
                  <button className="pmupload-btn is-btn is-btn_link is-btn_icon" type="button">
                    <label>
                      <input type="color" name="bgColor" value={bgColor} onChange={handleChange} />
                      <span>custom color</span>
                    </label>
                  </button>
                </div>
              </div>
            </div>
            <div className="pm-group">
              <label className="is-capitalize">Size</label>
              <Select
                selected="Choose"
                handleSelect={handleSelect}
                options={selectSizeOptions}
                className="pm-select_100"
              />
            </div>
          </>
                    ) */}

        {selectedType !== 'layerWithSubLayer' && (
          <>
            <Input label="Fill Color" name="fillColor" value={fillColor} onChange={handleChange} type="color" />
            <Input label="Line Color" name="lineColor" value={lineColor} onChange={handleChange} type="color" />
            <RangeSlider label="Line Opacity" name="lineOpacity" value={lineOpacity} onChange={handleChange} />
            <RangeSlider label="Fill Opacity" name="fillOpacity" value={fillOpacity} onChange={handleChange} />
            <Input
              label="Line Thickness"
              name="lineThickness"
              value={lineThickness}
              onChange={handleChange}
              type="number"
              min="0"
              max="100"
            />

            <Input type="number" name="circleRadius" label="Radius" value={circleRadius} onChange={handleChange} />
          </>
        )}
      </div>
      <div className="filter-sidebar_footer is-flex is-start is-gap-30">
        <button className="is-btn is-btn_link" type="button">
          Clear
        </button>
        <button className="is-btn is-btn_primary" type="button" onClick={onSubmitClick}>
          Done
        </button>
      </div>
    </aside>
  );
};

LayerStyleFilter.defaultProps = {
  active: '',
  isGroupLoading: false,
};

LayerStyleFilter.propTypes = {
  active: PropTypes.string,
  isGroupLoading: PropTypes.bool,
};

export default LayerStyleFilter;
