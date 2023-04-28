import React, { useState } from 'react';
import CaseTab from '@Components/common/CaseTab/index';
import { tabOptions } from '@src/constants/commonData';
import { caseboxDetail } from '@src/constants/landing';

const Cases = () => {
  const [selected, setSelected] = useState('Transport Need Assessment');

  return (
    <section className="usafiri-cases pt-pb-100  ">
      <div className="container">
        <CaseTab tabOptions={tabOptions} caseboxDetail={caseboxDetail} selected={selected} setSelected={setSelected} />
      </div>
    </section>
  );
};

export default Cases;
