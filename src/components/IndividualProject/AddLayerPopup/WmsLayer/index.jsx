import React from 'react';
import Text from '@Components/common/Text/index';

const WmsLayer = () => {
  const onTextChangeHandler = () => {};
  return (
    <div className="mt-15">
      <Text label="Layer Name" name="layerName" value="" onChange={onTextChangeHandler} placeholder="Layer Name" />
      <Text
        label="Your URL here"
        name="layerName"
        value=""
        onChange={onTextChangeHandler}
        placeholder="Your URL here"
      />
    </div>
  );
};

export default WmsLayer;
