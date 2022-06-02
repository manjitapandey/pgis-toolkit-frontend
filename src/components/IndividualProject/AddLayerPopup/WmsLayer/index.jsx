import React from 'react';
import Input from '@Components/common/Input/index';

const WmsLayer = () => {
  const onTextChangeHandler = () => {};
  return (
    <div className="mt-15">
      <Input label="Layer Name" name="layerName" value="" onChange={onTextChangeHandler} placeholder="Layer Name" />
      <Input
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
