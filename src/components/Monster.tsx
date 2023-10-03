'use client'

import React, { FC, useState, useEffect } from 'react';
// @ts-ignore  
import monsters from '../../objects/monsters';
import { getMonsterByName, getMonsterListByParent, monsterNames } from '../helpers/monsterDataHelper';
import Parents from './Parents';

interface MonsterProps {
  id: string;
  parent: string;
  updateMonsterSet: Function;
};

const Monster: FC<MonsterProps> = ({ id, parent, updateMonsterSet }) => {
  const [selectedValue, setSelectedValue] = useState<string>(parent);
  const [selectedParentSet, setSelectedParentSet] = useState<string | undefined>(undefined);
  const [parentOptions, setParentOptions] = useState<Array<Array<string>> | undefined>(undefined);
  const [acquired, setAcquired] = useState<boolean>(false);
  const fullList = getMonsterListByParent(parent) || monsterNames();
  const parentData = monsters[parent];

  useEffect(() => {
    if (selectedValue && updateMonsterSet) {
      setParentOptions(undefined);
      setSelectedParentSet(undefined);
      updateMonsterSet(id, selectedValue);
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
  }, [selectedValue, updateMonsterSet]);

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
    return parentArray?.join(' , ');
  };

  const setMonsterAcquired = () => {
    if (!acquired) {
      setParentOptions(undefined);
      setSelectedParentSet(undefined);
    }
    setAcquired(!acquired);
  }

  const renderParentSelect = () => (
    <select
      value={selectedParentSet}
      onChange={updateParent}
      className="parent-select"
    >
      {parentOptions?.map((parents: Array<string>) => (
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
          disabled={(parent && parentData) || acquired}
        >
          {fullList.map((monsterName: string) => (
            <option key={monsterName} value={monsterName}>{monsterName}</option>
          ))}
        </select>
        <label>
          <input
            type="checkbox"
            checked={acquired}
            onChange={setMonsterAcquired}
          />
          Acquired
        </label>
        {parentOptions && renderParentSelect()}
      </div>
      {selectedParentSet && !acquired && <Parents selected={selectedParentSet} id={id} updateMonsterSet={updateMonsterSet} />}
    </div>
  );
};

export default Monster;