'use client'

import React, { FC } from 'react';
import Monster from './Monster';

interface ParentsProps {
  id: string;
  selected: string;
  updateMonsterSet: Function;
};

const Parents: FC<ParentsProps> = ({ id, selected, updateMonsterSet }) => {
  return (
    <div>
      <div className="set">
        <Monster parent={selected.split(',')[0].trim()} id={`${id}L`} updateMonsterSet={updateMonsterSet} />
      </div>
      <div className="set">
        <Monster parent={selected.split(',')[1].trim()} id={`${id}R`} updateMonsterSet={updateMonsterSet} />
      </div>
    </div>
  );
};

export default Parents;