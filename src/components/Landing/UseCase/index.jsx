import React, { useState } from 'react';
import CaseTab from '@Components/common/CaseTab/index';
import { caseboxDetail } from '@src/constants/landing';
import { tabOptions } from '@src/constants/commonData';

const UseCase = () => {
  const [tab, setTab] = useState('Transport Need Assessment');

  return (
    <section className="usafiri-cases pt-pb-100 is-bg ">
      <div className="container">
        <div className="section-title is-text-center mb-40">
          <h2 className="is-capitalize fw-bold mb-12">Use Cases</h2>
          <p className="fs-xlg">
            A GIS-based tool to assess, in a participatory way, the unmet transportation
            <br /> needs and mobility barriers of rural communities.
          </p>
        </div>
        <CaseTab selected={tab} setSelected={setTab} caseboxDetail={caseboxDetail} tabOptions={tabOptions} />
      </div>
    </section>
  );
};

export default UseCase;
