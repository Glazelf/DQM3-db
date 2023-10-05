'use client'

import React, { FC, useEffect, useState } from 'react';
import Monster from '../components/Monster';
import FamilySelector from '../components/FamilySelector';
import SkillContainer from '../components/SkillContainer';

type MonsterSet = {
  [key: string]: string;
};

const SynthContainer = () => {
  const [filterFamily, setFilterFamily] = useState<string>('');
  const [monsterIdSet, setMonsterIdSet] = useState<Array<string>>([]);
  const [monsterSet, setMonsterSet] = useState<MonsterSet>({});

  const updateFilter = (family: string) => {
    setFilterFamily(family);
  };

  const updateMonsterSet = (id: string, monsterId: string) => {
    if (monsterId && !monsterSet[id]) {
      monsterSet[id] = monsterId;
      setMonsterIdSet(Object.keys(monsterSet).map((key) => monsterSet[key]).filter((monsterId) => monsterId.indexOf('_') != 0));
    };
  };

  return (
    <div className="home-container">
      <FamilySelector updateFilter={updateFilter} />
      <div className="skill-container">
        <SkillContainer monsterIds={monsterIdSet} />
      </div>
      <div className="all-monster-container">
        <Monster parent={filterFamily} id='' updateMonsterSet={updateMonsterSet} />
      </div>
    </div>
  )
};

export default SynthContainer;