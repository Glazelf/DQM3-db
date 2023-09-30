'use client'

import React, { FC } from 'react';

interface FamilySelectorProps {
  updateFilter: object;
}

const FamilySelector: FC<FamilySelectorProps> = ({ updateFilter }) => {
  const familyIcons = [
    { name: 'Boss', family: '_boss', alt: 'boss family' },
    { name: 'Beast', family: '_beast', alt: 'beast family' },
    { name: 'Demon', family: '_demon', alt: 'demon family' },
    { name: 'Dragon', family: '_dragon', alt: 'dragon family' },
    { name: 'Material', family: '_material', alt: 'material family' },
    { name: 'Nature', family: '_nature', alt: 'nature family' },
    { name: 'Slime', family: '_slime', alt: 'slime family' },
    { name: 'Undead', family: '_undead', alt: 'undead family' },
  ];

  const handleFamilyClick = (familyName: string) => {
    updateFilter(familyName);
  };

  return (
    <div className='icon-container'>
      {familyIcons.map((family, index) => (
        <img
          key={index}
          className='family-icon'
          src={`/family_icons/${family.family}_icon.png`}
          alt={family.alt}
          onClick={() => handleFamilyClick(family.family)}
        />
      ))}
    </div>
  );
};

export default FamilySelector;
