'use client'

import React, { FC } from 'react';
import Monster from './Monster';

interface ParentsProps {
  selected: string;
};

const Parents: FC<ParentsProps> = ({ selected }) => {
  return (
    <div>
      <div className="set">
        <Monster parent={selected.split(',')[0].trim()} />
      </div>
      <div className="set">
        <Monster parent={selected.split(',')[1].trim()} />
      </div>
    </div>
  );
};

export default Parents;