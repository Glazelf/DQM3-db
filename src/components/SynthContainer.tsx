'use client'

import React, { FC, useState } from 'react';
import Monster from '../components/Monster';
import FamilySelector from '../components/FamilySelector';

const SynthContainer = () => {
  const [filterFamily, setFilterFamily] = useState<string>('');

  const updateFilter = (family: string) => {
    setFilterFamily(family);
  }

  return (
    <div className="home-container">
      <FamilySelector updateFilter={updateFilter} />
      <Monster parent={filterFamily} />
    </div>
  )
};

export default SynthContainer;