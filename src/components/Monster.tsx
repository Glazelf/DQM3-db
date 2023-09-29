'use client'

import React, { FC, useState, useEffect } from 'react';
// @ts-ignore  
import monsters from '../../objects/monsters';
import { getMonsterByName, getMonsterListByParent, monsterNames } from '../helpers/monsterDataHelper';
import Parents from './Parents';

interface MonsterProps {
  parent: string;
}

const Monster: FC<MonsterProps> = ({ parent }) => {
  const [selectedValue, setSelectedValue] = useState<string>(parent);
  const [selectedParentSet, setSelectedParentSet] = useState<string | undefined>(undefined);
  const [parentOptions, setParentOptions] = useState<Array<Array<string>> | undefined>(undefined);
  const fullList = getMonsterListByParent(parent) || monsterNames();
  const parentData = monsters[parent];

  useEffect(() => {
    if (selectedValue) {
      setParentOptions(undefined);
      setSelectedParentSet(undefined);
      const parents = getMonsterByName(selectedValue)?.synthesis;
      if (parents) {
        if (Array.isArray(parents[0])) {
          if (parents.length > 1) {
            setParentOptions(parents);
          } else {
            setSelectedParentSet(formatParentString(parents[0]));
          }
        } else {
          setSelectedParentSet(formatParentString(parents));
        }
      }
    }
  }, [selectedValue]);

  useEffect(() => {
    if (parentData) {
      setSelectedParentSet(formatParentString(parentData.synthesis));
    }
  }, [parentData]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  const updateParent = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedParentSet(event.target.value);
  };

  const formatParentString = (parentArray: Array<string>) => {
    return parentArray.join(' , ');
  }

  const renderParentSelect = () => (
    <select
      value={selectedParentSet} 
      onChange={updateParent} 
      className="parent-select"
    >
      <option hidden selected>Select one...</option>
      { parentOptions?.map((parents: Array<string>) => (
        <option key={formatParentString(parents)} value={formatParentString(parents)}>{formatParentString(parents)}</option>
      ))}
    </select>
  );

  return (
    <div>
      <div className="monster-container">
        <select
          value={selectedValue} 
          onChange={handleSelectChange} 
          disabled={parent && parentData}
        >
          { fullList.map((monsterName: string) => (
            <option key={monsterName} value={monsterName}>{monsterName}</option>
          ))}
        </select>
        { parentOptions && renderParentSelect() }
      </div>
      { selectedParentSet && <Parents selected={selectedParentSet} /> }
    </div>
  );
};

export default Monster;