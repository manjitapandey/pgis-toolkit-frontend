/* eslint-disable camelcase */
import React from 'react';
import { selectOptions } from '@src/constants/commonData';
import Text from '@Components/common/Text/index';
import Select from '@Components/common/Select/index';
import { useSelector } from 'react-redux';

const { BASE_URL } = process.env;

const Template = () => {
  const templateList = useSelector((state) => state.individualProject.templateList);
  const onTextChangeHandler = () => {};
  return (
    <div className="mt-15">
      <h6 className="mb-15">Select a Template</h6>
      <ul className="pm-list pm-list_border is-border pm-list_search is-overflow mb-15">
        {templateList?.map(({ id, name, geometry_type }) => (
          <li className="is-flex is-start is-align-start" kye={`${name}${id}`}>
            <div className="is-grow">
              <p className="fw-600 mb-05">{name}</p>
              <div className="is-flex is-start is-gap-15">
                <span>Attributes:</span>
                <span>-</span>
                <span className="fs-md clr-body-600">Lenght, Surface, Width</span>
              </div>
            </div>
            <div className="is-grow is-flex is-between is-align-center">
              <span>{geometry_type}</span>
              <a
                className="is-btn is-btn_link"
                href={`${BASE_URL}/projects/layer_template_download/?layer_template_id=${id}`}
                download
              >
                <span>Download</span>
              </a>
            </div>
          </li>
        ))}
      </ul>
      <h6 className="mt-15">Add Custom</h6>
      <div className="mt-15 mb-15">
        <Text label="Layer Name" name="layerName" value="" onChange={onTextChangeHandler} placeholder="Layer Name" />
        <div className="pm-group">
          <label>Feature Type</label>
          <Select className="pm-select_100" selected="choose" options={selectOptions} />
        </div>
        <div className="is-flex is-start is-align-start is-gap-15 is-wrap">
          <div className="pm-group is-grow">
            <Select className="pm-select_100" selected="choose" options={selectOptions} />
          </div>
          <div className="is-flex is-start is-align-start is-grow is-gap-15 is-wrap">
            <div className="pm-group is-grow">
              <Select className="pm-select_100" selected="choose" options={selectOptions} />
            </div>
            <div className="pm-group is-grow">
              <Select className="pm-select_100 is-grow" selected="choose" options={selectOptions} />
            </div>
          </div>
        </div>
        <button type="button" className="is-btn is-btn_link is-btn_icon">
          <i className="material-icons">add_circle_outline</i>
          <span>add</span>
        </button>
      </div>
    </div>
  );
};

export default Template;
