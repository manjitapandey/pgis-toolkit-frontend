import React from 'react';
import Checkbox from '@Components/common/Checkbox/index';
import { checkboxOptions } from '@src/constants/commonData';

const OpenstreetMap = () => {
  const handleCheckbox = () => {};
  return (
    <div className="mt-15">
      <h6 className="mb-15">Data on OSM</h6>
      <ul className="is-list">
        <li>
          {checkboxOptions.map(({ id, name, isSelected }) => (
            <Checkbox
              id={id}
              name={name}
              checked={isSelected}
              label={name}
              onChange={(event) => handleCheckbox(event, name, name)}
            />
          ))}
        </li>
      </ul>
    </div>
  );
};

export default OpenstreetMap;
