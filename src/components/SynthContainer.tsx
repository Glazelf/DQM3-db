'use client'

import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import Monster from '../components/Monster';
import MonsterInfo from '../components/MonsterInfo';
import FamilySelector from '../components/FamilySelector';
import TalentContainer from '../components/TalentContainer';
import { MonsterSet, MonsterNode } from '../components/types';

const SynthContainer = () => {
  const firstNode: MonsterNode = {
    acquired: false,
    id: 'c',
    name: '',
    parent: '',
    parentData: '',
    selectChange: (event: ChangeEvent<HTMLSelectElement>) => {},
    setAcquired: (event: ChangeEvent<HTMLInputElement>) => {},
    setSelectedParentSet: (value: string) => {},
  };
  const [filterFamily, setFilterFamily] = useState<string>('');
  const [monsterIdSet, setMonsterIdSet] = useState<Array<string>>([]);
  const [monsterSet, setMonsterSet] = useState<MonsterSet>({});
  const [selectedNode, setSelectedNode] = useState<MonsterNode>(firstNode);

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
      <TalentContainer monsterIds={monsterIdSet} />
      <div className="monster-info-container">
        <MonsterInfo selectedNode={selectedNode} />
      </div>
      <FamilySelector updateFilter={updateFilter} />
      <div className="monster-tree-container">
        <Monster 
          id='c'
          parent={filterFamily}
          setSelectedNode={setSelectedNode}
          selectedNode={selectedNode}
          updateMonsterSet={updateMonsterSet}
        />
      </div>
    </div>
  )
};

export default SynthContainer;