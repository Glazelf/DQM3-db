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
    <div className="skill-list">
      Skill List
      {monsterIds.map((monsterId) => (
        <div key={monsterId} className='skill-list'> {talentsJSON[monstersJSON[monsterId]?.talents]?.name} </div>
      ))}
    </div>
  );
};

export default TalentContainer;