import React, { useState } from 'react';
import CardTab from '@Components/common/CardTab/index';
import sc1 from '@Assets/images/sc-1.png';
import { cardData, getImage } from '@src/constants/landing';

const WorkingUsafiri = () => {
  const [selectedCard, setSelectedCard] = useState('1');

  return (
    <section className="usafir-works pt-pb-100 is-bg" id="usafir-works">
      <div className="container">
        <div className="section-title mb-40">
          <h2 className="is-capitalize fw-bold">How USAFIRI Works?</h2>
        </div>
        <div className="row is-center">
          <div className="grid-lg-5 grid-sm-12">
            <ul className="tab-list fs-lg">
              {cardData.map((item) => (
                <CardTab
                  id={item?.id}
                  heading={item?.heading}
                  description={item?.description}
                  setSelectedCard={setSelectedCard}
                  selected={item.id === selectedCard}
                />
              ))}
            </ul>
          </div>
          <div className="grid-lg-7 grid-sm-12">
            <div className="pl-30">
              <figure className="usafir-works_figure">
                <img src={getImage(selectedCard)} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingUsafiri;
