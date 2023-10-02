'use client'

import React, { FC } from 'react';
import monsters from '../../objects/monsters';

interface SkillContainerProps {
  monsterIds: Array<string>;
}

const SkillContainer: FC<SkillContainerProps> = ({ monsterIds }) => {

  return (
    <div className="skill-list">
      Skill List
      {monsterIds.map((monsterId) => (
        <div className='skill-list'> { monsters[monsterId]?.talents } </div>
      ))}
    </div>
  );
};

export default SkillContainer;
