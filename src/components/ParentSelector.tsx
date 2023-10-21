import React, { FC } from 'react';

interface ParentSelectorProps {
  parentOptions: Array<Array<string>>;
  selectedParentSet?: string;
  setSelectedParentSet: Function;
};

import { formatParentString } from '../helpers/monsterDataHelper';

const ParentSelector: FC<ParentSelectorProps> = ({ parentOptions, selectedParentSet, setSelectedParentSet }) => {
  const updateParent = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedParentSet(event.target.value);
  };

  return (
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
};

export default ParentSelector;