'use client'

import React, { FC } from 'react';
// @ts-ignore
import monstersJSON from '../../objects/monsters';
// @ts-ignore
import talentsJSON from '../../objects/talents';

interface TalentContainerProps {
  monsterIds: Array<string>;
};

const TalentContainer: FC<TalentContainerProps> = ({ monsterIds }) => {
  return (
    <div className="talent-container">
      <div className="talent-list">
        <div className="talent-header">
          Talent List
        </div>
        <br />
        {Array.from(new Set(monsterIds)).map((monsterId) => (
          <div key={monsterId} className='talent-line-item'> {talentsJSON[monstersJSON[monsterId]?.talents]?.name} </div>
        ))}
      </div>
    </div>
  );
};

export default TalentContainer;