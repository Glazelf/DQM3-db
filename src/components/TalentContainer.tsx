'use client'

import React, { FC } from 'react';
// @ts-ignore
import monsters from '../../objects/monsters';
// @ts-ignore
import talents from '../../objects/talents';

interface TalentContainerProps {
  monsterIds: Array<string>;
};

const TalentContainer: FC<TalentContainerProps> = ({ monsterIds }) => {
  let monsterTalents = "";
  monsterIds.forEach((monsterId) => {
    talents[monsters[monsterId]?.talents]?.forEach((talent: string) => {
      monsterTalents += talent + "\n";
    })
  })
  return (
    <div className="talent-list">
      Skill List
      <div key="monster-talents" className='talent-list'> {monsterTalents} </div>
    </div>
  );
};

export default TalentContainer;